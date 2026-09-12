import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6 text-center">
      <p className="font-display text-hero uppercase text-bone">404</p>
      <p className="max-w-sm text-bone2">
        This page wandered off the grid. Let's get you back to the work.
      </p>
      <Link
        href="/"
        className="rounded-full bg-flame px-7 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.04]"
      >
        Back to home
      </Link>
    </main>
  );
}
