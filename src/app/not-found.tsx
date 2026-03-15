import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="section-title-en text-8xl text-primary mb-4">404</h1>
        <p className="text-xl font-bold text-gray-800 mb-2">
          ページが見つかりません
        </p>
        <p className="text-gray-500 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-light transition-colors tracking-wider text-sm"
        >
          トップページへ戻る
        </Link>
      </div>
    </section>
  );
}
