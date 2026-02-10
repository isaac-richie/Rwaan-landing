import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });

    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { error } = await supabase
      .from("waitlist")
      .upsert({ email: normalizedEmail }, { onConflict: "email" });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "marketingrawlianalytics@proton.me",
        subject: "New waitlist signup",
        text: `New waitlist signup: ${normalizedEmail}`,
      });

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: normalizedEmail,
        subject: "You’re on the Rawli Analytics waitlist",
        text:
          "Hi there,\\n\\nThanks for joining the Rawli Analytics waitlist.\\nYou’re on the list — we’ll notify you as soon as access opens.\\n\\nAppreciate the trust.\\n\\n– Rawli Analytics",
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
