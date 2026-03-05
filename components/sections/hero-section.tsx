import { FaCat, FaGamepad, FaPaw } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalistCard from "../ui/brutalist-card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaFaceSmile } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="flex min-h-screen items-center py-30">
        <div className="flex w-full justify-between gap-20">
          <div className="flex flex-col justify-center gap-2">
            <BrutalistCard className="w-fit bg-green-200 text-sm duration-300 hover:scale-105 hover:-rotate-2">
              <FaPaw className="text-white" style={{ stroke: "black", strokeWidth: 20, fill: "green" }} />
              <span>Komunitas Roblox Bertema Kucing</span>
            </BrutalistCard>
            <h1 className="mt-1 text-6xl leading-18 font-extrabold">
              Keonk <br /> <span className="-mx-2 block size-fit rotate-2 border-3 border-dashed border-red-500 px-2 text-red-400">Studio</span>
            </h1>
            <div className="mt-4 flex items-center gap-2">
              <BrutalistCard className="-rotate-1 bg-orange-200 py-0.5 text-sm shadow-none duration-200 hover:rotate-2 hover:shadow-none">
                <FaCat className="text-white" style={{ stroke: "black", strokeWidth: 10, fill: "orange" }} />
                <span>Keonk</span>
              </BrutalistCard>
              <BrutalistCard className="rotate-1 bg-blue-100 py-0.5 text-sm shadow-none duration-200 hover:-rotate-2 hover:shadow-none">
                <FaGamepad className="text-white" style={{ stroke: "black", strokeWidth: 10, fill: "skyblue" }} />
                <span>Roblox</span>
              </BrutalistCard>
              <BrutalistCard className="-rotate-1 bg-yellow-200 py-0.5 text-sm shadow-none duration-200 hover:rotate-2 hover:shadow-none">
                <FaFaceSmile className="text-white" style={{ stroke: "black", strokeWidth: 10, fill: "yellow" }} />
                <span>Fun</span>
              </BrutalistCard>
            </div>
            <p className="mt-3 max-w-110">
              Komunitas Roblox yang membuat map-map seru dengan tema kucing. Dari kucing lucu sampai kucing epic, semua ada di sini! 🐱
            </p>
            <div className="mt-3 flex gap-3">
              <BrutalistCard className="bg-red-500 px-4 py-2 font-semibold text-white">
                <span>Gabung Sekarang</span>
                <ArrowRight className="-mb-1 size-4" />
              </BrutalistCard>
              <BrutalistCard className="bg-white px-4 py-2 font-semibold">Lihat Fitur</BrutalistCard>
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
