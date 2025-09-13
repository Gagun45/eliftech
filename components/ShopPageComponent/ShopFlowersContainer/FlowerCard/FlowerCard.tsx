import type { FlowerType } from "@/lib/types";
import CartManage from "./CartManage/CartManage";

interface Props {
  flower: FlowerType;
  shopTitle: string;
}

const FlowerCard = ({ flower, shopTitle }: Props) => {
  return (
    <div className="border-1 rounded-md border-black p-2 min-h-64 w-48 flex flex-col justify-between">
      <span>{flower.title}</span>
      <div className="w-full h-36 shrink-0 bg-blue-300" />
      <span>
        Price: <strong>{flower.price}$</strong>
      </span>
      <CartManage flower={flower} shopTitle={shopTitle} />
    </div>
  );
};
export default FlowerCard;
