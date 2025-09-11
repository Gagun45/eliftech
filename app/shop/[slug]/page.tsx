import ShopPageContent from "@/components/ShopPageContent/ShopPageContent";
import prisma from "@/lib/prisma";

interface Props {
  params: Promise<{ slug: string }>;
}

const ShopPage = async ({ params }: Props) => {
  const { slug } = await params;
  const shop = await prisma.shop.findUnique({
    where: { slug },
    include: { flowers: true },
  });

  if (!shop) return <main>No shop found</main>;
  return <ShopPageContent shop={shop} />;
};
export default ShopPage;
