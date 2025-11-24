"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { OrderModal } from "../order-modal";
import Image from "next/image";

export interface MenuItem {
  type: string;
  name: string;
  src: string;
  price: number | string;
  comingSoon?: boolean;
}

export interface MenuCardProps {
  item: MenuItem;
}

const flavors = {
  chicken: [
    "Original",
    "Honey Mustard",
    "Honey Sriracha",
    "Hickory Barbecue",
    "Classic Buffalo",
    "Garlic Parmesan",
    "Salted Egg",
    "Soy Garlic",
  ],
  sodaCan: ["Coke", "Coke Zero", "Sprite", "Royal"],
  flavored: ["Lychee", "Four Seasons", "Strawberry", "Blue Lemonade"],
};

const flavoredTypes = ["chicken", "sodaCan", "flavored"];

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

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const placeholderLink = "/chicken-bg.png";

  const getFlavorText = () => {
    if (!flavoredTypes.includes(item.type)) return null;

    const flavorList =
      item.type === "chicken"
        ? flavors.chicken
        : item.type === "sodaCan"
        ? flavors.sodaCan
        : item.type === "flavored"
        ? flavors.flavored
        : [];

    return `Available Flavors: ${flavorList.join(", ")}`;
  };

  return (
    <MotionWrapper>
      <Card className="relative">
        {item.comingSoon && (
          <div className="absolute size-36 -top-2 -right-2 rounded-sm overflow-hidden">
            <div className="absolute size-2 top-0 left-0 bg-red-900"></div>
            <div className="absolute size-2 bottom-0 right-0 bg-red-900"></div>
            <span className="bg-primary py-1.5 shadow-sm block absolute font-mapleb w-[145%] text-center text-white bottom-0 right-0 rotate-45 origin-bottom-right">
              Coming Soon!
            </span>
          </div>
        )}

        <MotionWrapper delay={0.1}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg ">{item.name}</CardTitle>
            <CardDescription className="min-h-[3rem] sm:min-h-[3.5rem] text-xs sm:text-sm">
              {getFlavorText()}
            </CardDescription>
          </CardHeader>
        </MotionWrapper>

        <CardContent className="flex-grow flex items-center justify-center pb-3">
          <MotionWrapper delay={0.2}>
            <div className="relative w-[300px] h-[300px]">
              {imageLoading && (
                <Skeleton className="w-[300px] h-[300px] rounded-md" />
              )}
              <Image
                src={item.src || placeholderLink}
                priority
                width={300}
                height={300}
                alt={item.name}
                onLoad={() => setImageLoading(false)}
                className={`object-cover rounded-md hover:scale-105 transition-transform duration-500 ${
                  item.comingSoon && "opacity-20"
                }`}
              />
            </div>
          </MotionWrapper>
        </CardContent>

        <CardFooter className="flex justify-between items-center pt-3 min-h-[3rem] sm:min-h-[3.5rem]">
          <p className="text-base sm:text-lg font-semibold">
            {item.price !== "-" ? `₱${item.price}.00` : ""}
          </p>
          {!item.comingSoon && <OrderModal />}
        </CardFooter>
      </Card>
    </MotionWrapper>
  );
};

export default MenuCard;
