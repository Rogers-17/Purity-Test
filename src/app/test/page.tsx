"use client"

import { Button } from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useEffect, useState } from "react";

interface Question {
    id: number;
    text: string;
}

export default function TestPage() {

    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, SetAnswers] = useState<Record<number, boolean>>({});
    const [current, setCurrent] = useState(0);
    const [loading, SetLoading] = useState(true);
    const [calculating, SetCalculating] = useState(false);

    useEffect(() => {
        fetch("/api/questions")
        .then((res) => res.json())
        .then((data) => setQuestions(data))
        .finally(() => setTimeout(() => SetLoading(false), 1000))
    }, []);

    const handleAnswer = (value: boolean) => {
        SetAnswers((prev) => ({ ...prev, [current]: value }));
        if (current < questions.length - 1) setCurrent((prev) => prev + 1);
    };

   const handleCalculate = () => {
        SetCalculating(true);
        setTimeout(() => {
            const total = questions.length;
            const yesCount = Object.values(answers).filter((a) => a).length;
            const purityScore = ((total - yesCount) / total) * 100;

            // store score in the localstorage
            localStorage.setItem("purityScore", purityScore.toString());

            // Store answers as question text + answer
            const formattedAnswers = questions.map((q, i) => ({
            question: q.text,
            answer: answers[i] ? "Yes" : "No",
            }));
            localStorage.setItem("answers", JSON.stringify(formattedAnswers));
            // Redirecting after calculatin and storing answers/score
            window.location.href = "/test/result";
        }, 1500);
    };
    
    // Setting loading state for each requests
    if (loading) return <Loader />
    if (calculating) return <Loader/>

    const q = questions[current];
    const progress = ((current + 1) / questions.length ) * 100;

    return(
        <div className="p-8 max-w-2xl mx-auto min-h-[90vh]">
            <div className="mb-6">
                <ProgressBar progress={progress}/>
                <p className="text-sm text-white mt-1 text-right">
                    {current + 1} / {questions.length}
                </p>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                Question {current + 1}
            </h2>
            <p className="text-lg mb-8">{q.text}</p>

        <div className="flex gap-4">
            <Button 
            variant="primary" 
            onClick={() => handleAnswer(true)}>
                Yes
            </Button>
            
            <Button 
            variant="outline" 
            onClick={() => handleAnswer(false)}>
                No
            </Button>
        </div>

        {current === questions.length - 1 && (
            <Button
            className="mt-8"
            variant="secondary"
            onClick={handleCalculate}
            >
                Calculate Score
            </Button>
        )}
        </div>
    );
}
