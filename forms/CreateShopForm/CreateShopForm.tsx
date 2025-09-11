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
import { createNewShop } from "@/lib/actions/shop.actions";
import type { CreateShopType } from "@/lib/types";
import { ShopSchema } from "@/lib/zod-schemas";
import { allShopsApi } from "@/redux/services/allShopsService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const CreateShopForm = () => {
  const dispatch = useDispatch()
  const form = useForm<CreateShopType>({
    resolver: zodResolver(ShopSchema),
    defaultValues: {
      title: "",
      flowerIds: [],
    },
  });
  const onSubmit = async (values: CreateShopType) => {
    const { title } = values;
    const res = await createNewShop({ title });
    if (res.success) {
      toast.success(res.message);
      dispatch(allShopsApi.util.invalidateTags(['Shops']))
    } else {
      toast.error(res.message);
    }
    form.reset();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shop Title</FormLabel>
              <FormControl>
                <Input placeholder="Shop..." {...field} />
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
export default CreateShopForm;
