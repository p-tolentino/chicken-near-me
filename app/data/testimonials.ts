"use server";

import { createClient } from "@/utils/supabase/server";

export const getTestimonials = async () => {
  const supabase = await createClient();
  const { data: testimonials, error } = await supabase
    .from("testimonials")
    .select("*");

  if (error) throw new Error(error.message);

  return testimonials;
};
