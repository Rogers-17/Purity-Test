"use client"
import { Button } from "@/components/ui/Button";
import Link from "next/link";


export default function Homepage () {
    return (
        <section className="flex flex-col items-center justify-center min-h-[90vh] p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">STARZ University Students Purity Test</h1>
            <p>The <strong>Student Purity Test</strong> - FInd out how "pure" you've
            stayed in your campus life! Answer 100 fun questions and get your score
            </p>
            <Link href="/test">
                <Button variant="primary">Start Test</Button>
            </Link>
        </section>
    );
}