"use client";

import { useState, useMemo, useEffect } from "react";
import { MapPin, Search, Phone, Navigation, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";

// Dynamically import map so it doesn't break SSR
const ResourceMap = dynamic(() => import("@/components/ResourceMap"), { 
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] border-4 border-black bg-card retro-shadow flex items-center justify-center mb-8">
            <div className="font-heading font-bold text-xl uppercase tracking-widest animate-pulse">
                INITIALIZING MAP...
            </div>
        </div>
    )
});

// Fallback database for initial load before search
const fallbackDb = [
    { id: 1, name: "Planned Parenthood - Los Angeles", area: "213", type: "Health Clinic", phone: "(800) 576-5544", address: "400 W 30th St, Los Angeles, CA 90007", lat: 34.0273, lon: -118.2754, services: ["Abortion Services", "Birth Control", "STI Testing", "Screenings"] },
    { id: 2, name: "Austin Women's Health Center", area: "512", type: "Health Clinic", phone: "(512) 443-2888", address: "1902 S Interstate 35, Austin, TX 78704", lat: 30.2415, lon: -97.7497, services: ["Abortion Services", "Birth Control", "STI Testing", "Screenings"] },
    { id: 3, name: "Planned Parenthood - Near North", area: "312", type: "Health Clinic", phone: "(312) 266-1033", address: "1200 N LaSalle St, Chicago, IL 60610", lat: 41.9037, lon: -87.6327, services: ["Abortion Services", "Birth Control", "STI Testing", "Screenings"] },
    { id: 4, name: "Planned Parenthood - Seattle", area: "206", type: "Health Clinic", phone: "(800) 769-0045", address: "2001 E Madison St, Seattle, WA 98122", lat: 47.6163, lon: -122.3061, services: ["Abortion Services", "Birth Control", "STI Testing", "Screenings"] },
    { id: 5, name: "Walgreens Pharmacy (Seattle Example)", area: "206", type: "Pharmacy", phone: "Not Available", address: "Seattle, WA", lat: 47.6163, lon: -122.3061, services: ["Birth Control", "Condoms", "Plan B"] },
];

type Resource = typeof fallbackDb[0] & {
    distance?: string;
    distanceValue?: number;
    services: string[];
};

// Haversine formula to calculate the distance between two lat/lon coordinates in miles
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3958.8; // Earth's radius in miles
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export default function ResourcesMapPage() {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchResults, setSearchResults] = useState<Resource[]>(fallbackDb.map(r => ({ ...r, distance: "Available" })));
    
    // Default Map Center (Center of US roughly, or first result)
    const defaultCenter: [number, number] = searchResults.length > 0 
        ? [searchResults[0].lat, searchResults[0].lon] 
        : [39.8283, -98.5795];
    
    const [mapCenter, setMapCenter] = useState<[number, number]>(defaultCenter);

    // Debounce the query to avoid over-fetching the API
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 800);
        return () => clearTimeout(handler);
    }, [query]);

    // Fetch coordinates from OpenStreetMap Nominatim and calculate distances
    useEffect(() => {
        let isMounted = true;

        async function fetchLocationAndFilter() {
            if (debouncedQuery.trim().length === 0) {
                if (isMounted) {
                    setSearchResults(fallbackDb.map(r => ({ ...r, distance: "Available" })));
                    setIsSearching(false);
                }
                return;
            }

            if (isMounted) setIsSearching(true);
            const q = debouncedQuery.trim().toLowerCase();

            try {
                // Determine if it's an area code or an address/city
                const isAreaCode = /^\d{3}$/.test(q);
                let searchQuery = q;

                if (isAreaCode) {
                    searchQuery = `area code ${q} US`; // Best attempt to locate by area code on free service
                }

                const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery)}&format=json&limit=1&countrycodes=us`, {
                    headers: { 'User-Agent': 'Womens-Resource-Compendium/1.0' }
                });

                if (!res.ok) throw new Error("API returned an error");

                const data = await res.json();

                if (data && data.length > 0 && isMounted) {
                    const userLat = parseFloat(data[0].lat);
                    const userLon = parseFloat(data[0].lon);

                    // Center map on the search coordinates immediately
                    setMapCenter([userLat, userLon]);

                    // Construct OpenStreetMap Overpass API query
                    // Find Planned Parenthood specifically, clinics, and pharmacies within ~15 miles (24140 meters)
                    const overpassQuery = `
                        [out:json][timeout:25];
                        (
                            nwr["name"~"Planned Parenthood",i](around:24140,${userLat},${userLon});
                            nwr["amenity"="clinic"](around:24140,${userLat},${userLon});
                            nwr["amenity"="pharmacy"](around:24140,${userLat},${userLon});
                            nwr["healthcare"="clinic"](around:24140,${userLat},${userLon});
                        );
                        out center 50;
                    `;
                    
                    const overpassRes = await fetch(`https://overpass-api.de/api/interpreter`, {
                        method: 'POST',
                        body: `data=${encodeURIComponent(overpassQuery)}`,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    
                    if (overpassRes.ok) {
                        const overpassData = await overpassRes.json();
                        
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const liveResources: Resource[] = overpassData.elements
                            .filter((el: any) => el.tags && el.tags.name) // Make sure it has a name
                            .map((el: any) => {
                                const lat = el.lat || el.center?.lat;
                                const lon = el.lon || el.center?.lon;
                                const dist = calculateDistance(userLat, userLon, lat, lon);
                                
                                const nameLower = el.tags.name.toLowerCase();
                                let type = "Health Clinic";
                                let services = ["Screenings", "General Healthcare"];

                                if (el.tags.amenity === "pharmacy" || nameLower.includes("pharmacy") || nameLower.includes("walgreens") || nameLower.includes("cvs")) {
                                    type = "Pharmacy";
                                    services = ["Birth Control", "Condoms", "Plan B"];
                                } else if (nameLower.includes("planned parenthood") || nameLower.includes("women's health") || nameLower.includes("family planning")) {
                                    type = "Women's Clinic";
                                    services = ["Abortion Services", "Birth Control", "STI Testing", "Screenings"];
                                } else if (el.tags.amenity === "hospital") {
                                    type = "Hospital";
                                    services = ["Emergency Care", "General Healthcare"];
                                }
                                
                                const address = [el.tags["addr:housenumber"], el.tags["addr:street"], el.tags["addr:city"]]
                                    .filter(Boolean)
                                    .join(" ") || "Address not provided";
                                    
                                return {
                                    id: el.id,
                                    name: el.tags.name,
                                    area: "Local",
                                    type,
                                    phone: el.tags.phone || "Phone not available",
                                    address,
                                    lat,
                                    lon,
                                    services,
                                    distanceValue: dist,
                                    distance: dist.toFixed(1) + " miles"
                                };
                            })
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .filter((r: any) => r.distanceValue! <= 15.0)
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .sort((a: any, b: any) => a.distanceValue! - b.distanceValue!);
                            
                        // Filter out exact duplicates based on name
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const uniqueLiveResources = Array.from(new Map(liveResources.map((r: any) => [r.name, r])).values()) as Resource[];
                        
                        setSearchResults(uniqueLiveResources);
                    } else {
                        setSearchResults([]);
                    }
                } else if (isMounted) {
                    // fallback if no coordinates
                    const fallbackFilter = fallbackDb.filter(r =>
                        r.area.includes(q) ||
                        r.address.toLowerCase().includes(q) ||
                        r.name.toLowerCase().includes(q)
                    );
                    setSearchResults(fallbackFilter);
                }
            } catch (error) {
                console.error("API error:", error);
                if (isMounted) {
                    const fallbackFilter = fallbackDb.filter(r =>
                        r.area.includes(q) ||
                        r.address.toLowerCase().includes(q) ||
                        r.name.toLowerCase().includes(q)
                    );
                    setSearchResults(fallbackFilter);
                    if (fallbackFilter.length > 0) {
                        setMapCenter([fallbackFilter[0].lat, fallbackFilter[0].lon]);
                    }
                }
            } finally {
                if (isMounted) setIsSearching(false);
            }
        }

        fetchLocationAndFilter();

        return () => {
            isMounted = false;
        };
    }, [debouncedQuery]);

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-700">
            <div className="text-center space-y-4 mb-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground">Find Local Resources</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Search by your area code, city/state, or address. We query live OpenStreetMap data to find <strong>all nearby pharmacies (for condoms and birth control) and clinics/hospitals (for screenings and abortions)</strong> within 20 miles.
                </p>
            </div>

            <div className="max-w-2xl mx-auto mb-10 relative">
                <div className="relative flex items-center w-full">
                    {isSearching ? (
                        <Loader2 className="absolute left-5 h-6 w-6 text-primary animate-spin" />
                    ) : (
                        <Search className="absolute left-5 h-6 w-6 text-primary/70" />
                    )}
                    <Input
                        placeholder="Enter an area code, city (e.g., Brooklyn, NY), or address..."
                        className="pl-14 h-16 text-lg rounded-full border-primary/20 focus-visible:ring-primary shadow-sm bg-background/80 backdrop-blur transition-all hover:bg-background/100 hover:border-primary/40 focus:border-primary/40 focus:shadow-md"
                        value={query}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Interactive Map Component */}
            <ResourceMap center={mapCenter} locations={searchResults} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.length > 0 ? (
                    searchResults.map((resource) => (
                        <Card key={resource.id} className="border-border/60 bg-card flex flex-col items-start overflow-hidden group rounded-3xl">
                            <div className="h-1.5 w-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                            <CardHeader className="pb-2 w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline" className="bg-secondary/40 border-primary/20 text-primary">
                                        {resource.type}
                                    </Badge>
                                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                                        {resource.area}
                                    </Badge>
                                </div>
                                <CardTitle className="leading-snug text-lg font-heading">{resource.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 w-full grow flex flex-col justify-end pt-2">
                                <div className="flex flex-wrap gap-1 mb-2">
                                    {resource.services.map((service, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-black text-white px-1.5 py-0.5 whitespace-nowrap">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                                    <Navigation className="h-4 w-4 shrink-0 text-primary/70" />
                                    {resource.address}
                                    {resource.distance && (
                                        <span className="ml-auto font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                                            {resource.distance}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center bg-secondary/30 p-2.5 rounded-lg border my-1">
                                    <div className="flex items-center gap-2 font-medium text-foreground">
                                        <Phone className="h-4 w-4 text-primary" />
                                        {resource.phone}
                                    </div>
                                    <a href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`} className="text-primary text-sm font-semibold hover:underline">
                                        Call
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full py-16 text-center border-2 border-dashed rounded-3xl bg-secondary/10">
                        <MapPin className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
                        <h3 className="text-xl font-heading font-medium text-foreground">No resources found</h3>
                        <p className="text-muted-foreground mt-1">We couldn't find any clinics within 20 miles of that location in our current database.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
