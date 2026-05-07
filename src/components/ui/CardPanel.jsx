export default function CardPanel({ children, className = "" }) {
  return (
    <div
      className={`rounded-[1.8rem] border border-black/10 bg-white/25 p-8 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
