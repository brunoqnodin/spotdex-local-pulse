
import { Business } from "../data/mockData";
import PromotionBadge from "./PromotionBadge";
import { Coffee, Dumbbell, Utensils, Star } from "lucide-react";

interface BusinessMarkerProps {
  business: Business;
  isSelected: boolean;
  onClick: () => void;
}

const BusinessMarker = ({ business, isSelected, onClick }: BusinessMarkerProps) => {
  const getMarkerBg = () => {
    switch (business.type) {
      case 'gym':
        return 'bg-blue-500';
      case 'restaurant':
        return 'bg-red-500';
      case 'cafe':
        return 'bg-amber-500';
      case 'studio':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getBusinessIcon = () => {
    switch (business.type) {
      case 'gym':
        return <Dumbbell className="h-3 w-3 text-white" />;
      case 'restaurant':
        return <Utensils className="h-3 w-3 text-white" />;
      case 'cafe':
        return <Coffee className="h-3 w-3 text-white" />;
      case 'studio':
        return <Star className="h-3 w-3 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`relative cursor-pointer ${isSelected ? 'z-10 scale-125' : ''}`}
      onClick={onClick}
    >
      <div className={`
        ${getMarkerBg()} 
        rounded-full w-8 h-8 
        flex items-center justify-center
        ${isSelected ? 'ring-4 ring-primary animate-pulse' : ''}
        shadow-md
        transform-gpu transition-all duration-200
      `}>
        {getBusinessIcon()}
      </div>
      <div className="w-2.5 h-2.5 bg-inherit transform rotate-45 absolute -bottom-1 left-2.75 shadow-sm"></div>
      
      {business.hasPromotion && (
        <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-sm animate-pulse">
          %
        </div>
      )}
    </div>
  );
};

export default BusinessMarker;
