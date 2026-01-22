"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
}


export function AnimatedCard({
                                          children,
                                          className,
                                      }: AnimatedCardProps) {
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
            }}
            transition={{
                type: "spring",
                stiffness: 450,
                damping: 32,
                mass: 0.55,
            }}
            className={cn(
                `
                relative
                rounded-xl
                transition-all
            `,
                className
            )}
        >
            {/* Glow / Border highlight */}
            <motion.div
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
                transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 32,
                    mass: 0.55,
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-xl
                  shadow-[0_0_0_1px_rgba(34,197,94,0.25),0_0_24px_rgba(34,197,94,0.25)]
                "
            />

            {children}
        </motion.div>
    );
}
