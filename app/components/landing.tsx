"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLocationDot as LocationPin,
} from "react-icons/fa6";
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

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
}

const MotionWrapper = ({ children, delay = 0 }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

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

// const testimonials = [
//   {
//     name: "Juan Dela Cruz",
//     comment: "Ang sarap ng chicken, parang nanalo ako sa lotto!",
//     avatar: "/placeholder.svg?height=48&width=48",
//     rating: 5,
//     anonymous: false,
//   },
//   {
//     name: "Maria Santos",
//     comment: "Mas malaki pa sa sweldo ko ang chicken nila!",
//     avatar: "/placeholder.svg?height=48&width=48",
//     rating: 2.5,
//     anonymous: false,
//   },
//   {
//     name: "Pedro Penduko",
//     comment: "Pwedeng pang-away sa kalye, pero mas masarap kainin!",
//     avatar: "/placeholder.svg?height=48&width=48",
//     rating: 4,
//     anonymous: false,
//   },
//   {
//     name: "Nena Babushka",
//     comment: "Parang magic, nawala ang pagod ko sa trabaho!",
//     avatar: "/placeholder.svg?height=48&width=48",
//     rating: 4.5,
//     anonymous: false,
//   },
//   {
//     name: "",
//     comment: "Anonymous comment!",
//     avatar: "/placeholder.svg?height=48&width=48",
//     rating: 4.5,
//     anonymous: true,
//   },
// ];

export default function Landing({
  testimonials,
}: {
  testimonials: Tables<"testimonials">[];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });
  const router = useRouter();
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    setRotate({ rotateX, rotateY });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center ">
          <Image
            src="/cover.png"
            alt="Chicken Near Me Logo"
            height={48}
            width={160}
            className="h-10 w-auto object-contain"
            priority
          />
        </h1>
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="mb-24">
          <div className="flex flex-col justify-between md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <MotionWrapper>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  No bones. All flavor.
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.2}>
                <p className="text-xl  mb-6">
                  Savor every bite with endless boneless goodness
                </p>
              </MotionWrapper>
              <MotionWrapper delay={0.4}>
                <Button
                  size="lg"
                  className="bg-primary hover:cursor-pointer "
                  onClick={() =>
                    router.push(
                      `https://food.grab.com/ph/en/restaurant/chicken-near-me-alabang-delivery/2-C7AYAEAALYTZJ6?`
                    )
                  }
                >
                  Order Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </MotionWrapper>
            </div>

            <div className="w-1/3">
              <motion.div
                className="relative"
                style={{ perspective: 1000 }}
                animate={{
                  rotateX: isHovered ? rotate.rotateX : 0,
                  rotateY: isHovered ? rotate.rotateY : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onMouseMove={handleMouseMove}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Image
                  width={1331}
                  height={888}
                  src="/logo.png"
                  alt="Chicken Near Me Logo"
                  className="rounded-3xl object-covermx-auto "
                />
                <Badge className="absolute top-16 -right-14 text-md shadow-lg ring-2 bg-gradient-to-r from-green-500 to-pink-500">
                  Also on GrabFood & FoodPanda!
                </Badge>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center">
            What Makes Our Chicken Clucking Amazing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <Card className="w-full h-full shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <feature.icon className="h-12 w-12  mb-4" />
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="mb-24">
            <Card className="bg-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">
                  What Our Customers Say
                </h3>

                <div className="p-10">
                  <Carousel
                    className="w-full mx-auto"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    plugins={[autoplay.current]}
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {testimonials.map((testimonial, index) => (
                        <CarouselItem
                          key={index}
                          className={`w-full ${
                            testimonials.length > 1 && `lg:basis-1/2`
                          } pl-2 md:pl-4`}
                        >
                          <MotionWrapper key={index} delay={index * 0.1}>
                            <Card>
                              <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                  <UserCircle className="w-12 h-12 mr-4 object-cover text-neutral-500" />
                                  <div>
                                    <h4
                                      className={
                                        testimonial.anonymous
                                          ? `italic text-neutral-500`
                                          : `font-semibold`
                                      }
                                    >
                                      {testimonial.name || `Anonymous User`}
                                    </h4>
                                    <div className="flex text-[#f2ac07] items-center gap-2">
                                      <span className="flex">
                                        {[...Array(5)].map((_, i) => {
                                          const starValue = i + 1; // star position (1 to 5)

                                          if (testimonial.rating >= starValue) {
                                            // full star
                                            return (
                                              <StarFill
                                                key={i}
                                                className="h-4 w-4"
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
                                                className="h-4 w-4"
                                              />
                                            );
                                          } else {
                                            // empty star
                                            return (
                                              <Star
                                                key={i}
                                                className="h-4 w-4"
                                              />
                                            );
                                          }
                                        })}
                                      </span>

                                      <span className="italic text-neutral-400 text-sm">
                                        {`${testimonial.rating} star${
                                          testimonial.rating !== 1 && `s`
                                        }`}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <p className="italic">{testimonial.comment}</p>
                              </CardContent>
                            </Card>
                          </MotionWrapper>{" "}
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      variant={"ghost"}
                      className="hover:cursor-pointer"
                    />
                    <CarouselNext
                      variant={"ghost"}
                      className="hover:cursor-pointer"
                    />
                  </Carousel>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Enjoyed your meal? We&apos;d love your feedback!
          </h3>
          <p className="flex items-center text-center gap-2 text-xl mb-8 justify-center">
            <span>Your thoughts help us make every meal even better</span>
            <Smile />
          </p>
          <FeedbackModal />
        </section>
      </main>

      <footer className="bg-primary text-white">
        <div className="flex h-16 items-center justify-around w-full ">
          <div>
            <Link
              href={`https://www.facebook.com/chickennearme`}
              target="_blank"
              className="flex bg-white-500 container mx-auto px-4 text-center items-center"
            >
              <Facebook className="w-8 h-8 " />
              <p className="ml-3">Chicken Near Me</p>
            </Link>
          </div>
          <div>
            <Link
              href={`https://www.instagram.com/chickennearmeph`}
              target="_blank"
              className="flex bg-white-500 container mx-auto px-4 text-center items-center"
            >
              <Instagram className="w-8 h-8 " />
              <p className="ml-3">@chickennearmeph</p>
            </Link>
          </div>
          <div>
            <Link
              href={`https://maps.app.goo.gl/KTHzbW9gNNg2xzNF8`}
              target="_blank"
              className="flex bg-white-500 container mx-auto px-4 text-center items-center"
            >
              <LocationPin className="w-8 h-8 " />
              <p className="ml-3">Chicken Near Me, Alabang</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
