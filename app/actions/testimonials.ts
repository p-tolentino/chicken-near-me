"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { FeedbackFormSchema } from "../../components/feedback-modal";

export const createCustomerFeedback = async ({
  anonymous,
  comment,
  rating,
  name,
}: z.infer<typeof FeedbackFormSchema>) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("testimonials")
    .insert({
      anonymous,
      comment,
      rating,
      name: anonymous ? "" : name,
    })
    .select();

  if (error) {
    throw new Error(`Error creating feedback: ${error.message}`);
  }

  return data;
};
