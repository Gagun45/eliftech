import ShopPageComponent from "@/components/ShopPageComponent/ShopPageComponent";
import prisma from "@/lib/prisma";

interface Props {
  params: Promise<{ slug: string }>;
}

const ShopPage = async ({ params }: Props) => {
  const { slug } = await params;
  let shop: { id: number; title: string } | null = null;
  try {
    const reqShop = await prisma.shop.findUniqueOrThrow({
      where: { slug },
      select: { id: true, title: true },
    });
    shop = reqShop;
  } catch (err) {
    console.log("Erro fetching data error: ", err);
  }

  if (!shop) return <main>No shop found</main>;
  return (
    <main>
      <h1 className="text-center font-bold text-4xl py-4">{shop.title}</h1>
      <ShopPageComponent shopId={shop.id} />
    </main>
  );
};
export default ShopPage;
