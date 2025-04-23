
import { Link, useLocation } from "react-router-dom";
import { MapPin, Compass, Bookmark, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/check-in"
          className={`flex flex-col items-center justify-center w-1/4 ${
            pathname === "/check-in" ? "text-primary" : "text-gray-500"
          }`}
        >
          <MapPin
            className={`h-6 w-6 ${
              pathname === "/check-in" ? "text-primary" : "text-gray-500"
            }`}
          />
          <span className="text-xs mt-1">Check-in</span>
        </Link>
        <Link
          to="/"
          className={`flex flex-col items-center justify-center w-1/4 ${
            pathname === "/" ? "text-primary" : "text-gray-500"
          }`}
        >
          <Compass
            className={`h-6 w-6 ${
              pathname === "/" ? "text-primary" : "text-gray-500"
            }`}
          />
          <span className="text-xs mt-1">Explore</span>
        </Link>
        <Link
          to="/saved"
          className={`flex flex-col items-center justify-center w-1/4 ${
            pathname === "/saved" ? "text-primary" : "text-gray-500"
          }`}
        >
          <Bookmark
            className={`h-6 w-6 ${
              pathname === "/saved" ? "text-primary" : "text-gray-500"
            }`}
          />
          <span className="text-xs mt-1">Saved</span>
        </Link>
        <Link
          to="/profile"
          className={`flex flex-col items-center justify-center w-1/4 ${
            pathname === "/profile" ? "text-primary" : "text-gray-500"
          }`}
        >
          <User
            className={`h-6 w-6 ${
              pathname === "/profile" ? "text-primary" : "text-gray-500"
            }`}
          />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
