"use client";

import LoadingButton from "@/components/General/LoadingButton/LoadingButton";
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
import type {
  CreateOrderType,
  FlowerOrderInterface,
  FlowerOrderItem,
} from "@/lib/types";
import { orderSchema } from "@/lib/zod-schemas";
import { useCreateOrderMutation } from "@/redux/services/ordersService";
import {
  clearCart,
  getCart,
  selectCartTotalData,
} from "@/redux/slices/cartSlice";
import type { AppDispatch } from "@/redux/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "sonner";

interface Props {
  couponCode: string | null;
}

const CreateOrderForm = ({ couponCode }: Props) => {
  const { totalPrice } = useSelector(selectCartTotalData);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems } = useSelector(getCart);
  const form = useForm<CreateOrderType>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      email: "",
      phone: "",
      address: "",
    },
  });
  const onSubmit = async (values: CreateOrderType) => {
    const { email, phone, address } = values;
    const orderItems: FlowerOrderItem[] = cartItems.map((item) => ({
      amount: item.amount,
      flowerTitle: item.flower.title,
      price: item.flower.price,
      shopTitle: item.shopTitle,
    }));
    const order: FlowerOrderInterface = {
      email,
      phone,
      totalPrice,
      orderItems,
      address,
      couponCode: couponCode ?? "",
    };
    try {
      const res = await createOrder({ order }).unwrap();
      if (res.orderId) {
        toast.success(res.message);
        dispatch(clearCart());
        router.push(`/order/${res.orderId}`);
      } else {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong");
    }
  };
  return (
    <Form {...form}>
      <h2 className="text-xl font-semibold italic">
        Fill in details below to make an order!
      </h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@doe.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Avenue" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? <LoadingButton /> : <Button type="submit">Order</Button>}
      </form>
    </Form>
  );
};
export default CreateOrderForm;
