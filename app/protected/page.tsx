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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from "js-cookie";
import { toast } from "sonner";

const accessKeySchema = z.object({
  accessKey: z.string().min(1, { message: "Enter a key" }),
});

const ProtectedPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof accessKeySchema>>({
    resolver: zodResolver(accessKeySchema),
    defaultValues: {
      accessKey: "",
    },
  });
  const onSubmit = (values: z.infer<typeof accessKeySchema>) => {
    form.clearErrors('root')
    const { accessKey } = values;
    if (accessKey === process.env.NEXT_PUBLIC_ACCESS_KEY) {
      Cookies.set("accessKey", accessKey);
      toast.success('Access granted')
      router.push("/createshop");
    } else {
      form.resetField("accessKey");
      form.setError("root", { message: "Invalid key" });
    }
  };
  return (
    <main>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="accessKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Enter access key in order to get permission to add new shops
                  and flowers
                </FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                {form.formState.errors.root?.message && (
                  <span className="text-destructive">
                    {form.formState.errors.root.message}
                  </span>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
};
export default ProtectedPage;
