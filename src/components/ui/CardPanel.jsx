export default function CardPanel({ children, className = "" }) {
  return (
    <div
      className={`rounded-[1.8rem] border border-black/10 bg-white/25 p-8 shadow-lg shadow-black/5 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
