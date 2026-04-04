"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // Simulate async submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-jade-pale rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-7 h-7 text-jade"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2">
          Thank You — We&apos;ll Be in Touch Soon!
        </h3>
        <p className="text-muted text-sm">
          A member of our team will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            First Name <span className="text-gold">*</span>
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
            placeholder="Linh"
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Last Name <span className="text-gold">*</span>
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
            placeholder="Nguyen"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Phone Number <span className="text-gold">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
          placeholder="(713) 555-0100"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
          placeholder="linh@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="inquiry_type"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          How Can We Help? <span className="text-gold">*</span>
        </label>
        <select
          id="inquiry_type"
          name="inquiry_type"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition bg-white"
        >
          <option value="">Select an option...</option>
          <option value="tour">Schedule a Tour</option>
          <option value="pricing">Pricing & Availability</option>
          <option value="services">Services Information</option>
          <option value="respite">Respite Care Inquiry</option>
          <option value="other">Other Question</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Tell Us About Your Loved One
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition resize-none"
          placeholder="Any details that would help us prepare for your visit..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 text-white font-bold py-4 px-8 rounded-full transition-colors duration-150 text-base shadow-md"
      >
        {state === "submitting" ? "Sending..." : "Send Message & Request Tour"}
      </button>

      <p className="text-xs text-muted text-center">
        We respond within one business day. Your information is never shared.
      </p>
    </form>
  );
}
