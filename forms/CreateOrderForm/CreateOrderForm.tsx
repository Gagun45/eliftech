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
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const CreateOrderForm = () => {
  const { totalPrice } = useSelector(selectCartTotalData);
  const [createOrder] = useCreateOrderMutation();
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems } = useSelector(getCart);
  const form = useForm<CreateOrderType>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      email: "",
      phone: "",
    },
  });
  const onSubmit = async (values: CreateOrderType) => {
    const { email, phone } = values;
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
    };
    try {
      const res = await createOrder({ order });
      if (res.data?.success) {
        toast.success("Order created");
        form.reset();
        dispatch(clearCart());
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default CreateOrderForm;
