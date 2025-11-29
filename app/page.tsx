"use client";

import { motion } from "framer-motion";
import { books } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Discover Your Next <br /> Great Adventure
          </div>
          <div className="font-light text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
            Dive into thousands of web novels.
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black rounded-full w-fit" asChild>
              <Link href="/search">Browse Books</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full w-fit" asChild>
              <Link href="/books/1">Start Reading</Link>
            </Button>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Featured Books Section with 3D Cards */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-900 dark:from-neutral-200 dark:to-neutral-500">Featured Novels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <CardContainer key={book.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {book.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {book.author}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={book.cover}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`/books/${book.id}`}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Read now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    {book.rating} ⭐
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
    </div>
  );
}
