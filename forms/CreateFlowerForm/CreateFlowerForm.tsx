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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createNewFlower } from "@/lib/actions/flower.actions";
import type { CreateFlowerType } from "@/lib/types";
import { FlowerSchema } from "@/lib/zod-schemas";
import { useGetShopsQuery } from "@/redux/services/allShopsService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateFlowerForm = () => {
  const { data } = useGetShopsQuery();
  const form = useForm<CreateFlowerType>({
    resolver: zodResolver(FlowerSchema),
    defaultValues: {
      title: "",
    },
  });
  const onSubmit = async (values: CreateFlowerType) => {
    const { title, shopId } = values;
    const res = await createNewFlower({ title, shopId });
    if (res.success) {
      toast.success(res.message);
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
              <FormLabel>Flower title</FormLabel>
              <FormControl>
                <Input placeholder="Flower..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shopId"
          render={() => (
            <FormItem>
              <FormLabel>Choose Shop</FormLabel>
              <Select
                onValueChange={(id) => form.setValue("shopId", Number(id))}
                value={form.watch("shopId")?.toString() ?? ""}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Shop" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data?.shops.map((shop) => (
                    <SelectItem key={shop.id} value={shop.id.toString()}>
                      {shop.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default CreateFlowerForm;
