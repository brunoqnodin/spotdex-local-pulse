
interface PromotionBadgeProps {
  text: string;
}

const PromotionBadge = ({ text }: PromotionBadgeProps) => {
  return (
    <div className="absolute -top-1 -right-1 bg-primary text-white rounded-full px-2 py-1 text-xs font-bold z-10 shadow-md animate-pulse">
      {text}
    </div>
  );
};

export default PromotionBadge;
