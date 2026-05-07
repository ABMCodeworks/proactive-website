export default function PageHero({ eyebrow, title, body }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-8 lg:pt-20">
      <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(255,255,255,0.28)),linear-gradient(135deg,#ecebe7_0%,#e5e4df_55%,#dddcd6_100%)] px-8 py-14 md:px-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black text-[#4f5849] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
          {body}
        </p>
      </div>
    </section>
  );
}
