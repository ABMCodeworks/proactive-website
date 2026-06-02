export default function SectionHeader({ eyebrow, title, body }) {
  return (
    <div className="mb-10 max-w-5xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f6858]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black leading-tight text-[#5f6858] md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {body ? (
        <p className="mt-4 max-w-4xl text-lg leading-8 text-stone-700">
          {body}
        </p>
      ) : null}
    </div>
  );
}
