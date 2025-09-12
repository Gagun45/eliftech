import type { FlowerType } from "@/lib/types";
import CartManage from "./CartManage/CartManage";

interface Props {
  flower: FlowerType;
  shopTitle: string;
}

const FlowerCard = ({ flower, shopTitle }: Props) => {
  console.log("qweqwe");
  return (
    <div className="bg-green-300 size-48 flex flex-col justify-between">
      <span>{flower.title}</span>
      <div className="h-32 w-full bg-blue-300" />
      <span>Price: {flower.price}</span>
      <CartManage flower={flower} shopTitle={shopTitle} />
    </div>
  );
};
export default FlowerCard;
