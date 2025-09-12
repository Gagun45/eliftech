import type { FlowerType } from "@/lib/types";

interface Props {
  flower: FlowerType;
}

const FlowerCard = ({ flower }: Props) => {
  return (
    <div className="bg-green-300 size-48 flex flex-col justify-between">
      <span>{flower.title}</span>
      <div className="h-32 w-full bg-blue-300"/>
      <span>Price: {flower.price}</span>
    </div>
  );
};
export default FlowerCard;
