import type { IconBaseProps } from "react-icons";

export function NeonIcon(props: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M27.542.008V28l-10.747-9.508v9.323H0V0zM3.376 24.439H13.42V11.084l10.747 9.508V3.382l-20.79-.005z"
      />
    </svg>
  );
}

export function GoHighLevelIcon(props: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FACC15" d="M5 17 18 4l13 13h-8v41H13V17z" />
      <path fill="#CA8A04" d="M23 17v41L13 48V17z" opacity="0.9" />
      <path fill="#3B82F6" d="M19 32 32 19l13 13h-8v26H27V32z" />
      <path fill="#1D4ED8" d="M37 32v26L27 48V32z" opacity="0.9" />
      <path fill="#22C55E" d="M33 17 46 4l13 13h-8v41H41V17z" />
      <path fill="#15803D" d="M51 17v41L41 48V17z" opacity="0.9" />
    </svg>
  );
}

export function GeminiIcon(props: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id="gemini-icon-gradient"
          x1="2"
          x2="22"
          y1="22"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4285F4" />
          <stop offset="0.45" stopColor="#A142F4" />
          <stop offset="1" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gemini-icon-gradient)"
        d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
      />
    </svg>
  );
}
