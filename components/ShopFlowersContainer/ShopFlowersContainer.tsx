import type { FlowerType } from "@/lib/types";
import FlowerCard from "../FlowerCard/FlowerCard";

interface Props {
    flowers: FlowerType[]
}

const ShopFlowersContainer = ({flowers}:Props) => {
  return (
    <div className="flex flex-wrap gap-4 border-2 border-black">
      {flowers.map((flower) => (
        <FlowerCard key={flower.id} flower={flower} />
      ))}
    </div>
  );
};
export default ShopFlowersContainer;
