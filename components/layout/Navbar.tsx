"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    return (
        <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
            <nav className="relative rounded-full border border-transparent dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4 flex">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <BookOpen className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
                    <span className="text-neutral-600 dark:text-neutral-300 hidden sm:block">WebNovel</span>
                </Link>

                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-500" />
                        <input
                            type="search"
                            placeholder="Search..."
                            className="h-9 w-48 rounded-full border border-neutral-200 dark:border-white/[0.2] bg-neutral-100 dark:bg-neutral-900 px-9 py-1 text-sm shadow-none transition-colors placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
                        />
                    </div>

                    <Button variant="ghost" size="icon" asChild className="rounded-full">
                        <Link href="/search" className="md:hidden">
                            <Search className="h-5 w-5 text-neutral-500" />
                        </Link>
                    </Button>

                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5 text-neutral-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-neutral-500" />
                            )}
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    )}
                </div>
            </nav>
        </div>
    );
}
