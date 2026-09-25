"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingTextProps {
    text: string;
    speed?: number;
    startDelay?: number;
    className?: string;
    cursorClassName?: string;
}

export function TypingText({
    text,
    speed = 65,
    startDelay = 400,
    className,
    cursorClassName,
}: TypingTextProps) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            setDisplayed(text);
            return;
        }

        setDisplayed("");
        let i = 0;
        let interval: ReturnType<typeof setInterval> | undefined;

        const startTimeout = setTimeout(() => {
            interval = setInterval(() => {
                i += 1;
                setDisplayed(text.slice(0, i));
                if (i >= text.length && interval) {
                    clearInterval(interval);
                }
            }, speed);
        }, startDelay);

        return () => {
            clearTimeout(startTimeout);
            if (interval) clearInterval(interval);
        };
    }, [text, speed, startDelay]);

    return (
        <span className={cn("font-mono", className)} aria-label={text}>
            <span aria-hidden="true">{displayed}</span>
            <span
                aria-hidden="true"
                className={cn(
                    "ml-0.5 inline-block h-[1em] w-[0.5em] align-baseline bg-emerald-400 animate-caret-blink",
                    cursorClassName
                )}
            />
        </span>
    );
}
