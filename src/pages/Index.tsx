
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import Map from "../components/Map";
import BusinessCard from "../components/BusinessCard";
import CategoryFilter from "../components/CategoryFilter";
import { Business, mockBusinesses, businessTypes, subscriptionLevels } from "../data/mockData";

const Index = () => {
  const [businesses, setBusinesses] = useState<Business[]>(mockBusinesses);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>(mockBusinesses);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter businesses based on search query, type and subscription level
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (type: string, level: string) => {
    let filtered = [...mockBusinesses];
    
    if (type !== "All") {
      filtered = filtered.filter(business => business.type === type.toLowerCase());
    }
    
    if (level !== "All") {
      filtered = filtered.filter(business => business.subscriptionLevel === level);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(business => 
        business.name.toLowerCase().includes(query) || 
        business.type.toLowerCase().includes(query)
      );
    }
    
    setFilteredBusinesses(filtered);
    setBusinesses(filtered);
  };

  // Effect for search filtering
  useEffect(() => {
    if (!searchQuery) {
      setFilteredBusinesses(mockBusinesses);
      setBusinesses(mockBusinesses);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = mockBusinesses.filter(business => 
      business.name.toLowerCase().includes(query) || 
      business.type.toLowerCase().includes(query)
    );
    
    setFilteredBusinesses(filtered);
    setBusinesses(filtered);
  }, [searchQuery]);

  const handleBusinessSelect = (business: Business) => {
    setSelectedBusiness(business === selectedBusiness ? null : business);
  };

  const trending = filteredBusinesses.filter(business => business.isTrending);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Map Section */}
      <Map 
        businesses={businesses} 
        selectedBusiness={selectedBusiness}
        onBusinessSelect={handleBusinessSelect}
      />
      
      {/* Main Content */}
      <div className="px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-t-xl shadow-sm px-4 py-5">
          <SearchBar onSearch={handleSearch} />
          <CategoryFilter 
            types={businessTypes} 
            subscriptionLevels={subscriptionLevels}
            onFilterChange={handleFilterChange}
          />
          
          {/* Trending Section */}
          {trending.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-3 flex items-center">
                <span className="mr-2">🔥</span> Trending Now
              </h2>
              <div className="flex overflow-x-auto space-x-3 pb-4 no-scrollbar">
                {trending.map(business => (
                  <BusinessCard 
                    key={business.id} 
                    business={business}
                    compact
                    onSelect={() => handleBusinessSelect(business)}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Nearby Businesses Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Nearby Places</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businesses.map(business => (
                <BusinessCard 
                  key={business.id} 
                  business={business}
                  onSelect={() => handleBusinessSelect(business)}
                />
              ))}
            </div>
            
            {businesses.length === 0 && (
              <div className="flex flex-col items-center justify-center py-8">
                <p className="text-gray-500">No businesses match your search</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Index;
