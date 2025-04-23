
import { useState } from "react";
import { Filter } from "lucide-react";

interface CategoryFilterProps {
  types: string[];
  subscriptionLevels: string[];
  onFilterChange: (type: string, level: string) => void;
}

const CategoryFilter = ({ types, subscriptionLevels, onFilterChange }: CategoryFilterProps) => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    onFilterChange(type, selectedLevel);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    onFilterChange(selectedType, level);
  };

  return (
    <div className="px-4 pb-2">
      <div className="flex items-center gap-4">
        <div className="flex overflow-x-auto no-scrollbar space-x-2 py-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
                selectedType === type
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {type === "All" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="p-2 rounded-full bg-gray-100"
        >
          <Filter className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {showFilters && (
        <div className="mt-2 bg-white rounded-md shadow-md p-4 animate-fade-in">
          <h3 className="font-medium mb-2">Subscription Level</h3>
          <div className="flex flex-wrap gap-2">
            {subscriptionLevels.map((level) => (
              <button
                key={level}
                onClick={() => handleLevelChange(level)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedLevel === level
                    ? "bg-secondary text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
