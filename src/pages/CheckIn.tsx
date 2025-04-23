
import { useState } from "react";
import { MapPin, Check } from "lucide-react";
import Navigation from "../components/Navigation";
import BusinessCard from "../components/BusinessCard";
import { mockBusinesses } from "../data/mockData";

const CheckIn = () => {
  const [nearbyBusinesses] = useState(mockBusinesses.slice(0, 3));
  const [checkedInTo, setCheckedInTo] = useState<string | null>(null);

  const handleCheckIn = (businessId: string) => {
    setCheckedInTo(businessId);
    setTimeout(() => {
      // Just to simulate an API call and show success message
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-primary text-white p-6 pt-10 pb-20 rounded-b-3xl shadow-md">
        <h1 className="text-2xl font-bold">Check In</h1>
        <p className="text-primary-foreground/80 mt-1">Let others know you're here</p>
      </div>

      <div className="px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-center mb-5">Select a place to check in</h2>

          <div className="space-y-4">
            {nearbyBusinesses.map((business) => (
              <div 
                key={business.id}
                className="bg-gray-50 rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-gray-200 overflow-hidden mr-3">
                    <img src={business.image} alt={business.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">{business.name}</h3>
                    <p className="text-sm text-gray-500">{Math.round(business.distance)}m away</p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCheckIn(business.id)}
                  disabled={checkedInTo === business.id}
                  className={`rounded-full p-3 ${
                    checkedInTo === business.id
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                  } transition-colors`}
                >
                  <Check className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          
          {checkedInTo && (
            <div className="mt-6 bg-green-50 text-green-700 p-4 rounded-lg text-center animate-fade-in">
              You've successfully checked in!
            </div>
          )}
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default CheckIn;
