"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  onValueChange: (value: number) => void;
  className?: string;
}

export function Rating({ value, onValueChange, className }: RatingProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onValueChange(star)}
            className="p-1 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
          >
            <Star
              className={cn(
                "h-6 w-6 transition-colors",
                star <= value
                  ? "fill-[#f2bb07] text-[#f2bb07]"
                  : "text-gray-300 hover:text-[#f2bb07]"
              )}
            />
          </button>
        ))}
      </div>
      {value > 0 && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => onValueChange(0)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Clear
        </Button>
      )}
    </div>
  );
}
