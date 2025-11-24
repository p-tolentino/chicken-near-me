"use client";

import MenuCard from "@/components/menu/menu-card";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  {
    code: "rice",
    name: "Rice Meals",
    products: [
      {
        type: "chicken",
        name: "Solo Meal",
        price: 119,
        src: "/chicken/solo.png",
      },
      {
        type: "chicken",
        name: "Solo Combo Meal",
        price: 199,
        src: "/chicken/solo-combo.png",
      },
      {
        type: "chicken",
        name: "Jumbo Meal",
        price: 209,
        src: "/chicken/jumbo.png",
      },

      {
        type: "chicken",
        name: "Jumbo Combo Meal",
        price: 289,
        src: "/chicken/jumbo-combo.png",
      },
    ],
  },
  {
    code: "group",
    name: "Group Meals",
    products: [
      {
        type: "chicken",
        name: "6pcs. (1 Flavor)",
        price: 279,
        src: "/chicken/6.png",
      },
      {
        type: "chicken",
        name: "12pcs. (2 Flavors)",
        price: 549,
        src: "/chicken/12.jpg",
      },
    ],
  },
  {
    code: "addons",
    name: "Add-ons",
    products: [
      { type: "sides", name: "Fries", price: 40, src: "/addons/fries.png" },
      {
        type: "sauce",
        name: "Extra Sauce",
        price: 25,
        src: "/addons/sauce.jpg",
      },
      { type: "sides", name: "Extra Rice", price: 25, src: "/addons/rice.jpg" },
    ],
  },
  {
    code: "drinks",
    name: "Drinks",
    products: [
      {
        type: "sodaCan",
        name: "Soda in Can",
        price: 50,
        src: "/drinks/soda.jpg",
      },
      {
        type: "flavored",
        name: "Flavored Soda (16 oz.)",
        price: 60,
        src: "/drinks/flavored.png",
      },
      {
        type: "flavored",
        name: "Flavored Soda (22 oz.)",
        price: 80,
        src: "/drinks/flavored.png",
      },
      {
        type: "coffee",
        name: "Iced Coffee",
        price: "-",
        comingSoon: true,
        src: "/drinks/coffee.png",
      },
    ],
  },
];

export default function Menu({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const params = use(searchParams);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 10px
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeCategory = params.category;

  return (
    <div className="flex flex-col min-h-fit max-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex-grow">
        <section className="flex flex-col items-center gap-10 lg:gap-16 mb-20">
          <div
            className={`min-w-screen px-4 sm:px-20 md:px-28 lg:px-36 xl:px-48 sticky w-full top-16 sm:top-22 z-10 ${
              isScrolled
                ? "bg-gradient-to-b from-transparent/100 via-white/70 to-white/100 backdrop-blur-md shadow-lg"
                : "bg-transparent"
            } pb-3 pt-3 flex justify-center`}
          >
            <div className="hidden md:flex gap-2 lg:px-4 xl:-mx-4 sm:px-0 sm:mx-0 sm:flex-wrap">
              {categories.map((category) => (
                <Link
                  key={category.code}
                  href={`/menu?category=${category.code}`}
                  className={`rounded-full px-4 py-2 border whitespace-nowrap hover:bg-[#f2ac07]/80 ${
                    activeCategory === category.code &&
                    `bg-primary text-background font-semibold`
                  } transition-all flex-shrink-0 sm:flex-shrink`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="flex w-full md:hidden">
              <Select
                onValueChange={(value) => {
                  window.location.href = `/menu?category=${value}`;
                }}
                value={activeCategory}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category">
                    {activeCategory
                      ? categories.find(
                          (category) => category.code === activeCategory
                        )?.name
                      : "Select Category"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem value={category.code} key={category.code}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {categories.map(
              (category) =>
                category.code === activeCategory &&
                category.products.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
