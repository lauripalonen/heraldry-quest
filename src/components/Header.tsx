import Link from "next/link";

export default function Navigation() {
  return (
    <header className="p-2 flex items-baseline justify-center border-b-2 border-b-stone-800">
      <Link className="font-title text-2xl md:text-6xl hover:text-amber-500 active:text-amber-500" href="/">
        Heraldry Quest
      </Link>
    </header>
  );
}
