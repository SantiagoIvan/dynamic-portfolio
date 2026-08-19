"use client"

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function BackToTopButton() {
    const { t } = useLanguage();

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
                <ArrowUp className="h-5 w-5" />
                {t("backToTop")}
            </Button>
        </div>
    );
}
