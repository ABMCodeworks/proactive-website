export default function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white/30 p-4 transition hover:bg-white/45">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5f6858]/15 text-[#5f6858]">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          {label}
        </div>

        <div className="mt-1 text-base font-medium text-stone-900">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
