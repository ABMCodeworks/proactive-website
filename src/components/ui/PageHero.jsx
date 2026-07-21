import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, body, image, imageAlt, position = "center" }) {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#3f473a]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />

      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1480px] items-end px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl bg-[#ecebe7]/96 px-7 py-10 text-[#3f473a] sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#5f6858]">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#596258] sm:text-lg">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}
