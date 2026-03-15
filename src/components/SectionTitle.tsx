type Props = {
  en: string;
  ja: string;
  align?: "left" | "center";
  color?: "dark" | "white";
};

export default function SectionTitle({
  en,
  ja,
  align = "center",
  color = "dark",
}: Props) {
  const textColor = color === "white" ? "text-white" : "text-gray-900";
  const subColor = color === "white" ? "text-gray-300" : "text-gray-500";
  const lineColor = color === "white" ? "bg-white" : "bg-primary";
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-12`}>
      <h2
        className={`section-title-en text-3xl md:text-4xl ${textColor} mb-2`}
      >
        {en}
      </h2>
      <p className={`text-sm ${subColor} mb-4`}>{ja}</p>
      <div
        className={`w-12 h-0.5 ${lineColor} ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
