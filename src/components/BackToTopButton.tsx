"use client"

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex justify-center mt-8">
            <Button
                variant="outline"
                size="lg"
                onClick={handleClick}
                className="gap-2 text-lg"
            >
                <ArrowUp className="h-15 w-15" />
                Ir al cielo
            </Button>
        </div>
    );
}
