import FlowerCard from "@/components/ShopPageComponent/ShopFlowersContainer/FlowerCard/FlowerCard";
import type { FlowerType } from "@/lib/types";

interface Props {
  flowers: FlowerType[];
  shopTitle: string;
}

const ShopFlowersContainer = ({ flowers, shopTitle }: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {flowers.map((flower) => (
        <FlowerCard key={flower.id} flower={flower} shopTitle={shopTitle} />
      ))}
    </div>
  );
};
export default ShopFlowersContainer;
