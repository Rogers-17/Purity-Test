import { Button } from "@/components/ui/Button";
import Link from "next/link";

const scoreMeaning = [
    { score: "90-100",  remark: "Angel on campus", emoji: "💎"},
    { score: "70-89",  remark: "Balanced but adventurous", emoji: "🌲"},
    { score:"40-69",  remark: "You have seen things.....", emoji: "🔥"},
    { score: "1-39",  remark: "Just say 40-40 and we will understand", emoji: "😈"},
];

export default function About () {
    return (
        <main className="py-5 bg-neutral-950 text-white min-h-[90vh] text-center container">
            <section className="max-w-3xl mx-auto text-center space-y-8 ">
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300">
                    About the Student Purity Test
                </h1>

                <p className="text-lg leading-relaxed">
                    Welcome to <span className="font-bold text-yellow-300"> Student Purity Test</span>, a fun and totally unserious
                    way to measure <em>how pure you&apos;ve been</em> since stepping foot on STARZ campus!
                </p>

                <p className="text-lg leading-relaxed">
                    Inspired by the classic &apos;Rice Purity Test&apos;, this version is built for {" "}
                    <span className="font-bold"> Starz University students</span>, especially those who know
                    what goes down at <span className="font-semibold text-yellow-300">4040</span>, and post-game celebrations
                    at <span className="font-semibold text-yellow-300">Passion Club</span>.
                </p>

                <div className="border border-yellow-300 rounded-xl p-6 text-left space-y-4 shadow-sm">
                    <h2 className="text-2xl font-black text-yellow-300">Score Meanings</h2>
                    <div>
                        {scoreMeaning.map((score, index) => (
                            <ul key={index}>
                                <li>{score.emoji} <span className="font-bold"> {score.score}:</span> {score.remark}</li>
                            </ul>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-yellow-300">The Inspiration</h2>
                    <p>
                        At our university, technology is our passion 
                        and education is our life. We commute daily, hang out at {" "}
                        <span className="font-bold text-yellow-300"> 40-40</span>, play games at the {" "}
                        <span className="font-bold text-yellow-300"> Invisible Sports Park</span>, and sometimes
                        end the night at <span className="font-bold text-yellow-300">Passion</span>.
                        That&apos;s where the purity levels start to... fade. 😂
                    </p>
                </div>

                <div className="pt-3">
                    <Link href="/test">
                        <Button>
                            START
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
