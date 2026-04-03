"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Health Catalog" },
    { href: "/sexual-health", label: "Sexual Health" },
    { href: "/rights-and-abortion", label: "Rights & Abortion" },
    { href: "/global-perspective", label: "Global Perspective" },
    { href: "/assault-and-recovery", label: "Assault & Recovery" },
    { href: "/media-representation", label: "Media & Stereotypes" },
    { href: "/resources", label: "Resources Map" },
    { href: "/trivia", label: "Trivia" },
    { href: "/sources", label: "Verified Sources" }
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-card shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-12 items-center justify-between">
                    <div className="flex items-center gap-4 overflow-x-auto no-scrollbar w-full py-1">
                        <Link href="/" className="flex items-center space-x-2 shrink-0 pr-4 outset-border px-3 py-1 font-bold text-black uppercase tracking-widest text-sm hover:underline hover:bg-primary">
                            <span className="font-sans">Start</span>
                        </Link>
                        <nav className="flex items-center space-x-2 pr-4 md:pr-0">
                            {links.filter(l => l.href !== "/").map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-3 py-1 text-sm font-bold uppercase tracking-wider whitespace-nowrap",
                                        pathname === link.href
                                            ? "border-t-[2px] border-l-[2px] border-[#333] border-b-[2px] border-r-[2px] border-b-white border-r-white bg-card"
                                            : "outset-border hover:bg-card"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
