// components/layout/header.tsx
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent, SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, FolderGit2, Briefcase, Mail } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { T } from "@/lib/i18n/LanguageProvider";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

const navItems = [
    { href: "#projects", key: "nav.projects", icon: FolderGit2 },
    { href: "#experience", key: "nav.experience", icon: Briefcase },
    { href: "#contact", key: "nav.contact", icon: Mail },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center" aria-label="Santiago Feijoo">
                    <span
                        className="
                            flex h-9 w-9 items-center justify-center rounded-full
                            bg-linear-to-br from-primary to-emerald-700
                            text-sm font-bold text-primary-foreground
                            shadow-[0_0_16px_rgba(34,197,94,0.35)]
                            transition-transform duration-200
                            group-hover:scale-105
                        "
                    >
                        SF
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1 text-sm">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="
                                    group flex items-center gap-2 rounded-full px-4 py-2
                                    text-muted-foreground
                                    transition-all duration-200
                                    hover:bg-primary/10 hover:text-foreground
                                    hover:shadow-[0_0_16px_rgba(34,197,94,0.25)]
                                "
                            >
                                <Icon className="h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
                                <T k={item.key} />
                            </Link>
                        );
                    })}
                    <div className="ml-2">
                        <LanguageToggle />
                    </div>
                </nav>

                {/* Mobile nav */}
                <div className="flex items-center gap-3 md:hidden">
                    <LanguageToggle />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-72 border-l border-white/10 px-4 shadow-[-16px_0_40px_-12px_rgba(0,0,0,0.8)]"
                        >
                            <VisuallyHidden>
                                <SheetTitle>Menú de navegación</SheetTitle>
                            </VisuallyHidden>
                            <nav className="flex flex-col gap-3 mt-10">
                                {navItems.map((item) => (
                                    <SheetClose asChild key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center justify-center rounded-xl border border-border/60 bg-card px-4 py-4 text-center text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                                        >
                                            <T k={item.key} />
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    );
}
