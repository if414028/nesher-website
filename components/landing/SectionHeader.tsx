import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold text-[#6D28D9]">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-pretty text-base leading-8 text-[#6B7280] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
