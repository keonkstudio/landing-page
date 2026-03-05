import { FaPaw } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalistCard from "../ui/brutalist-card";

export default function AboutSection() {
  return (
    <section id="about">
      <MaxWidthWrapper className="py-20">
        <div className="space-y-15">
          <div className="flex flex-col items-center gap-5 text-center">
            <BrutalistCard className="size-fit rotate-2 bg-green-200 px-3.5 py-1 text-sm duration-300 hover:-rotate-3">
              <FaPaw className="text-white" style={{ stroke: "black", strokeWidth: 20 }} />
              <h2>Tentang Kami</h2>
            </BrutalistCard>
            <p className="text-4xl font-semibold">
              Komunitas Roblox <span className="inline-block size-fit rotate-3 border-3 border-dashed border-red-500 px-2 text-red-400">Kucink</span>
            </p>
            <p className="max-w-145 text-gray-500">
              Keonk Studio adalah komunitas developer Roblox yang fokus membuat game dan map bertema kucing. Kami percaya bahwa kucing + Roblox =
              kombinasi yang sempurna!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <BrutalistCard className="-rotate-2 flex-col items-center py-4 duration-300 hover:-mt-2 hover:scale-103 hover:rotate-0">
              <div className="flex h-30 flex-col items-center gap-2">
                <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                <span className="text-md text-3xl font-semibold">500+</span>
                <span>Members</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="rotate-2 flex-col items-center py-4 duration-300 hover:-mt-2 hover:scale-103 hover:rotate-0">
              <div className="flex h-30 flex-col items-center gap-2">
                <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                <span className="text-md text-3xl font-semibold">500+</span>
                <span>Members</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="-rotate-1 flex-col items-center py-4 duration-300 hover:-mt-2 hover:scale-103 hover:rotate-0">
              <div className="flex h-30 flex-col items-center gap-2">
                <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                <span className="text-md text-3xl font-semibold">500+</span>
                <span>Members</span>
              </div>
            </BrutalistCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
