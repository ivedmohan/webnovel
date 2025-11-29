"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { books } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

function SearchContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState(books);

    useEffect(() => {
        if (query) {
            const filtered = books.filter(
                (book) =>
                    book.title.toLowerCase().includes(query.toLowerCase()) ||
                    book.author.toLowerCase().includes(query.toLowerCase()) ||
                    book.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
            );
            setResults(filtered);
        } else {
            setResults(books);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Search Novels</h1>

            <div className="relative mb-12">
                <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search by title, author, or tag..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-input bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {results.length > 0 ? (
                    results.map((book, idx) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex gap-4 p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors"
                        >
                            <div className="w-24 h-36 flex-shrink-0 overflow-hidden rounded-md">
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="font-bold text-lg line-clamp-1">{book.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {book.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-xs bg-secondary px-2 py-0.5 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">{book.description}</p>
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <Button size="sm" asChild>
                                        <Link href={`/books/${book.id}`}>Read</Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-muted-foreground">
                        No results found for &quot;{query}&quot;
                    </div>
                )}
            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <div className="min-h-screen bg-background py-10 px-4 md:px-8">
            <Suspense fallback={<div>Loading...</div>}>
                <SearchContent />
            </Suspense>
        </div>
    );
}
