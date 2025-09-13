import prisma from "@/lib/prisma";
import type { Coupon } from "@prisma/client";

const CouponsPage = async () => {
  let coupons: Coupon[] = [];
  try {
    const reqCoupons = await prisma.coupon.findMany();
    coupons = reqCoupons;
  } catch (error) {
    console.log("Coupon page error: ", error);
  }
  return (
    <main>
      CouponsPage
      <div className="flex flex-col">
        {coupons.map((coupon) => (
          <div key={coupon.id}>{coupon.label}</div>
        ))}
      </div>
    </main>
  );
};
export default CouponsPage;
