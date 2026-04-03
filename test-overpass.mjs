import fetch from 'node-fetch';

async function test() {
    const userLat = 37.9735; // San Rafael, CA
    const userLon = -122.5310;
    
    // Test exact API query
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
    
    console.log("Querying...");
    const res = await fetch(`https://overpass-api.de/api/interpreter`, {
        method: 'POST',
        body: `data=${encodeURIComponent(overpassQuery)}`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    
    if (!res.ok) {
        console.log("Error:", res.status);
        console.log(await res.text());
        return;
    }
    
    const data = await res.json();
    console.log("Elements found:", data.elements.length);
    const pp = data.elements.filter(e => e.tags && e.tags.name && e.tags.name.toLowerCase().includes('planned parenthood'));
    console.log("Planned Parenthoods found:", pp.length);
    if (pp.length > 0) {
        console.log(pp[0].tags.name, "Tags:", pp[0].tags);
    }
}
test();
