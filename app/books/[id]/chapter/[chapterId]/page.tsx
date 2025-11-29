import { books } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Settings } from "lucide-react";

export default async function ChapterPage({
    params,
}: {
    params: Promise<{ id: string; chapterId: string }>;
}) {
    const { id, chapterId } = await params;
    const book = books.find((b) => b.id === id);
    const chapterNum = parseInt(chapterId);

    if (!book || isNaN(chapterNum)) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Reading Toolbar */}
            <div className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between px-4 mx-auto">
                    <Link
                        href={`/books/${id}`}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Link>
                    <div className="text-sm font-semibold truncate max-w-[200px] md:max-w-md">
                        {book.title} - Chapter {chapterNum}
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Chapter Content */}
            <div className="container max-w-3xl mx-auto px-4 py-10 md:py-20">
                <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Chapter {chapterNum}</h1>

                <div className="prose prose-lg dark:prose-invert mx-auto leading-relaxed font-serif">
                    <p>
                        The day was bright and the sun shone down on the bustling city streets. People hurried about their daily lives, unaware of the impending doom that loomed on the horizon.
                    </p>
                    <p>
                        Our protagonist, a young adventurer named Alex, stood at the edge of the cliff, looking out over the vast expanse of the unknown lands. He adjusted his backpack, checked his sword, and took a deep breath.
                    </p>
                    <p>
                        &quot;This is it,&quot; he whispered to himself. &quot;The beginning of my journey.&quot;
                    </p>
                    <p>
                        Suddenly, a loud crash echoed through the valley. Birds scattered from the trees, and the ground shook beneath his feet. A massive shadow fell over him, blocking out the sun.
                    </p>
                    <p>
                        He looked up, his eyes widening in terror. A dragon, scales as black as night and eyes glowing with malevolent fire, descended from the clouds.
                    </p>
                    <p>
                        Alex drew his sword, his hand trembling slightly. He knew he was outmatched, but he couldn&apos;t back down now. Not when the fate of the world rested on his shoulders.
                    </p>
                    <p>
                        The dragon roared, a sound that shook Alex to his very core. He steeled himself, ready to face whatever came next.
                    </p>
                    <hr className="my-8 border-muted" />
                    <p>
                        (This is a mock chapter content. In a real application, this would be fetched from a database or API.)
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-20 pt-10 border-t">
                    <Button variant="outline" disabled={chapterNum <= 1} asChild={chapterNum > 1}>
                        {chapterNum > 1 ? (
                            <Link href={`/books/${id}/chapter/${chapterNum - 1}`}>
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                            </Link>
                        ) : (
                            <span><ArrowLeft className="mr-2 h-4 w-4" /> Previous</span>
                        )}
                    </Button>

                    <Button variant="outline" asChild>
                        <Link href={`/books/${id}/chapter/${chapterNum + 1}`}>
                            Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
