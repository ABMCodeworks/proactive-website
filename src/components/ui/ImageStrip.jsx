export default function ImageStrip({ images = [] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {images.map((image) => (
        <div
          key={`${image.src}-${image.title || image.alt}`}
          className={[
            "group relative min-h-[260px] overflow-hidden rounded-[2rem]",
            "border border-black/10 bg-[#d6d4cd] shadow-xl shadow-black/10",
            image.large ? "md:col-span-2" : "",
            image.tall ? "md:min-h-[420px]" : "",
          ].join(" ")}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="h-full min-h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />

          {image.label || image.title ? (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-6">
              {image.label ? (
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  {image.label}
                </p>
              ) : null}

              {image.title ? (
                <h3 className="mt-2 text-2xl font-black leading-tight text-white">
                  {image.title}
                </h3>
              ) : null}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
