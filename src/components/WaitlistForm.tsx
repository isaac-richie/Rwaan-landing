"use client";

import { useEffect, useState } from "react";

type WaitlistFormProps = {
  disabled?: boolean;
  disabledMessage?: string;
};

export default function WaitlistForm({
  disabled = false,
  disabledMessage = "Waitlist opens soon.",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (disabled) {
      setStatus("error");
      setMessage(disabledMessage);
      return;
    }
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || "Unable to join waitlist");
      }

      setStatus("success");
      setMessage("You are on the list. We will be in touch.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  useEffect(() => {
    if (!message || status !== "success") return;
    const timer = setTimeout(() => setMessage(null), 5000);
    return () => clearTimeout(timer);
  }, [message, status]);

  return (
    <form onSubmit={onSubmit} className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          disabled={disabled}
          className="w-full rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-bnb-gold/60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={disabled || status === "loading"}
        aria-disabled={disabled || status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F0B90B] via-[#F6C84C] to-[#F0B90B] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_28px_rgba(240,185,11,0.4)] transition disabled:cursor-not-allowed disabled:opacity-60 disabled:animate-pulse"
      >
        {disabled ? "Join Waitlist" : status === "loading" ? "Submitting..." : "Join Waitlist"}
      </button>
      {message ? (
        <div
          className={
            status === "error"
              ? "rounded-full border border-red-400/40 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-200"
              : "rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-200"
          }
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}
