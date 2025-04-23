
import { useState } from "react";
import Navigation from "../components/Navigation";
import BusinessCard from "../components/BusinessCard";
import { mockBusinesses } from "../data/mockData";

const Saved = () => {
  // For demo, we'll assume the first two businesses are saved
  const [savedBusinesses] = useState(mockBusinesses.slice(0, 2));

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-primary text-white p-6 pt-10">
        <h1 className="text-2xl font-bold">Saved Places</h1>
        <p className="text-primary-foreground/80 mt-1">Your favorite spots</p>
      </div>

      <div className="p-4">
        {savedBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {savedBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-gray-100 p-5 rounded-full mb-4">
              <svg
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-gray-800 mb-2">No saved places yet</h2>
            <p className="text-gray-500 max-w-sm">
              When you find places you love, save them here for quick access
            </p>
          </div>
        )}
      </div>

      <Navigation />
    </div>
  );
};

export default Saved;
