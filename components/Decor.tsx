/* Shared decorative elements — lotus motif and photo-slot panels.
   PhotoPanel renders a styled visual placeholder; swap in real photography
   by replacing its contents with a next/image once licensed photos exist. */

export function LotusFlower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 110" fill="currentColor" className={className} aria-hidden="true">
      <path d="M100 6 C84 32 79 58 100 86 C121 58 116 32 100 6 Z" opacity="0.9" />
      <path d="M52 30 C48 58 64 80 98 89 C94 62 78 43 52 30 Z" opacity="0.65" />
      <path d="M148 30 C152 58 136 80 102 89 C106 62 122 43 148 30 Z" opacity="0.65" />
      <path d="M14 58 C26 80 58 94 98 92 C78 73 46 61 14 58 Z" opacity="0.4" />
      <path d="M186 58 C174 80 142 94 102 92 C122 73 154 61 186 58 Z" opacity="0.4" />
      <path d="M60 98 C85 106 115 106 140 98 C115 112 85 112 60 98 Z" opacity="0.3" />
    </svg>
  );
}

export function PhotoPanel({
  variant = "light",
  label,
  script,
  className = "",
}: {
  variant?: "light" | "navy";
  label?: string;
  script?: string;
  className?: string;
}) {
  const isNavy = variant === "navy";
  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${
        isNavy
          ? "bg-gradient-to-br from-navy to-navy-deep"
          : "bg-gradient-to-br from-lotus-pale via-ivory to-beige"
      } ${className}`}
    >
      <LotusFlower
        className={`absolute -bottom-6 -right-8 w-56 ${
          isNavy ? "text-lotus/30" : "text-lotus/50"
        }`}
      />
      <LotusFlower
        className={`absolute top-6 -left-10 w-32 rotate-12 ${
          isNavy ? "text-white/10" : "text-burgundy/10"
        }`}
      />
      <div className="relative h-full flex flex-col items-center justify-center text-center p-10">
        {script && (
          <div
            className={`font-script text-4xl md:text-5xl leading-snug ${
              isNavy ? "text-lotus" : "text-burgundy"
            }`}
          >
            {script}
          </div>
        )}
        {label && (
          <div
            className={`mt-4 text-sm font-semibold tracking-wide ${
              isNavy ? "text-gray-300" : "text-muted"
            }`}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
