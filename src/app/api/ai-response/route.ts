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
    let aiMessage = data.choices?.[0]?.message?.content?.trim();
    if (!aiMessage) {
      if(score > 89 ) {
        aiMessage = "You are an angel on campus, keep being that way"
      }
      if(score > 69 && score < 90 ) {
        aiMessage = "You have a balanced student life but also adventurous. 😎"
      }
      if(score > 39 && score < 70){
        aiMessage = "You are an angel on campus, keep being that way"
      } else{
        aiMessage = "Just say 40-40 and we will understand, you are a legend"
      }
    }

    return NextResponse.json({ message: aiMessage });
    
  } catch (error: unknown) {
    console.error("🔥 AI Error:", error);
    return NextResponse.json(
      { message: "AI is taking a nap. Please try again later." },
      { status: 500 }
    );
  }
}
