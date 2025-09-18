"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });

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
    <div className="flex flex-col min-h-fit max-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex-grow">
        <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20">
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              className="relative"
              style={{ perspective: 1000 }}
              animate={{
                rotateX: isHovered ? rotate.rotateX : 0,
                rotateY: isHovered ? rotate.rotateY : 0,
              }}
              transition={{ type: "spring", stiffness: 600, damping: 200 }}
              onMouseMove={handleMouseMove}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Image
                src="/logo.png"
                alt="Chicken Near Me Logo"
                width={600}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <MotionWrapper delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-primary">
                Our Story
              </h1>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <p className="flex flex-col gap-6 text-lg sm:text-xl mb-6">
                <span>
                  Chicken Near Me started very simple— with just one of us
                  craving chicken with our favorite sauces.
                </span>
                <span>
                  From there, we began trying out different flavors, never
                  really thinking it would turn into anything bigger. We shared
                  our chicken around, and to our surprise, people enjoyed it.
                </span>
                <span>
                  They encouraged us to continue and suggested to make it
                  bigger. That&apos;s when the name “Chicken Near Me” felt
                  right—because it reminds us of where we started: serving good
                  chicken close to home, for neighbors, friends, and anyone who
                  just wants something tasty nearby.
                </span>
                <span>
                  We wanted to keep it simple, keep it close, and keep it
                  flavorful.{" "}
                </span>
                <span className="font-semibold">
                  So, sit tight neighbor, Chicken Near Me is coming closer to
                  you soon! ❤️
                </span>
              </p>
            </MotionWrapper>
          </div>
        </section>

        {/* Story Section
        <section className="mb-20">
          <Card className="bg-black text-white rounded-3xl shadow-lg">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">

                Started with a love for great food and a dream to share it with
                the community, our boneless fried chicken business was built on
                quality, flavor, and passion. Every piece we serve reflects our
                dedication to craft and our commitment to making people smile.
                (Replace with your story.)
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Quality Ingredients", "Bold Flavors", "Customer Happiness"].map(
              (value, i) => (
                <Card className="shadow-md hover:shadow-lg transition" key={i}>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {value}
                    </h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent commodo.
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </section> */}
      </main>
    </div>
  );
}
