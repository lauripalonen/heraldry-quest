import Link from "next/link";

export default function Navigation() {
  return (
    <header className="absolute top-0 left-0 w-full p-2 h-[var(--header-height-mobile)] md:p-4 shadow text-center md:h-[var(--header-height)]">
      <Link className="font-title text-4xl md:text-6xl hover:text-amber-500 active:text-amber-500" href="/">
        Heraldry Quest
      </Link>
    </header>
  );
}
