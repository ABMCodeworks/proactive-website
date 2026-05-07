export default function SectionHeader({ eyebrow, title, body }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black text-[#5f6858] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-8 text-stone-700">{body}</p>
    </div>
  );
}
