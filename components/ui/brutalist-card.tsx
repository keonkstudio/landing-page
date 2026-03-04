import { cn } from "@/lib/utils";

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function BrutalistCard({ children, className }: BrutalistCardProps) {
  return (
    <div className={cn("border-1.5 border-black bg-red-500", "shadow-[3.5px_3.5px_0_#000]", "hover:shadow-[3.5px_3.5px_0_#000]", className)}>
      {children}
    </div>
  );
}
