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
import { getOrdersByEmailAndPhone } from "@/lib/actions/order.actions";
import type { OrderReturnInterface, SearchOrderType } from "@/lib/types";
import { searchOrderSchema } from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  setOrders: (orders: OrderReturnInterface[]) => void;
}

const SearchOrderForm = ({ setOrders }: Props) => {
  const form = useForm<SearchOrderType>({
    resolver: zodResolver(searchOrderSchema),
    defaultValues: {
      email: "",
      phone: "",
    },
  });
  const onSubmit = async (values: SearchOrderType) => {
    const { email, phone } = values;
    const res = await getOrdersByEmailAndPhone({ email, phone });
    if (res.success) {
      setOrders(res.orders);
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
        <div className="flex items-center gap-4">
          <Button type="submit">Search</Button>
          <Button
            type="button"
            onClick={() => {
              form.reset();
              setOrders([]);
            }}
          >
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default SearchOrderForm;
