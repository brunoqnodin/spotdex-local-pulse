
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Business, userPosition } from "../data/mockData";
import BusinessMarker from "./BusinessMarker";

// This would typically come from environment variables
// For this demo we'll use a placeholder - replace with a real token in production
const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN"; 

interface MapProps {
  businesses: Business[];
  selectedBusiness?: Business | null;
  onBusinessSelect: (business: Business) => void;
}

const Map = ({ businesses, selectedBusiness, onBusinessSelect }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;

    // For demo purposes only - would use a real token in production
    if (MAPBOX_TOKEN === "YOUR_MAPBOX_TOKEN") {
      console.warn("Please replace with a valid Mapbox token");
    }
    
    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [userPosition.longitude, userPosition.latitude],
      zoom: 14,
    });

    // Add user position marker
    const userMarkerEl = document.createElement("div");
    userMarkerEl.className = "w-4 h-4 rounded-full bg-blue-500 border-2 border-white";
    
    new mapboxgl.Marker({ element: userMarkerEl })
      .setLngLat([userPosition.longitude, userPosition.latitude])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  // Add business markers
  useEffect(() => {
    if (!mapLoaded || !map.current) return;

    // Remove any existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    businesses.forEach((business) => {
      // Create marker element
      const markerEl = document.createElement("div");
      markerEl.className = "business-marker-container";
      
      // For this demo, we'll use simpler marker styling
      // based on business type
      const color = business.type === 'gym' ? '#3b82f6' : 
                    business.type === 'restaurant' ? '#ef4444' : 
                    business.type === 'cafe' ? '#f59e0b' : '#8b5cf6';
      
      markerEl.innerHTML = `
        <div class="w-8 h-8 rounded-full flex items-center justify-center shadow-md" 
             style="background-color: ${color}">
          <div class="text-white text-xs font-bold">${business.type.charAt(0)}</div>
        </div>
        ${business.hasPromotion ? '<div class="absolute -top-2 -right-2 bg-[#9b87f5] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-sm">%</div>' : ''}
      `;
      
      markerEl.addEventListener("click", () => {
        onBusinessSelect(business);
      });
      
      // Add selected styling if needed
      if (selectedBusiness?.id === business.id) {
        markerEl.classList.add("ring-4", "ring-[#9b87f5]", "z-10", "scale-125");
      }

      // Create and store the marker
      const marker = new mapboxgl.Marker({ element: markerEl })
        .setLngLat([business.longitude, business.latitude])
        .addTo(map.current!);

      markersRef.current[business.id] = marker;
    });
  }, [businesses, mapLoaded, selectedBusiness, onBusinessSelect]);

  // Pan to selected business
  useEffect(() => {
    if (selectedBusiness && map.current) {
      map.current.flyTo({
        center: [selectedBusiness.longitude, selectedBusiness.latitude],
        zoom: 15,
        essential: true,
        duration: 1000
      });
    }
  }, [selectedBusiness]);

  return (
    <div className="w-full h-[40vh] md:h-[70vh]">
      <div ref={mapContainer} className="w-full h-full rounded-b-lg" />
      {MAPBOX_TOKEN === "YOUR_MAPBOX_TOKEN" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/75 z-10">
          <div className="text-center p-4">
            <p className="text-gray-600">Map preview requires a valid Mapbox token.</p>
            <p className="text-sm text-gray-500">Add your token to the Map.tsx component.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
