"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const selectClass =
  "w-full border border-beige-dark rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy transition bg-white";
const inputClass =
  "w-full border border-beige-dark rounded-xl px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy transition";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("https://formspree.io/f/xgoppeld", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "error") {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 font-medium mb-2">Something went wrong.</p>
        <p className="text-muted text-sm mb-4">
          Please try again or call us at (832) 234-6888.
        </p>
        <button onClick={() => setState("idle")} className="text-burgundy underline text-sm">
          Try again
        </button>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-burgundy-pale rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">
          Thank You — We&apos;ll Be in Touch Soon
        </h3>
        <p className="text-muted text-sm">
          A member of our care team will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          Your Name <span className="text-burgundy">*</span>
        </label>
        <input id="name" name="name" type="text" required className={inputClass} placeholder="Linh Nguyen" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone <span className="text-burgundy">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="(832) 555-0123" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email
          </label>
          <input id="email" name="email" type="email" className={inputClass} placeholder="you@email.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="who_needs_care" className="block text-sm font-medium text-charcoal mb-1.5">
            Who needs care? <span className="text-burgundy">*</span>
          </label>
          <select id="who_needs_care" name="who_needs_care" required className={selectClass}>
            <option value="">Select...</option>
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="spouse">Spouse</option>
            <option value="relative">Relative</option>
            <option value="myself">Myself</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="care_type" className="block text-sm font-medium text-charcoal mb-1.5">
            Type of care considered? <span className="text-burgundy">*</span>
          </label>
          <select id="care_type" name="care_type" required className={selectClass}>
            <option value="">Select...</option>
            <option value="home-care">Home Care</option>
            <option value="residential">Residential Senior Living</option>
            <option value="not-sure">Not Sure</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferred_language" className="block text-sm font-medium text-charcoal mb-1.5">
            Preferred language
          </label>
          <select id="preferred_language" name="preferred_language" className={selectClass}>
            <option value="english">English</option>
            <option value="vietnamese">Vietnamese / Tiếng Việt</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-charcoal mb-1.5">
            When do you need care?
          </label>
          <select id="timeline" name="timeline" className={selectClass}>
            <option value="">Select...</option>
            <option value="immediately">Immediately</option>
            <option value="30-days">Within 30 days</option>
            <option value="1-3-months">1–3 months</option>
            <option value="researching">Researching options</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us a little about your parent or loved one and what kind of help you're looking for..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-burgundy hover:bg-burgundy-dark disabled:opacity-60 text-white font-bold py-4 px-8 rounded-full transition-colors duration-150 text-base shadow-md"
      >
        {state === "submitting" ? "Sending..." : "Talk With Our Care Team"}
      </button>

      <p className="text-xs text-muted text-center leading-relaxed">
        By submitting this form, you agree that Saigon Senior Care may contact
        you by phone, text, or email about your inquiry. We never sell or
        share your information. Submitting this form does not establish a
        care relationship — all services are subject to assessment and
        availability.
      </p>
    </form>
  );
}
