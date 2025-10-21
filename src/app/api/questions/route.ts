import { NextResponse } from "next/server";
import { questions } from "@/lib/question";

export async function GET () {
    return NextResponse.json(questions);
}