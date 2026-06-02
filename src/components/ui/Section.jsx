export default function Section({
  children,
  className = "",
  innerClassName = "",
}) {
  return (
    <section className={`px-5 py-16 sm:px-8 lg:px-10 ${className}`}>
      <div className={`mx-auto w-full max-w-[1600px] ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
