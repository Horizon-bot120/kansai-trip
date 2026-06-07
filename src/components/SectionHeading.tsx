import { motion } from "framer-motion";

interface Props {
  kicker: string;
  title: string;
  desc?: string;
}

export default function SectionHeading({ kicker, title, desc }: Props) {
  return (
    <div className="mb-14 text-center">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-zen mb-3 text-sm tracking-[0.4em] text-ajisai"
      >
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="font-mincho text-4xl font-bold text-paper md:text-5xl"
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-zen mx-auto mt-4 max-w-xl text-sm leading-relaxed text-paper/60"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}
