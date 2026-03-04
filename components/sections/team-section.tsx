import { FaPaw } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalistCard from "../ui/brutalist-card";
import { GithubIcon, InstagramIcon } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="team">
      <MaxWidthWrapper className="py-20">
        <div className="space-y-15">
          <div className="flex flex-col items-center gap-5 text-center">
            <BrutalistCard className="size-fit bg-blue-300">
              <FaPaw className="text-white" style={{ stroke: "black", strokeWidth: 20 }} />
              <h2>Tim Kami</h2>
            </BrutalistCard>
            <p className="text-4xl font-medium">Para Keonk Di Baliknya</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-center gap-2 text-center">
                <div className="border-2 border-black bg-green-400 p-3">
                  <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Keonk</span>
                <span className="text-sm text-gray-500">Pendiri & Lead Dev.</span>
                <div className="mt-2 flex gap-3 text-gray-500">
                  <GithubIcon className="size-5" />
                  <InstagramIcon className="size-5" />
                </div>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-center gap-2 text-center">
                <div className="border-2 border-black bg-green-400 p-3">
                  <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Keonk</span>
                <span className="text-sm text-gray-500">Pendiri & Lead Dev.</span>
                <div className="mt-2 flex gap-3 text-gray-500">
                  <GithubIcon className="size-5" />
                  <InstagramIcon className="size-5" />
                </div>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-center gap-2 text-center">
                <div className="border-2 border-black bg-green-400 p-3">
                  <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Keonk</span>
                <span className="text-sm text-gray-500">Pendiri & Lead Dev.</span>
                <div className="mt-2 flex gap-3 text-gray-500">
                  <GithubIcon className="size-5" />
                  <InstagramIcon className="size-5" />
                </div>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-center gap-2 text-center">
                <div className="border-2 border-black bg-green-400 p-3">
                  <FaPaw className="size-10 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Keonk</span>
                <span className="text-sm text-gray-500">Pendiri & Lead Dev.</span>
                <div className="mt-2 flex gap-3 text-gray-500">
                  <GithubIcon className="size-5" />
                  <InstagramIcon className="size-5" />
                </div>
              </div>
            </BrutalistCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
