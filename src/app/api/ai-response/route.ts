import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("✅ AI endpoint hit (using OpenRouter)");

    const { answers, score } = await req.json();
    console.log("Request body:", { answers, score });

    const prompt = `
    You are an AI analyzing a Liberian university student's "Purity Test" results.
    The student's score is ${score ?? "unknown"}/100.

Here are the answers they gave:
${Array.isArray(answers)
      ? answers.map((a: any) => `Q: ${a.question} → A: ${a.answer}`).join("\n")
      : "No answers provided."}

  Write a short, friendly summary (2‑3 sentences) describing their vibe: maybe they’re adventurous, quiet, balanced, social, or focused. Keep it lighthearted and even naughty.
    `;

    const apiKey = "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";
    if (!apiKey) {
      throw new Error("Missing OpenRouter API key");
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct:free",
          messages: [
            { role: "user", content: prompt }
          ],
          max_tokens: 400,
          temperature: 0.7
        })
      }
    );

    console.log("Response status:", response.status);

    const data = await response.json();
    console.log("Response data:", data);

    // The response format should follow the OpenAI-compatible format
    const aiMessage = data.choices?.[0]?.message?.content
      || "You are a unique student with your own spark on campus. 😎";
      console.log("AI message object:", data.choices[0].message);

    return NextResponse.json({ message: aiMessage });
    

  } catch (error: any) {
    console.error("🔥 AI Error:", error);
    return NextResponse.json(
      { message: "AI is taking a nap. Please try again later." },
      { status: 500 }
    );
  }
}
