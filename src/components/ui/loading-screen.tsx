type LoadingScreenProps = {
  variant?: "overlay" | "inline";
};

const loadingText = "Loading";

export function LoadingScreen({ variant = "inline" }: LoadingScreenProps) {
  const isOverlay = variant === "overlay";

  return (
    <div
      role="status"
      aria-live="polite"
      className={
        isOverlay
          ? "fixed inset-0 z-100 grid place-items-center bg-black px-6 text-white"
          : "grid min-h-screen place-items-center bg-black px-6 text-white"
      }
    >
      <div className="w-full max-w-md">
        <p
          aria-label="Loading"
          className="font-mono text-xs uppercase tracking-[0.34em] text-zinc-500"
        >
          <span aria-hidden="true" className="inline-flex">
            {loadingText.split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="loading-letter"
                style={{ animationDelay: `${index * 85}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </p>
        <div className="mt-5 h-px w-full overflow-hidden bg-zinc-800">
          <div className="loading-line h-full w-full bg-white" />
        </div>
      </div>
    </div>
  );
}
