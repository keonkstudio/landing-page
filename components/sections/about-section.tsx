import { FaPaw } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalistCard from "../ui/brutalist-card";

export default function AboutSection() {
  return (
    <section id="about">
      <MaxWidthWrapper className="space-y-4 py-10">
        <div className="space-y-15">
          <div className="flex flex-col items-center gap-5 text-center">
            <BrutalistCard className="size-fit bg-blue-300">
              <FaPaw className="text-white" style={{ stroke: "black", strokeWidth: 20 }} />
              <h2>Tentang Kami</h2>
            </BrutalistCard>
            <p className="text-4xl font-medium">Komunitas Roblox Keonk</p>
            <p className="max-w-145 text-gray-500">
              Keonk Studio adalah komunitas developer Roblox yang fokus membuat game dan map bertema kucing. Kami percaya bahwa kucing + Roblox =
              kombinasi yang sempurna!{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <BrutalistCard className="flex-col items-center py-3">
              <div className="flex h-30 flex-col items-center gap-2">
                <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                <span className="text-md text-3xl font-semibold">500+</span>
                <span>Members</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center py-3">
              <div className="flex h-30 flex-col items-center gap-2">
                <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                <span className="text-md text-3xl font-semibold">500+</span>
                <span>Members</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center py-3">
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
