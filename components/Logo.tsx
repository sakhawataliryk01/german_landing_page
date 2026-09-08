import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const wordmark = variant === "light" ? "text-white" : "text-accent";

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center text-accent">
        <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden>
          <path
            d="M22 3.5 38 9.2v12.4c0 8.3-5.6 14.4-16 17.4C11.6 36 6 29.9 6 21.6V9.2L22 3.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center pt-1 text-[13px] font-extrabold tracking-tight">
          CT
        </span>
      </span>
      <span className={`text-[22px] font-bold tracking-tight ${wordmark}`}>
        Arbeitsschutz
      </span>
    </Link>
  );
}
