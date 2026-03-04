import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-50 w-full border-3 border-black px-3.5 py-3.5">
      <div className={cn("mx-auto flex max-w-6xl items-center justify-between")}>
        <div className="flex items-center gap-3">
          <div className="relative size-5">
            <Image src="/icons/icon.svg" alt="Main Icon" fill priority />
          </div>
          <span className="font-semibold uppercase">
            Keonk <span className="bg-black px-1 text-white">Studio</span>
          </span>
        </div>
        <nav>
          <ul className="flex items-center gap-6 text-gray-600">
            <li>Tentang</li>
            <li>Fitur</li>
            <li>Tim</li>
            <li>Gabung</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
