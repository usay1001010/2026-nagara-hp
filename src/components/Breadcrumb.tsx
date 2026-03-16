import Link from "next/link";

type Props = {
  items: { label: string; href?: string }[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <div className="breadcrumb">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center gap-2">
        <Link href="/" className="hover:text-primary">
          HOME
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="material-icons text-[16px]">
              keyboard_arrow_right
            </span>
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-light">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
