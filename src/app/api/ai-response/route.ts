import { NextResponse } from "next/server";

interface Answer {
  question: string;
  answer: string;
}

interface AIRequestBody {
  answers: Answer[];
  score: number;
}

export async function POST(req: Request) {
  try {
    console.log("✅ AI endpoint successfully hit (using OpenRouter)");

    const { answers, score }: AIRequestBody = await req.json();
    console.log("Request body:", { answers, score });

    const prompt = `
      You are an AI analyzing a Liberian university student's "Purity Test" results.
      The student's score is ${score ?? "unknown"}/100.

      Here are the answers they gave:
      ${answers.map((a) => `Q: ${a.question} → A: ${a.answer}`).join("\n")}

      Write a short, friendly summary (2-3 sentences) describing their vibe: maybe they’re adventurous, quiet, balanced, social, or focused. Keep it lighthearted and respectful.
      `;

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) throw new Error("Missing OpenRouter API key");

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    console.log("Response data:", data);

    // Handle blank or missing AI message
    // aiMessage = data.choices[0]?.message?.content?.trim() || ;
      let aiMessage = data?.choices?.[0]?.message?.content?.trim();

      if (!aiMessage || aiMessage === "") {
        if (score >= 90) {
          aiMessage = "You're an angel on campus — focused, kind, and respected. 💎";
        } else if (score >= 70) {
          aiMessage = "You’ve got a balanced vibe — serious when needed but you know how to have fun. 🌿";
        } else if (score >= 40) {
          aiMessage = "You’ve seen some things... but you still keep it together. 🔥";
        } else {
          aiMessage = "Just say 40-40 and everyone will understand. You're a legend. 😎";
        }
      }
    // console.log("🧠 Final message to send:", aiMessage);
     return NextResponse.json({ message: aiMessage });

  } catch (error: unknown) {
    console.error("🔥 AI Error:", error);
    return NextResponse.json(
      { message: "AI is taking a nap. Please try again later." },
      { status: 500 }
    );
  }
}
