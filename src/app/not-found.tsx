import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function NotFound() {
  return (
    <>
      <Breadcrumb items={[{ label: "404" }]} />

      <section className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="flex flex-col md:flex-row items-center gap-10 px-6">
          <Image
            src="/images/hero-logo.webp"
            alt="NAGARA"
            width={300}
            height={225}
          />
          <h1 className="text-[36px] md:text-[48px] font-bold text-text-dark font-[Lato]">
            Under
            <br />
            Construction
          </h1>
        </div>
      </section>
    </>
  );
}
