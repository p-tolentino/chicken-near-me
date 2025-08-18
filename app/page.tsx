import { getTestimonials } from "./data/testimonials";
import Landing from "./components/landing";

export default async function Home() {
  const testimonials = await getTestimonials();

  return <Landing testimonials={testimonials} />;
}
