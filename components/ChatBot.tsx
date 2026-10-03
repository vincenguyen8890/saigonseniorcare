"use client";

import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

const QUICK_REPLIES = [
  "What is Saigon Home Care?",
  "What are Senior Living Homes?",
  "How much does care cost?",
  "Do you have Vietnamese-speaking caregivers?",
  "How do I get started?",
  "Request a free consultation",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Xin chào! 👋 Hi! I'm here to help you learn about Saigon Senior Care — in-home care and small residential senior living homes for Houston families. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    setShowQuickReplies(false);
    const userMsg: Message = { role: "user", content };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting. Please call us at (832) 234-6888.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button — sits above the mobile sticky CTA bar */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 w-14 h-14 bg-navy hover:bg-navy-soft text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-150"
      >
        {open ? <XIcon /> : <ChatIcon />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-36 md:bottom-24 right-4 md:right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-beige flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-navy text-white px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-burgundy flex items-center justify-center text-white font-bold text-xs shrink-0">
              S
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Saigon Senior Care</div>
              <div className="text-xs text-lotus">Ask us anything</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <XIcon />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.role === "user"
                      ? "bg-navy text-white rounded-br-sm"
                      : "bg-ivory text-charcoal rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-ivory text-muted rounded-2xl rounded-bl-sm px-4 py-2.5 text-xs">
                  Typing…
                </div>
              </div>
            )}

            {/* Quick reply buttons — shown only at the start */}
            {showQuickReplies && !loading && (
              <div className="pt-1 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs bg-white border border-burgundy text-burgundy hover:bg-burgundy hover:text-white rounded-full px-3 py-1.5 transition-colors duration-150"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-beige p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask a question…"
              className="flex-1 text-sm border border-beige-dark rounded-full px-4 py-2 focus:outline-none focus:border-burgundy"
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="w-9 h-9 bg-navy hover:bg-navy-soft disabled:opacity-40 text-white rounded-full flex items-center justify-center transition-colors shrink-0"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ChatIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}
