"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createCoupon } from "@/lib/actions/coupon.actions";

import type { CreateCouponType } from "@/lib/types";
import { CouponSchema } from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateCouponForm = () => {
  const form = useForm<CreateCouponType>({
    resolver: zodResolver(CouponSchema),
    defaultValues: {
      label: "",
      discountPercentage: 0,
    },
  });
  const onSubmit = async (values: CreateCouponType) => {
    try {
      const { discountPercentage, label } = values;
      const res = await createCoupon({ discountPercentage, label });
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Coupon label</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="discountPercentage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discount (percentages)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={99}
                  {...field}
                  value={field.value ?? 0}
                  onChange={({ target }) =>
                    field.onChange(Number(target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default CreateCouponForm;
