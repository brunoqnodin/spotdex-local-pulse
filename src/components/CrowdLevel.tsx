
import { Business, getCurrentHour } from "../data/mockData";

interface CrowdLevelProps {
  business: Business;
  compact?: boolean;
}

const CrowdLevel = ({ business, compact = false }: CrowdLevelProps) => {
  const currentHour = getCurrentHour();
  
  // Get crowd level colors based on level
  const getCrowdColor = (level: number) => {
    if (level < 30) return "bg-green-500";
    if (level < 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  if (compact) {
    // Find current crowd level
    const currentCrowdData = business.crowdLevels.find(cl => cl.hour === currentHour) || 
                           business.crowdLevels.reduce((prev, curr) => 
                             Math.abs(curr.hour - currentHour) < Math.abs(prev.hour - currentHour) ? curr : prev);
    
    const level = currentCrowdData?.level || 0;
    
    return (
      <div className="flex items-center space-x-1">
        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: getCrowdColor(level) }}></div>
        <span className="text-xs text-gray-600">
          {level < 30 ? "Not busy" : level < 70 ? "Moderate" : "Busy"}
        </span>
      </div>
    );
  }
  
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-medium text-gray-800">Popular Times</h3>
        <span className="text-xs text-gray-500">Now</span>
      </div>
      
      <div className="flex items-end h-12 space-x-1">
        {business.crowdLevels.map((crowdData) => {
          const isCurrentHour = crowdData.hour === currentHour;
          return (
            <div key={crowdData.hour} className="flex-1 flex flex-col items-center">
              <div 
                className={`w-full rounded-t ${getCrowdColor(crowdData.level)} ${isCurrentHour ? 'ring-2 ring-primary' : ''}`} 
                style={{ height: `${Math.max(5, crowdData.level)}%` }}
              ></div>
              <span className="text-[9px] text-gray-500 mt-1">{crowdData.hour}:00</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CrowdLevel;
