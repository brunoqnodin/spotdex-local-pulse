
import { Business } from "../data/mockData";
import PromotionBadge from "./PromotionBadge";
import CrowdLevel from "./CrowdLevel";
import { Coffee, Dumbbell, Utensils, Star } from "lucide-react";

interface BusinessCardProps {
  business: Business;
  compact?: boolean;
  onSelect?: (business: Business) => void;
}

const BusinessCard = ({ business, compact = false, onSelect }: BusinessCardProps) => {
  const getBusinessIcon = () => {
    switch (business.type) {
      case 'gym':
        return <Dumbbell className="h-4 w-4" />;
      case 'restaurant':
        return <Utensils className="h-4 w-4" />;
      case 'cafe':
        return <Coffee className="h-4 w-4" />;
      case 'studio':
        return <Star className="h-4 w-4" />;
      default:
        return null;
    }
  };

  if (compact) {
    return (
      <div 
        className="relative w-32 flex-shrink-0 bg-white rounded-lg shadow-sm overflow-hidden"
        onClick={() => onSelect && onSelect(business)}
      >
        {business.hasPromotion && <PromotionBadge text={business.promotionText || "Promo"} />}
        <div className="h-20 bg-gray-200">
          <img src={business.image} alt={business.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-2">
          <h3 className="font-medium text-sm truncate">{business.name}</h3>
          <div className="flex items-center mt-1 text-xs text-gray-600">
            <span className="flex items-center">
              {getBusinessIcon()}
              <span className="ml-1">{Math.round(business.distance)}m</span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-xl shadow-sm overflow-hidden">
      {business.hasPromotion && <PromotionBadge text={business.promotionText || "Promo"} />}
      <div className="h-32 bg-gray-200">
        <img src={business.image} alt={business.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-base">{business.name}</h3>
            <div className="flex items-center mt-1 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                {getBusinessIcon()}
                {business.type.charAt(0).toUpperCase() + business.type.slice(1)}
              </span>
              <span className="mx-2">•</span>
              <span>{Math.round(business.distance)}m</span>
            </div>
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
            {business.subscriptionLevel}
          </div>
        </div>

        {business.isTrending && (
          <div className="mt-2 flex items-center py-1 px-2 bg-secondary/10 text-secondary rounded-full text-xs">
            <span className="mr-1">🔥</span> Trending Now
          </div>
        )}

        <CrowdLevel business={business} />
      </div>
    </div>
  );
};

export default BusinessCard;
