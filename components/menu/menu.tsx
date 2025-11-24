"use client";

import MenuCard from "@/components/menu/menu-card";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const params = use(searchParams);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 10px
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 10);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeCategory = params.category;

  const currentCategoryName =
    activeCategory &&
    categories.find((category) => category.code === activeCategory)?.name;

  const productsToShow =
    (activeCategory &&
      categories.find((category) => category.code === activeCategory)
        ?.products) ||
    [];

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

            <div className="flex w-full md:hidden" ref={dropdownRef}>
              <div className="relative w-full">
                {/* Dropdown Trigger */}
                <Button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full rounded-full text-foreground border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#f2ac07] focus:ring-offset-2 transition-all duration-200"
                >
                  <span className="font-medium">{currentCategoryName}</span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 right-0 z-50 mt-2 w-full rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden"
                    >
                      {" "}
                      <motion.div className="py-2">
                        {categories.map((category, index) => (
                          <motion.div
                            key={category.code}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.05 + (index + 1) * 0.03 }}
                            className="px-2 my-1"
                          >
                            <Link
                              key={category.code}
                              href={`/menu?category=${category.code}`}
                              onClick={() => setIsDropdownOpen(false)}
                              className={`flex rounded-full items-center px-4 py-3 text-sm transition-all  hover:bg-[#f2ac07]/80 ${
                                activeCategory === category.code
                                  ? "bg-primary text-background font-semibold"
                                  : " hover:bg-[#f2ac07]/80"
                              }`}
                            >
                              {category.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
