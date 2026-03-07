import { NextRequest, NextResponse } from "next/server";

const TOOLBOX_URL = process.env.TOOLBOX_API_URL || "http://localhost:3100";
const TOOLBOX_KEY = process.env.TOOLBOX_API_KEY || "test-key-123";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, source = "auto", target } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json({ success: false, error: "text is required" }, { status: 400 });
    }
    if (!target || typeof target !== "string") {
      return NextResponse.json({ success: false, error: "target language is required" }, { status: 400 });
    }
    if (text.length > 5000) {
      return NextResponse.json({ success: false, error: "Text exceeds 5000 character limit" }, { status: 400 });
    }

    const res = await fetch(`${TOOLBOX_URL}/v1/translate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOOLBOX_KEY}`,
      },
      body: JSON.stringify({ text, source, target }),
      signal: AbortSignal.timeout(15000),
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ success: false, error: data.error?.message || "Translation failed" }, { status: 502 });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ success: false, error: "Translation service unavailable" }, { status: 500 });
  }
}
