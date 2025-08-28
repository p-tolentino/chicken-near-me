"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import { Separator } from "@/components/ui/separator";
import { Rating } from "@/components/ui/rating";
import { createCustomerFeedback } from "../app/actions/testimonials";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const FeedbackFormSchema = z.object({
  name: z.string().optional(),
  comment: z.string(),
  rating: z.number().min(0).max(5),
  anonymous: z.boolean(),
});

export function FeedbackModal() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FeedbackFormSchema>>({
    resolver: zodResolver(FeedbackFormSchema),
    defaultValues: {
      name: "",
      comment: "",
      rating: 0,
      anonymous: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof FeedbackFormSchema>) => {
    try {
      await createCustomerFeedback(values).then((data) => {
        if (!data) {
          toast.error(`Oops, something went wrong!`);
        }

        toast.success(
          `Thank you for your feedback${isAnonymous ? "" : `, ${values.name}`}!`
        );

        closeButtonRef.current?.click();

        router.refresh();

        form.reset();
      });
    } catch (error) {
      toast.error(`Oops, something went wrong!`);
      console.error(error);
    }
  };

  const isAnonymous = form.watch("anonymous");
  const rating = form.watch("rating");

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-[#f2ac07] hover:bg-[#dd9e0a] hover:cursor-pointer sm:text-base px-6 sm:px-8 py-3 sm:py-4"
        >
          Give Feedback <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Customer Feedback Form</DialogTitle>
              <DialogDescription>
                Share your experience with our products. Your feedback helps us
                improve!
              </DialogDescription>
              <Separator className="my-4" />
            </DialogHeader>
            <div className="grid gap-4 space-y-2">
              <FormField
                control={form.control}
                name="anonymous"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Submit anonymously
                      </FormLabel>
                      <FormDescription className="text-sm italic">
                        Toggle this if you prefer to remain anonymous
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {!isAnonymous && (
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Juan Dela Cruz"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between mb-2">
                      <FormLabel>Rating</FormLabel>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {rating === 0
                          ? "No rating"
                          : `${rating} ${rating === 1 ? "star" : "stars"}`}
                      </span>
                    </div>

                    <FormControl>
                      <Rating
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Share your experience</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[100px]"
                        placeholder="It tastes amazing! Chicken was so big and juicy, and don't get me started on the sauce!"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose ref={closeButtonRef} asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
