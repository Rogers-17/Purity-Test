"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface Answer {
  question: string;
  answer: string;
}

export default function ResultPage() {
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve stored score and answers
    const storedScore = localStorage.getItem("purityScore");
    const storedAnswers = localStorage.getItem("answers");

    if (storedScore) setScore(parseFloat(storedScore));
    if (storedAnswers) setAnswers(JSON.parse(storedAnswers));

    // Call AI endpoint if we have data
    if (storedScore && storedAnswers) {
      fetch("/api/ai-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          score: parseFloat(storedScore),
          answers: JSON.parse(storedAnswers),
        }),
      })
        .then((res) => res.json())
        .then((data) => setResult(data.message))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const resetTest = () => {
    localStorage.removeItem("purityScore");
    localStorage.removeItem("answers");
    localStorage.removeItem("aiMessage");
  }

  if (loading) return <Loader />;

  // adding a quick summary to use `answers` for ESLint error
  const yesCount = answers.filter((a) => a.answer.toLowerCase() === "yes").length;
  const noCount = answers.length - yesCount;
  // just read it to satisfy ESLintconsole.log("Answers summary:", { yesCount, noCount });
  console.log("Answers summary:", { yesCount, noCount });

  return (
    <div className="p-8 max-w-xl mx-auto text-center min-h-[90vh]">
      <h1 className="text-3xl font-bold mb-4">
        Your Purity Score
      </h1>

      {score !== null && 
      <p className="text-6xl mb-4 font-extrabold text-yellow-300">{score.toFixed(0)}%</p>
      }

      {result ? (
        <div className="p-4 border border-yellow-300 rounded-lg bg-neutral-900 text-white">
          <p>{result}</p>
        </div>
      ) : (
        <p className="text-white">No result available.</p>
      )}

      <Link
      href="/test"
      onClick={() => resetTest()}>
        <Button
        className="mt-6"
        variant="primary"
        >
        Retake Test
      </Button>
      </Link>
    </div>
  );
}
