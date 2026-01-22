// components/layout/header.tsx
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent, SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navItems = [
    { href: "#projects", label: "Proyectos" },
    { href: "#experience", label: "Experiencia" },
    { href: "#contact", label: "Contacto" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <span className="font-bold text-lg">Home</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile nav */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-64">
                        <VisuallyHidden>
                            <SheetTitle>Menú de navegación</SheetTitle>
                        </VisuallyHidden>
                        <nav className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </Container>
        </header>
    );
}
