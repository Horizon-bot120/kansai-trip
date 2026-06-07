import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { highlights } from "../data/trip";

const toneRing: Record<string, string> = {
  ajisai: "#6c7bb5",
  matcha: "#7a8c5a",
  lamp: "#e0a060",
  mist: "#4a6b7c",
};

function imgUrl(prompt: string, size: string) {
  return `https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;
}

export default function Highlights() {
  return (
    <section id="highlights" className="bg-rainnight relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="HIGHLIGHTS"
          title="六个独创玩法"
          desc="不是排行榜上的人气王，而是为这趟梅雨之旅精挑的「只此一次」体验。"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.article
              key={h.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group glass overflow-hidden rounded-3xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={imgUrl(h.imagePrompt, h.imageSize)}
                  alt={h.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                <span className="absolute left-4 top-4 text-3xl drop-shadow-lg">{h.emoji}</span>
              </div>

              <div className="p-6">
                <h3
                  className="font-mincho text-xl font-bold text-paper"
                  style={{ textDecorationColor: toneRing[h.tone] }}
                >
                  {h.title}
                </h3>
                <p className="font-zen mt-2 text-sm leading-relaxed text-paper/70">{h.desc}</p>
                <div
                  className="mt-4 rounded-xl px-3 py-2.5"
                  style={{ backgroundColor: `${toneRing[h.tone]}1a` }}
                >
                  <p
                    className="font-zen text-xs leading-relaxed"
                    style={{ color: toneRing[h.tone] }}
                  >
                    <span className="font-bold">为何独特 · </span>
                    {h.whyUnique}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
