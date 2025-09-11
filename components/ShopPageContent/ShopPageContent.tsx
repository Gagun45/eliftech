"use client";

import type { ShopType } from "@/lib/types";

interface Props {
  shop: ShopType;
}

const ShopPageContent = ({ shop }: Props) => {
  const { flowers, title } = shop;
  return (
    <div className="flex flex-col gap-4">
      <span>Shop {title} page</span>
      {flowers.map((flower) => (
        <div key={flower.id}>{flower.title}</div>
      ))}{" "}
    </div>
  );
};
export default ShopPageContent;
