import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalistCard from "../ui/brutalist-card";

export default function GallerySection() {
  return (
    <section id="gallery">
      <MaxWidthWrapper className="py-20">
        <div className="space-y-12 md:space-y-15">
          <div className="flex flex-col items-center gap-3.5 text-center md:gap-5">
            <BrutalistCard className="size-fit -rotate-2 bg-green-200 px-3.5 py-1 text-sm duration-300 hover:rotate-3">
              <FaPaw className="text-white" style={{ stroke: "black", strokeWidth: 20 }} />
              <h2>Gallery</h2>
            </BrutalistCard>
            <p className="text-2xl font-semibold md:text-4xl">
              Highlight <span className="mt-2 inline-block size-fit -rotate-3 border-3 border-dashed border-red-500 px-2 text-red-400">Moment</span>{" "}
              Para Keonks
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 md:grid-cols-3">
            <BrutalistCard className="rotate-[0.8deg] p-2 md:col-span-2">
              <div className="relative min-h-50 w-full border-black md:min-h-80">
                <Image src="/images/gallery/gallery-1.webp" alt="Gallery Image" fill priority className="object-cover" />
              </div>
            </BrutalistCard>
            <BrutalistCard className="h-fit -rotate-[0.8deg] p-2">
              <div className="relative min-h-50 w-full border-black md:min-h-70">
                <Image src="/images/gallery/gallery-2.webp" alt="Gallery Image" fill priority className="object-cover" />
              </div>
            </BrutalistCard>
            <BrutalistCard className="h-fit rotate-[1.5deg] p-2">
              <div className="relative min-h-50 w-full border-black md:min-h-80">
                <Image src="/images/gallery/gallery-3.webp" alt="Gallery Image" fill priority className="object-cover" />
              </div>
            </BrutalistCard>
            <BrutalistCard className="-mr-1 h-fit -rotate-[1.2deg] p-2">
              <div className="relative min-h-45 w-full border-black md:min-h-55">
                <Image src="/images/gallery/gallery-5.webp" alt="Gallery Image" fill priority className="object-cover" />
              </div>
            </BrutalistCard>
            <BrutalistCard className="h-fit rotate-[0.8deg] p-2">
              <div className="relative min-h-50 w-full border-black md:min-h-78">
                <Image src="/images/gallery/gallery-4.webp" alt="Gallery Image" fill priority className="object-cover" />
              </div>
            </BrutalistCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
