
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="px-4 pt-4 pb-2">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search businesses, activities..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full bg-gray-100 py-3 px-10 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <button type="submit" className="hidden">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
