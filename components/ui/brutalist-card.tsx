import { cn } from "@/lib/utils";

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function BrutalistCard({ children, className }: BrutalistCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-2 py-1",
        "border-2 border-black bg-red-500",
        "shadow-[3.5px_3.5px_0_#000]",
        "hover:shadow-[3.5px_3.5px_0_#000]",
        className,
      )}
    >
      {children}
    </div>
  );
}
