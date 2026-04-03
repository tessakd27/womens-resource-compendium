"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Navigation, Phone } from "lucide-react";

// Fix for default marker icons in Next.js/Leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

// Component to handle map centering when search coordinate changes
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

interface Resource {
    id: number;
    name: string;
    type: string;
    phone: string;
    address: string;
    lat: number;
    lon: number;
    distance?: string;
    services: string[];
}

interface MapProps {
    center: [number, number];
    locations: Resource[];
}

export default function ResourceMap({ center, locations }: MapProps) {
  // Fix hydration issues by only rendering client-side
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[400px] border-4 border-black bg-card retro-shadow flex items-center justify-center">
        <div className="font-heading font-bold text-xl uppercase tracking-widest animate-pulse">
          Loading Map Server...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] border-4 border-black retro-shadow relative z-0 mb-8 bg-card flex flex-col">
      {/* Fake OS Title Bar */}
      <div className="flex justify-between items-center border-b-2 border-black retro-titlebar px-2 py-1 shrink-0">
        <div className="leading-none font-bold text-white tracking-widest uppercase text-sm">
          MapBrowser.exe
        </div>
        <div className="w-6 border-2 border-t-white border-l-white border-r-[#333] border-b-[#333] bg-[#d1deca] text-black font-sans text-xs flex items-center justify-center select-none shadow-sm cursor-default">
          X
        </div>
      </div>
      
      {/* Map Container */}
      <div className="grow relative z-0">
        <MapContainer 
            center={center} 
            zoom={11} 
            scrollWheelZoom={false} 
            style={{ height: '100%', width: '100%', backgroundColor: '#D1DECA' }}
            className="z-0"
        >
            <ChangeView center={center} zoom={11} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => (
                <Marker key={loc.id} position={[loc.lat, loc.lon]} icon={icon}>
                    <Popup className="retro-popup font-sans">
                        <div className="font-bold text-base mb-1">{loc.name}</div>
                        <div className="text-xs font-semibold px-2 py-0.5 border border-black inline-block mb-2 bg-[#d1deca] whitespace-nowrap">
                            {loc.type}
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {loc.services.map((service, i) => (
                                <span key={i} className="text-[9px] font-bold uppercase tracking-wider bg-black text-white px-1 py-0.5 whitespace-nowrap">
                                    {service}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 text-sm mt-1">
                            <div className="flex items-start gap-1">
                                <Navigation className="h-3 w-3 mt-1 shrink-0" />
                                <span>{loc.address}</span>
                            </div>
                            <div className="flex items-center gap-1 font-bold mt-1 text-[#000080]">
                                <Phone className="h-3 w-3" />
                                <span>{loc.phone}</span>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
      </div>

      <style jsx global>{`
        /* Overrides to make Leaflet fit our Web 1.0 aesthetic */
        .leaflet-container {
            font-family: var(--font-sans);
        }
        .leaflet-popup-content-wrapper {
            border-radius: 0 !important;
            border: 2px solid black;
            box-shadow: 4px 4px 0px 0px rgba(0,0,0,1) !important;
        }
        .leaflet-popup-tip {
            border: 2px solid black;
            border-top: none;
            border-left: none;
        }
      `}</style>
    </div>
  );
}
