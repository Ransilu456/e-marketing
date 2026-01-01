
interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}


export default function SectionHeading({ badge, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
      {badge && (
        <span className="inline-block py-1.5 px-4 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-(--color-primary) uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-zinc-900 mb-6">{title}</h2>
      {subtitle && <p className="text-xl text-zinc-500 font-normal leading-relaxed max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}