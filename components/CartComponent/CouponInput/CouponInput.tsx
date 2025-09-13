"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCouponByCouponCode } from "@/lib/actions/coupon.actions";
import type { Coupon } from "@prisma/client";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "sonner";

interface Props {
  setCoupon: Dispatch<SetStateAction<Coupon | null>>;
}

const CouponInput = ({ setCoupon }: Props) => {
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = async () => {
    try {
      const { coupon } = await getCouponByCouponCode({ couponCode });
      if (coupon) {
        toast.success("Discount applied");
        setCoupon(coupon);
      } else {
        toast.error("Coupon not foundeed");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setCouponCode("");
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Input
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code..."
      />
      <Button disabled={!couponCode} onClick={handleApplyCoupon}>
        Apply coupon
      </Button>
    </div>
  );
};
export default CouponInput;
