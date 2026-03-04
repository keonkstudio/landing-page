import { FaCat, FaGamepad, FaPaw } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalistCard from "../ui/brutalist-card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="flex min-h-screen items-center py-30">
        <div className="flex w-full justify-between gap-20">
          <div className="flex flex-col justify-center gap-2">
            <BrutalistCard className="w-fit bg-blue-300">
              <FaPaw className="text-white" style={{ stroke: "black", strokeWidth: 20 }} />
              <span>Komunitas Roblox Bertema Kucing</span>
            </BrutalistCard>
            <h1 className="-mt-1 text-6xl leading-18">
              Keonk <br /> <span className="-mx-2 bg-black px-2 text-white">Studio</span>
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <BrutalistCard className="bg-blue-300 py-0.5">
                <FaCat className="text-white" style={{ stroke: "black", strokeWidth: 10 }} />
                <span>Keonk</span>
              </BrutalistCard>
              <BrutalistCard className="bg-blue-300 py-0.5">
                <FaGamepad className="text-white" style={{ stroke: "black", strokeWidth: 10 }} />
                <span>Roblog</span>
              </BrutalistCard>
              <BrutalistCard className="bg-blue-300 py-0.5">
                <FaGamepad className="text-white" style={{ stroke: "black", strokeWidth: 10 }} />
                <span>Fun</span>
              </BrutalistCard>
            </div>
            <p className="mt-5 max-w-110">
              Komunitas Roblox yang membuat map-map seru dengan tema kucing. Dari kucing lucu sampai kucing epic, semua ada di sini! 🐱
            </p>
            <div className="mt-3 flex gap-3">
              <BrutalistCard className="bg-black px-4 py-2 text-white">
                <span>Gabung Sekarang</span>
                <ArrowRight className="-mb-1 size-4" />
              </BrutalistCard>
              <BrutalistCard className="bg-white px-4 py-2">Lihat Fitur</BrutalistCard>
            </div>
          </div>
          <div>
            <div className="relative size-100 border-2 border-black">
              <Image src="/icons/icon.svg" alt="Main Icon" fill priority />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
