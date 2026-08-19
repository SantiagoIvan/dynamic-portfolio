"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
    const { locale, setLocale } = useLanguage();

    return (
        <div className="flex items-center rounded-md border text-xs overflow-hidden">
            <button
                type="button"
                onClick={() => setLocale("es")}
                className={cn(
                    "px-2 py-1 transition-colors",
                    locale === "es"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                )}
                aria-pressed={locale === "es"}
            >
                ES
            </button>
            <button
                type="button"
                onClick={() => setLocale("en")}
                className={cn(
                    "px-2 py-1 transition-colors",
                    locale === "en"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                )}
                aria-pressed={locale === "en"}
            >
                EN
            </button>
        </div>
    );
}
