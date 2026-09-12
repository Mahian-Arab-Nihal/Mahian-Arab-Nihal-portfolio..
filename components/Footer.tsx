import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 md:px-12">
      <div className="flex flex-col items-start justify-between gap-4 text-xs text-bone2 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed & built for clients who want to stand out.</span>
      </div>
    </footer>
  );
}
