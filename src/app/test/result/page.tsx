"use client"

import { Button } from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function ResultPage () {

    const [score, setScore] = useState<number | null>(null);

    useEffect(() => {
        const val = localStorage.getItem("purityScore");
        if (val) setScore(parseFloat(val));
    }, []);

    if (score === null) return <Loader />;

    let message = "";;
    if (score > 80 ) message = "Wow! You're a true scholar."
    else if (score > 50) message = "You have a balanced student life."
    else message = "You have lived your UNI life to the fullest"

    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Your Purity Score</h1>
            <p className="text-6xl font-extrabold text-lime-400 mb-4">
                {score.toFixed(0)}%
            </p>
            <p className="text-lg mb-6">{message}</p>
            <Link href="/test">
                <Button variant="primary">Retake Test</Button>
            </Link>
        </section>
    );
}