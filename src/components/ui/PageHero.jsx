import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, body, image, imageAlt, position = "center", align = "left", compact = true, narrow = false, edge = true }) {
  return (
    <section className="isolate bg-[#3f473a] sm:relative sm:min-h-[620px] sm:overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="h-[340px] w-full object-cover sm:absolute sm:inset-0 sm:h-full"
        style={{ objectPosition: position }}
      />

      <div className={`relative z-10 mx-auto flex w-full items-end sm:min-h-[620px] ${edge ? "max-w-none p-0" : "max-w-[1480px] sm:px-8 lg:px-10"} ${align === "right" ? "justify-end" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className={`${compact ? `${narrow ? "max-w-none sm:max-w-sm" : "max-w-none sm:max-w-lg"} px-5 py-5 sm:px-6 sm:py-6` : "max-w-none px-7 py-10 sm:max-w-3xl sm:px-10 sm:py-12 lg:px-14 lg:py-14"} ${edge ? `w-full sm:absolute sm:bottom-0 ${align === "right" ? "sm:right-0" : "sm:left-0"}` : ""} bg-[#ecebe7]/90 text-[#3f473a] backdrop-blur-[2px]`}
        >
          <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#5f6858]">{eyebrow}</p>
          <h1 className={`font-serif leading-[0.98] tracking-[-0.035em] ${compact ? `mt-3 ${narrow ? "max-w-sm" : "max-w-lg"} text-3xl sm:text-4xl` : "mt-5 max-w-3xl text-5xl sm:text-6xl lg:text-7xl"}`}>
            {title}
          </h1>
          <p className={`${compact ? `mt-3 ${narrow ? "max-w-sm" : "max-w-lg"} text-sm leading-6` : "mt-7 max-w-2xl text-base leading-8 sm:text-lg"} text-[#596258]`}>{body}</p>
        </motion.div>
      </div>
    </section>
  );
}
