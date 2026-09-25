import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export function TerminalWindow({
    title = "guest@santiago:~",
    children,
    className,
}: TerminalWindowProps) {
    return (
        <div
            className={cn(
                "overflow-hidden rounded-xl border border-emerald-500/20 bg-black/40 backdrop-blur-sm shadow-[0_0_40px_-12px_rgba(16,185,129,0.25)]",
                className
            )}
        >
            {/* Barra de titulo */}
            <div className="flex items-center gap-2 border-b border-emerald-500/10 bg-white/5 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
                    {title}
                </span>
            </div>

            {/* Contenido */}
            <div className="space-y-6 p-6">{children}</div>
        </div>
    );
}
