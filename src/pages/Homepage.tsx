"use client";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Homepage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] p-8 text-center max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        STARZ University Students Purity Test
      </h1>
      <p className="text-sm md:text-lg lg:text-xl">
        The Student Purity Test&nbsp;— find out how{" "}
        <span className="text-yellow-300">PURE</span> you{" "}
        <span className="flex text-center justify-center">
          have stayed in your campus life!
        </span>
        <span className="flex text-center justify-center">
          Answer 100 fun questions and get your score.
        </span>
      </p>

      <Link href="/test" className="mt-3 md:mt-4 lg:mt-6">
        <Button variant="primary">Start Test</Button>
      </Link>
    </section>
  );
}
