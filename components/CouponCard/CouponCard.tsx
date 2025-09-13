import type { Coupon } from "@prisma/client";
import CopyCode from "./CopyCode/CopyCode";

interface Props {
  coupon: Coupon;
}

const CouponCard = ({ coupon }: Props) => {
  return (
    <div className="w-full p-1 rounded-md max-w-64 min-h-36 border-1 border-black flex flex-col">
      <span className="text-2xl font-semibold text-center">{coupon.label}</span>
      <span>
        Discount: <strong>{coupon.discountPercentage}%</strong>
      </span>
      <CopyCode code={coupon.code} />
    </div>
  );
};
export default CouponCard;
