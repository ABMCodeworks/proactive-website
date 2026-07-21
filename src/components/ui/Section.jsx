export default function Section({ children, className = "", innerClassName = "" }) {
  return (
    <section className={`px-5 py-14 sm:px-8 lg:px-10 lg:py-20 ${className}`}>
      <div className={`mx-auto w-full max-w-[1480px] ${innerClassName}`}>{children}</div>
    </section>
  );
}
