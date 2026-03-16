import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "COMPANY",
  description:
    "株式会社NAGARAの企業情報。介護現場のDXを推進するスタートアップ。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社NAGARA（NAGARA, Inc.）" },
  { label: "代表取締役", value: "岡田一輝 （Itsuki Okada）" },
  { label: "設立日", value: "2025年 7月 1日" },
  {
    label: "所在地",
    value: "〒466-0064\n愛知県名古屋市昭和区鶴舞 1丁目2-32 STATION Ai",
    hasMap: true,
  },
  { label: "事業内容", value: "介護ITサービス事業" },
  { label: "資本金", value: "500,000 円" },
  {
    label: "ご連絡先",
    value: "代表メールアドレス：　itsuki.okada@nagarainc.co.jp",
  },
];

const members = [
  {
    role: "CEO",
    name: "岡田一輝",
    nameEn: "Itsuki Okada",
    photo: "/images/ceo-photo.webp",
  },
  {
    role: "CTO",
    name: "野﨑春太郎",
    nameEn: "Shuntaro Nozaki",
    photo: null,
  },
  {
    role: "CSO",
    name: "酒井優聖",
    nameEn: "Yusei Sakai",
    photo: null,
  },
];

const mentors = [
  {
    role: "メンター",
    name: "竹下康平",
    nameEn: "Kohei Takeshita",
    description:
      "株式会社ビーブリッド代表取締役　／一般社団法人日本ケアテック協会 事務局長",
    photo: null,
  },
];

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "COMPANY" }]} />

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionHeading en="Company" ja="会社概要" />

          <table className="company-table">
            <tbody>
              {companyInfo.map((item, i) => (
                <tr key={i}>
                  <th>{item.label}</th>
                  <td>
                    <span className="whitespace-pre-line">{item.value}</span>
                    {item.hasMap && (
                      <a
                        href="https://maps.google.com/?q=STATION+Ai+名古屋"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-[13px] ml-4 hover:underline"
                      >
                        MAP
                        <span className="material-icons text-[16px]">
                          keyboard_arrow_right
                        </span>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Member */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionHeading en="Member" ja="役員紹介" />

          <div className="space-y-16">
            {members.map((member, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Photo */}
                <div className="w-[200px] h-[200px] rounded-lg overflow-hidden bg-bg-gray shrink-0">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-muted">
                      <span className="material-icons text-[64px]">
                        person
                      </span>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div>
                  <p className="text-primary font-bold text-[14px] font-[Lato] tracking-wider mb-1">
                    {member.role}
                  </p>
                  <p className="text-[28px] font-bold text-text-dark">
                    {member.name}
                    <span className="text-[14px] font-normal text-text-light ml-3">
                      {member.nameEn}
                    </span>
                  </p>
                </div>
              </div>
            ))}

            {/* Mentors */}
            {mentors.map((mentor, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-[200px] h-[200px] rounded-lg overflow-hidden bg-bg-gray shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-text-muted">
                    <span className="material-icons text-[64px]">person</span>
                  </div>
                </div>
                <div>
                  <p className="text-text-light text-[14px] mb-1">
                    {mentor.role}
                  </p>
                  <p className="text-[28px] font-bold text-text-dark">
                    {mentor.name}
                    <span className="text-[14px] font-normal text-text-light ml-3">
                      {mentor.nameEn}
                    </span>
                  </p>
                  <p className="text-[13px] text-text-light mt-2">
                    {mentor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
