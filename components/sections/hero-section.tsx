import { FaCat, FaGamepad, FaPaw } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalistCard from "../ui/brutalist-card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaFaceSmile } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="flex min-h-screen items-center py-45 md:py-30">
        <div className="grid w-full gap-45 md:grid-cols-2 md:gap-7">
          <div className="flex flex-col items-center justify-center gap-3.5 text-center md:items-start md:gap-1.5 md:text-start">
            <BrutalistCard className="w-fit bg-green-200 text-sm duration-300 hover:scale-105 hover:-rotate-2">
              <FaPaw className="text-white" style={{ stroke: "black", strokeWidth: 20, fill: "green" }} />
              <span>Komunitas Roblox Bertema Kucing</span>
            </BrutalistCard>
            <h1 className="mt-1 text-5xl leading-15 font-extrabold md:text-6xl md:leading-18">
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
              <BrutalistCard className="bg-white px-4 py-2 font-semibold">Tentang Keonk</BrutalistCard>
            </div>
            {/* <BrutalistCard className="p-2 rotate-2 size-fit md:hidden mt-13 mb-10 self-center">
              <div className="relative w-50 min-h-60 border-black">
                <Image src="/images/hero.webp" alt="Hero Image" fill priority className="object-cover" />

                <BrutalistCard className="absolute text-xs bg-orange-400 -bottom-5 -left-9 -rotate-4">
                  <p className="leading-4.5">&quot;Kucingnya lucu banget!&quot;<br /><span className="text-gray-600">- CatLofer99</span></p>
                </BrutalistCard>

                <BrutalistCard className="absolute text-xs bg-blue-200 -top-8 -right-7 rotate-4 max-w-40">
                  <p className="leading-4.5">&quot;Mapnya seru kalo main ama dia!&quot;<br /><span className="text-gray-600">- Ambasink100</span></p>
                </BrutalistCard>
              </div>
            </BrutalistCard> */}
          </div>
          <div className="flex items-center justify-center">
            <BrutalistCard className="size-fit rotate-2 p-2">
              <div className="relative min-h-70 w-60 border-black">
                <Image src="/images/hero.webp" alt="Hero Image" fill priority className="object-cover" />

                <BrutalistCard className="absolute -bottom-5 -left-9 -rotate-4 bg-orange-400 text-xs">
                  <p className="leading-4.5">
                    &quot;Kucingnya lucu banget!&quot;
                    <br />
                    <span className="text-gray-600">- CatLofer99</span>
                  </p>
                </BrutalistCard>

                <BrutalistCard className="absolute -top-8 -right-7 max-w-40 rotate-4 bg-blue-200 text-xs">
                  <p className="leading-4.5">
                    &quot;Mapnya seru kalo main ama dia!&quot;
                    <br />
                    <span className="text-gray-600">- Ambasink100</span>
                  </p>
                </BrutalistCard>
              </div>
            </BrutalistCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
