"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { OrderModal } from "@/components/order-modal";

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

const flavors = [
  "Original",
  "Honey Mustard",
  "Honey Sriracha",
  "Hickory Barbecue",
  "Classic Buffalo",
  "Garlic Parmesan",
];

export default function Menu() {
  return (
    <div className="flex flex-col min-h-fit max-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <section className="flex flex-col items-center gap-10 lg:gap-16 mb-20">
          {/* Rice Meals Section */}
          <div className="w-full flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-orange-100">
            <div className="w-full lg:w-1/2 flex justify-center items-center p-8 bg-gradient-to-br from-orange-100 to-red-100">
              <MotionWrapper>
                <div className="relative group">
                  <Image
                    src="/rice-meals.png"
                    alt="Rice Meals"
                    width={600}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </MotionWrapper>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 text-center lg:text-left">
              <MotionWrapper delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Rice Meals
                </h1>
              </MotionWrapper>
              <MotionWrapper delay={0.2}>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg sm:text-xl leading-relaxed">
                    Hearty and satisfying rice meals served with your choice of
                    premium protein and our signature sauces.
                  </p>

                  <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                    <h3 className="font-semibold text-red-800 mb-2">
                      Available Flavors:
                    </h3>
                    <div className="text-red-700 grid grid-cols-2 lg:grid-cols-3">
                      {flavors.map((flavor) => (
                        <p key={flavor}>{flavor}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="text-sm font-medium opacity-90">
                        Solo Meal
                      </span>
                      <div className="text-2xl font-bold">₱109</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="text-sm font-medium opacity-90">
                        Jumbo Meal
                      </span>
                      <div className="text-2xl font-bold">₱189</div>
                    </div>
                  </div>

                  <OrderModal />
                </div>
              </MotionWrapper>
            </div>
          </div>

          {/* Group Packs Section */}
          <div className="w-full flex flex-col lg:flex-row-reverse bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-red-100">
            <div className="w-full lg:w-1/2 flex justify-center items-center p-8 bg-gradient-to-br from-red-100 to-orange-100">
              <MotionWrapper delay={0.3}>
                <div className="relative group">
                  <Image
                    src="/group-packs.png"
                    alt="Group Packs"
                    width={600}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </MotionWrapper>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 text-center lg:text-right">
              <MotionWrapper delay={0.4}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Group Packs
                </h1>
              </MotionWrapper>
              <MotionWrapper delay={0.5}>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg sm:text-xl leading-relaxed">
                    Perfect for sharing with family and friends! Our group packs
                    feature generous portions and flavorful explosions.
                  </p>

                  <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <h3 className="font-semibold text-red-800 mb-2">
                      Available Flavors:
                    </h3>
                    <div className="text-red-700 grid grid-cols-2 lg:grid-cols-3">
                      {flavors.map((flavor) => (
                        <p key={flavor}>{flavor}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-xl flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="text-sm font-medium opacity-90">
                        6 pieces
                      </span>
                      <div className="text-2xl font-bold">₱249</div>
                    </div>
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-xl flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="text-sm font-medium opacity-90">
                        12 pieces
                      </span>
                      <div className="text-2xl font-bold">₱489</div>
                    </div>
                  </div>

                  <OrderModal />
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
