import type { FlowerType } from "@/lib/types";

interface Props {
  flower: FlowerType;
}

const FlowerCard = ({ flower }: Props) => {
  return <div className="bg-green-300 size-32">{flower.title}</div>;
};
export default FlowerCard;
