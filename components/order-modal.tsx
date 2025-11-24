"use client";

import { Button } from "@/components/ui/button";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FaChevronRight as ChevronRight } from "react-icons/fa6";

import { useRouter } from "next/navigation";
import Image from "next/image";

export function OrderModal({
  size = "lg",
}: {
  size?: "lg" | "default" | "sm" | "icon" | null;
}) {
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={size}
          className="bg-[#f2ac07] hover:bg-[#dd9e0a] hover:cursor-pointer text-base"
        >
          Order Now
          <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Where do you want to order from?</DialogTitle>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="h-full group">
              <Card
                className="group-hover:bg-green-200 group-hover:scale-105 group-hover:cursor-pointer transition-all"
                onClick={() =>
                  router.push(
                    `https://food.grab.com/ph/en/restaurant/chicken-near-me-alabang-delivery/2-C7AYAEAALYTZJ6?`
                  )
                }
              >
                <CardHeader>
                  <CardTitle>
                    <Image
                      width={1331}
                      height={888}
                      src="/grabfood.svg"
                      alt="GrabFood"
                      className="rounded-3xl object-cover mx-auto w-full"
                    />
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>

            <div className="h-full group">
              <Card
                className="group-hover:bg-pink-200 group-hover:scale-105 group-hover:cursor-pointer transition-all"
                onClick={() =>
                  router.push(
                    `https://www.foodpanda.ph/restaurant/gjq9/chicken-near-me-alabang`
                  )
                }
              >
                <CardHeader>
                  <CardTitle>
                    <Image
                      width={1331}
                      height={888}
                      src="/foodpanda.svg"
                      alt="FoodPanda"
                      className="rounded-3xl object-cover mx-auto w-full"
                    />
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
