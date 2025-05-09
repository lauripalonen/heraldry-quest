import Link from "next/link";

export default function Navigation() {
  return (
    <header className="p-2 flex items-baseline border-b-2 border-b-stone-800">
      <Link className="font-title text-2xl md:text-6xl mr-4 md:mr-10 hover:text-teal-600 active:text-teal-600" href="/">
        Heraldry Quest
      </Link>
      <nav className="text-base md:text-2xl">
        <ul className="flex gap-4 md:gap-8 font-bold [&>li]:hover:text-teal-600 [&>li]:active:text-teal-600">  
          <li>
            <Link href="/quest">New quest</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
