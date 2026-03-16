type Props = {
  en: string;
  ja: string;
};

export default function SectionHeading({ en, ja }: Props) {
  return (
    <div className="section-heading">
      <h2 className="section-heading-en">{en}</h2>
      <p className="section-heading-ja">{ja}</p>
      <div className="section-heading-line" />
    </div>
  );
}
