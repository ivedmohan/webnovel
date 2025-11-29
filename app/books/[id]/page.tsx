import { books } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, Star } from "lucide-react";

export function generateStaticParams() {
    return books.map((book) => ({
        id: book.id,
    }));
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const book = books.find((b) => b.id === id);

    if (!book) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero / Header */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover blur-sm scale-110"
                />
                <div className="absolute inset-0 z-20 flex items-end pb-10 container px-4 mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-end md:items-end w-full">
                        <div className="w-32 md:w-48 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl border-4 border-white/10 flex-shrink-0">
                            <img
                                src={book.cover}
                                alt={book.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-white flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">{book.title}</h1>
                            <p className="text-lg md:text-xl opacity-90 mb-4">By {book.author}</p>
                            <div className="flex flex-wrap gap-4 text-sm font-medium">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span>{book.rating} Rating</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    <span>{book.chapters} Chapters</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{book.status}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button size="lg" className="w-full md:w-auto" asChild>
                                <Link href={`/books/${book.id}/chapter/1`}>Read First Chapter</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container px-4 mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            {book.description}
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            {book.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="md:col-span-1">
                    <div className="bg-card border rounded-xl p-6 sticky top-24">
                        <h3 className="font-bold text-xl mb-4">Chapters</h3>
                        <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <Link
                                    key={i}
                                    href={`/books/${book.id}/chapter/${i + 1}`}
                                    className="block p-3 rounded-lg hover:bg-accent transition-colors flex justify-between items-center group"
                                >
                                    <span className="text-sm font-medium group-hover:text-primary">Chapter {i + 1}</span>
                                    <span className="text-xs text-muted-foreground">Free</span>
                                </Link>
                            ))}
                            <div className="p-3 text-center text-sm text-muted-foreground">
                                ... and {book.chapters - 20} more
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
