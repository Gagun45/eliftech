import CouponCard from "@/components/CouponCard/CouponCard";
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
      <div className="flex flex-wrap gap-2 w-full">
        {coupons.map((coupon) => (
          <CouponCard coupon={coupon} key={coupon.id} />
        ))}
      </div>
    </main>
  );
};
export default CouponsPage;
