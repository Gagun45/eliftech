import ShopPageContent from "@/components/ShopPageContent/ShopPageContent";
import prisma from "@/lib/prisma";

interface Props {
  params: Promise<{ slug: string }>;
}

const ShopPage = async ({ params }: Props) => {
  const { slug } = await params;
  const shop = await prisma.shop.findUnique({
    where: { slug },
    select: { id: true, title: true },
  });

  if (!shop) return <main>No shop found</main>;
  return (
    <main>
      <h1>Shop {shop.title} page</h1>
      <ShopPageContent shopId={shop.id} />
    </main>
  );
};
export default ShopPage;
