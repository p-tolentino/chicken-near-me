"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  FaCircleInfo,
  FaCircleQuestion,
  FaGlobe,
  FaHandshakeSimple,
  FaHouse,
  FaLocationDot,
  FaUtensils,
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as LinkedIn,
} from "react-icons/fa6";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const routes = [
  {
    name: "Home",
    href: "/",
    icon: FaHouse,
    disabled: false,
  },
  {
    name: "About Us",
    href: "/about",
    icon: FaCircleInfo,
    disabled: false,
  },
  {
    name: "Menu",
    href: "/menu",
    icon: FaUtensils,
    disabled: false,
  },
  {
    name: "Locations",
    href: "/locations",
    icon: FaLocationDot,
    disabled: true,
  },
  {
    name: "Franchising",
    href: "/franchising",
    icon: FaHandshakeSimple,
    disabled: true,
  },
  {
    name: "Connect",
    href: "/connect",
    icon: FaGlobe,
    disabled: false,
    subroutes: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/chickennearme",
        icon: Facebook,
        disabled: false,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/chickennearmeph",
        icon: Instagram,
        disabled: false,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/chicken-near-me",
        icon: LinkedIn,
        disabled: false,
      },
    ],
  },
  // {
  //   name: "FAQs",
  //   href: "/faqs",
  //   icon: FaCircleQuestion,
  //   disabled: false,
  // },
];

export default function NavbarCustomTest() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleNavigation = () => {
    setIsOpen(false);
  };

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

  return (
    <header
      className={`w-full mt-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between lg:justify-start duration-300 ease-in-out ${
        isScrolled
          ? "bg-gradient-to-b from-white/100 via-white/70 to-transparent backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="pl-2 sm:pl-6 lg:pl-10 flex">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center mr-10">
          <Link href={"/"}>
            <Image
              src="/cover.png"
              alt="Chicken Near Me Logo"
              height={48}
              width={160}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="hidden lg:flex items-center gap-4">
              {routes.map((route) => {
                const isActive = pathname === route.href;
                const linkStyle = "hover:text-primary hover:cursor-pointer";
                const activeLinkStyle = "text-[#f2ac07] hover:text-foreground";

                return (
                  <div key={route.href} className="relative">
                    {route.subroutes ? (
                      <NavigationMenuItem key={route.href}>
                        <NavigationMenuTrigger
                          disabled={route.disabled}
                          className={`flex items-center gap-2 bg-transparent hover:bg-transparent`}
                        >
                          <route.icon size={18} /> {route.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul
                            className={`grid min-w-[200px] gap-4`}
                            key={route.href}
                          >
                            <li key={route.href}>
                              {route.subroutes.map((subroute) => {
                                return (
                                  <div
                                    className="flex justify-between"
                                    key={subroute.href}
                                  >
                                    {subroute.disabled ? (
                                      <NavigationMenuLink
                                        className={`flex flex-row w-full items-center gap-2 text-gray-600 opacity-50 cursor-not-allowed pointer-events-none`}
                                      >
                                        <subroute.icon size={18} />
                                        {subroute.name}
                                      </NavigationMenuLink>
                                    ) : (
                                      <NavigationMenuLink
                                        asChild
                                        key={subroute.href}
                                        className="flex w-full"
                                      >
                                        <Link
                                          href={subroute.href}
                                          className="flex flex-row items-center gap-2"
                                        >
                                          <subroute.icon
                                            size={18}
                                            className="text-current"
                                          />
                                          {subroute.name}
                                        </Link>
                                      </NavigationMenuLink>
                                    )}
                                    {subroute.disabled && (
                                      <div className="ml-5">
                                        <div className="relative text-xs shadow-lg px-3 py-2 rounded-full text-white font-medium bg-white">
                                          <div className="absolute inset-[1px] bg-primary rounded-full"></div>
                                          <span className="relative z-10 whitespace-nowrap">
                                            Coming Soon!
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : route.disabled ? (
                      <span
                        className={`${navigationMenuTriggerStyle()} text-gray-600 opacity-50 cursor-not-allowed pointer-events-none`}
                      >
                        <route.icon size={18} />
                        {route.name}
                      </span>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className={`${navigationMenuTriggerStyle()} ${
                          !isActive && linkStyle
                        } ${isActive && activeLinkStyle}`}
                      >
                        <Link href={route.href}>
                          <route.icon size={18} className="text-current" />
                          {route.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                    {route.disabled && (
                      <div className="absolute -top-4 -right-4 z-20">
                        <div className="relative text-xs shadow-lg px-3 py-2 rounded-full text-white font-medium bg-white">
                          <div className="absolute inset-[1px] bg-primary rounded-full"></div>
                          <span className="relative z-10 whitespace-nowrap">
                            Coming soon!
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>

      {/* Mobile Burger Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="relative">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-left">
              <Image
                src="/cover.png"
                alt="Chicken Near Me Logo"
                height={48}
                width={160}
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col">
            {routes.map((route) => {
              const isActive = pathname === route.href;

              return (
                <div className="relative px-2 py-1" key={route.href}>
                  {route.subroutes ? (
                    <Accordion type="single" collapsible className="px-4">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="flex flex-row justify-between">
                          <span className="flex flex-row items-center gap-3">
                            <span>
                              <route.icon size={20} className="w-4 h-4 " />
                            </span>

                            {route.name}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          {route.subroutes.map((subroute) => (
                            <Button
                              key={subroute.href}
                              variant="ghost"
                              className={`w-full justify-start text-left h-12 px-4 ${
                                !isActive &&
                                !route.disabled &&
                                "hover:text-primary hover:bg-primary/10"
                              } ${
                                isActive &&
                                !route.disabled &&
                                "text-[#f2ac07] bg-[#f2ac07]/10"
                              }`}
                              disabled={subroute.disabled}
                              onClick={handleNavigation}
                              asChild={!subroute.disabled}
                            >
                              {subroute.disabled ? (
                                <div className="flex w-full justify-between">
                                  <span className="flex items-center gap-3 text-gray-400">
                                    <span className="w-4 h-4 flex items-center justify-center">
                                      <subroute.icon size={20} />
                                    </span>
                                    {subroute.name}
                                  </span>
                                  <div className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                                    Soon!
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={subroute.href}
                                  className="flex items-center gap-3"
                                >
                                  <span className="w-4 h-4 flex items-center justify-center">
                                    <subroute.icon size={20} />
                                  </span>
                                  {subroute.name}
                                </Link>
                              )}
                            </Button>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-left h-12 px-4 ${
                        !isActive &&
                        !route.disabled &&
                        "hover:text-primary hover:bg-primary/10"
                      } ${
                        isActive &&
                        !route.disabled &&
                        "text-[#f2ac07] bg-[#f2ac07]/10"
                      }`}
                      disabled={route.disabled}
                      onClick={handleNavigation}
                      asChild={!route.disabled}
                    >
                      {route.disabled ? (
                        <span className="flex items-center gap-3 text-gray-400">
                          <span className="w-4 h-4 flex items-center justify-center">
                            <route.icon size={20} />
                          </span>
                          {route.name}
                        </span>
                      ) : (
                        <Link
                          href={route.href}
                          className="flex items-center gap-3"
                        >
                          <span className="w-4 h-4 flex items-center justify-center">
                            <route.icon size={20} />
                          </span>
                          {route.name}
                        </Link>
                      )}
                    </Button>
                  )}

                  {route.disabled && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                        Soon!
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

// {
//   routes.map((route) => {
//     const isActive = pathname === route.href;

//     return (
//       <div className="relative" key={route.href}>
//         <Button
//           variant="link"
//           className={`text-foreground px-4 text-base ${
//             !isActive && !route.disabled && "hover:text-primary"
//           } hover:cursor-pointer ${
//             isActive && !route.disabled && "text-[#f2ac07]"
//           }`}
//           disabled={route.disabled}
//           asChild={!route.disabled}
//         >
//           {route.disabled ? (
//             <span className="flex items-center gap-2 text-gray-600">
//               <route.icon size={18} />
//               {route.name}
//             </span>
//           ) : (
//             <Link href={route.href} className="flex items-center gap-2">
//               <route.icon size={18} />
//               {route.name}
//             </Link>
//           )}
//         </Button>
//         {route.disabled && (
//           <div className="absolute -top-4 -right-4 z-20">
//             <div className="relative text-xs shadow-lg px-3 py-2 rounded-full text-white font-medium bg-white">
//               <div className="absolute inset-[1px] bg-primary rounded-full"></div>
//               <span className="relative z-10 whitespace-nowrap">
//                 Coming soon!
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   });
// }
