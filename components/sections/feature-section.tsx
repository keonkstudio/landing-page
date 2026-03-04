import { FaPaw } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalistCard from "../ui/brutalist-card";

export default function FeatureSection() {
  return (
    <section id="feature">
      <MaxWidthWrapper className="py-20">
        <div className="space-y-15">
          <div className="flex flex-col items-center gap-5 text-center">
            <BrutalistCard className="size-fit -rotate-2 bg-blue-300 px-3.5 py-1 text-sm duration-300 hover:rotate-3">
              <FaPaw className="text-white" style={{ stroke: "black", strokeWidth: 20 }} />
              <h2>Fitur Unggulan</h2>
            </BrutalistCard>
            <p className="text-4xl font-semibold">Yang Bikin Seru</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-start gap-2">
                <div className="border-2 border-black bg-green-400 p-2.5">
                  <FaPaw className="size-6 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Map Kucing Kreatif</span>
                <span className="text-sm text-gray-500">Map-map unik bertema kucing yang seru dan kreatif untuk dimainkan bersama teman.</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-start gap-2">
                <div className="border-2 border-black bg-green-400 p-2.5">
                  <FaPaw className="size-6 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Map Kucing Kreatif</span>
                <span className="text-sm text-gray-500">Map-map unik bertema kucing yang seru dan kreatif untuk dimainkan bersama teman.</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-start gap-2">
                <div className="border-2 border-black bg-green-400 p-2.5">
                  <FaPaw className="size-6 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Map Kucing Kreatif</span>
                <span className="text-sm text-gray-500">Map-map unik bertema kucing yang seru dan kreatif untuk dimainkan bersama teman.</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-start gap-2">
                <div className="border-2 border-black bg-green-400 p-2.5">
                  <FaPaw className="size-6 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Map Kucing Kreatif</span>
                <span className="text-sm text-gray-500">Map-map unik bertema kucing yang seru dan kreatif untuk dimainkan bersama teman.</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-start gap-2">
                <div className="border-2 border-black bg-green-400 p-2.5">
                  <FaPaw className="size-6 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Map Kucing Kreatif</span>
                <span className="text-sm text-gray-500">Map-map unik bertema kucing yang seru dan kreatif untuk dimainkan bersama teman.</span>
              </div>
            </BrutalistCard>
            <BrutalistCard className="flex-col items-center bg-white p-5">
              <div className="flex w-full flex-col items-start gap-2">
                <div className="border-2 border-black bg-green-400 p-2.5">
                  <FaPaw className="size-6 text-white" style={{ stroke: "black", strokeWidth: 20 }} />
                </div>
                <span className="text-md mt-2 text-xl font-semibold">Map Kucing Kreatif</span>
                <span className="text-sm text-gray-500">Map-map unik bertema kucing yang seru dan kreatif untuk dimainkan bersama teman.</span>
              </div>
            </BrutalistCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
