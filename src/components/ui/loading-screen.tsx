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
          ? "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-6 text-white"
          : "flex flex-col items-center justify-center min-h-[70vh] w-full bg-black px-6 text-white"
      }
    >
      <div className="w-full max-w-md flex flex-col items-center">
        <p
          aria-label="Loading"
          className="text-center font-mono text-xs uppercase tracking-[0.34em] text-zinc-500"
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
