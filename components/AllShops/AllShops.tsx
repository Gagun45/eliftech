import { getAllShops } from "@/lib/actions/shop.actions";

const AllShops = async () => {
  const { shops } = await getAllShops();
  return (
    <div className="w-64 bg-red-300">
      {shops.map((shop) => (
        <div key={shop.id}> {shop.title}</div>
      ))}
    </div>
  );
};
export default AllShops;
