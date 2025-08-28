"use client";

import { useRef } from "react";
import Image from "next/image";
import { GiChickenLeg, GiChefToque, GiHotSpices } from "react-icons/gi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";

import { FaRecycle, FaChevronRight as ChevronRight } from "react-icons/fa6";
import {
  FaRegStar as Star,
  FaStar as StarFill,
  FaStarHalfStroke as HalfStar,
  FaRegFaceSmileBeam as Smile,
  FaCircleUser as UserCircle,
} from "react-icons/fa6";

import { useRouter } from "next/navigation";
import { Tables } from "@/database.types";
import { FeedbackModal } from "./feedback-modal";
import { OrderModal } from "./order-modal";
import { MotionWrapper } from "./motion-wrapper";

const features = [
  {
    icon: GiChickenLeg,
    title: "Juicy Jumbo Pieces",
    description: "Size matters, especially when it comes to chicken!",
  },
  {
    icon: GiHotSpices,
    title: "Flavor Explosion",
    description: "Our secret spice blend will make your taste buds dance!",
  },
  {
    icon: GiChefToque,
    title: "Culinary Craftsmanship",
    description: "Each piece is a masterpiece, crafted with expertise.",
  },
  {
    icon: FaRecycle,
    title: "Eco-Friendly Packaging",
    description: "Saving the planet, one chicken bucket at a time!",
  },
];

export default function Landing({
  testimonials,
}: {
  testimonials: Tables<"testimonials">[];
}) {
  const router = useRouter();

  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <div className="flex flex-col min-h-fit max-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-grow">
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <MotionWrapper>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  No bones. All flavor.
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.2}>
                <p className="text-lg sm:text-xl mb-6 text-muted-foreground">
                  Savor every bite with endless boneless goodness
                </p>
              </MotionWrapper>
              <MotionWrapper delay={0.4}>
                <OrderModal />
              </MotionWrapper>
            </div>

            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md lg:max-w-none">
              <div className="relative">
                <MotionWrapper>
                  <Image
                    width={1331}
                    height={888}
                    src="/hero.png"
                    alt="6-piece Original"
                    className="rounded-3xl object-cover mx-auto w-full"
                  />
                  <div className="absolute top-4 -right-4 sm:top-4 sm:-right-8 lg:top-6 lg:-right-12">
                    <div className="group relative text-xs sm:text-sm lg:text-base shadow-lg px-2 sm:px-3 py-1 sm:py-2 rounded-full text-white font-medium bg-white">
                      <div className="absolute inset-[1px] bg-primary rounded-full group-hover:bg-red-200 transition-all"></div>
                      <span className="relative z-10">
                        Also on{" "}
                        <span
                          className="group-hover:text-green-600/90 group-hover:text-shadow-lg group-hover:text-shadow-green-300 group-hover:underline hover:cursor-pointer transition-all"
                          onClick={() =>
                            router.push(
                              `https://food.grab.com/ph/en/restaurant/chicken-near-me-alabang-delivery/2-C7AYAEAALYTZJ6?`
                            )
                          }
                        >
                          GrabFood
                        </span>{" "}
                        &{" "}
                        <span
                          className="group-hover:text-pink-500 group-hover:text-shadow-lg group-hover:text-shadow-pink-300 group-hover:underline hover:cursor-pointer transition-all"
                          onClick={() =>
                            router.push(
                              `https://www.foodpanda.ph/restaurant/gjq9/chicken-near-me-alabang`
                            )
                          }
                        >
                          FoodPanda
                        </span>
                        !
                      </span>
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            What Makes Our Chicken Clucking Amazing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <Card className="w-full h-full shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                    <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-primary" />
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <Card className="bg-primary text-white">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
                  What Our Customers Say
                </h3>

                <div className="p-4 sm:p-6 lg:p-10">
                  <Carousel
                    className="w-full mx-auto"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    plugins={[autoplay.current]}
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {testimonials.map(
                        (testimonial, index) =>
                          !testimonial.is_archived && (
                            <CarouselItem
                              key={index}
                              className={`w-full min-h-full ${
                                testimonials.length > 1 && `lg:basis-1/2`
                              } pl-2 md:pl-4`}
                            >
                              <MotionWrapper key={index} delay={index * 0.1}>
                                <Card>
                                  <CardContent className="p-4 sm:p-6">
                                    <div className="flex items-center mb-4">
                                      <UserCircle className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 object-cover text-neutral-500 flex-shrink-0" />
                                      <div className="min-w-0 flex-1">
                                        <h4
                                          className={`text-sm sm:text-base truncate ${
                                            testimonial.anonymous
                                              ? `italic text-neutral-500`
                                              : `font-semibold`
                                          }`}
                                        >
                                          {testimonial.name || `Anonymous User`}
                                        </h4>
                                        <div className="flex text-[#f2ac07] items-center gap-1 sm:gap-2">
                                          <span className="flex">
                                            {[...Array(5)].map((_, i) => {
                                              const starValue = i + 1; // star position (1 to 5)

                                              if (
                                                testimonial.rating >= starValue
                                              ) {
                                                // full star
                                                return (
                                                  <StarFill
                                                    key={i}
                                                    className="h-3 w-3 sm:h-4 sm:w-4"
                                                  />
                                                );
                                              } else if (
                                                testimonial.rating >=
                                                starValue - 0.5
                                              ) {
                                                // half star
                                                return (
                                                  <HalfStar
                                                    key={i}
                                                    className="h-3 w-3 sm:h-4 sm:w-4"
                                                  />
                                                );
                                              } else {
                                                // empty star
                                                return (
                                                  <Star
                                                    key={i}
                                                    className="h-3 w-3 sm:h-4 sm:w-4"
                                                  />
                                                );
                                              }
                                            })}
                                          </span>

                                          <span className="italic text-neutral-400 text-xs sm:text-sm">
                                            {`${testimonial.rating} star${
                                              testimonial.rating !== 1 && `s`
                                            }`}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Adjust for Long Reviews */}
                                    {/* {// TODO: SCROLL AREA FOR LONG REVIEWS} */}
                                    <ScrollArea className="italic text-sm sm:text-base min-h-52 sm:min-h-48 md:min-h-32 xl:min-h-24 p-1 max-h-24 overflow-auto">
                                      <p>{testimonial.comment}</p>
                                    </ScrollArea>
                                  </CardContent>
                                </Card>
                              </MotionWrapper>{" "}
                            </CarouselItem>
                          )
                      )}
                    </CarouselContent>
                    <CarouselPrevious
                      variant={"ghost"}
                      className="hover:cursor-pointer hidden sm:flex"
                    />
                    <CarouselNext
                      variant={"ghost"}
                      className="hover:cursor-pointer hidden sm:flex"
                    />
                  </Carousel>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        <section className="text-center px-4">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Enjoyed your meal? We&apos;d love your feedback!
          </h3>
          <p className="flex items-center text-center gap-2 text-xl mb-8 justify-center flex-wrap">
            <span>Your thoughts help us make every meal even better</span>
            <Smile />
          </p>
          <FeedbackModal />
        </section>
      </main>
    </div>
  );
}
