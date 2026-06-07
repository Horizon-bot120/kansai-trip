import { motion } from "framer-motion";
import {
  Thermometer,
  CloudDrizzle,
  Droplets,
  Umbrella,
  Footprints,
  Shirt,
  Backpack,
  Package,
  Sun,
  Lightbulb,
  Smartphone,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { tips } from "../data/trip";

const packIcons: Record<string, LucideIcon> = {
  umbrella: Umbrella,
  footprints: Footprints,
  shirt: Shirt,
  backpack: Backpack,
  package: Package,
  sun: Sun,
};

export default function Tips() {
  return (
    <section id="tips" className="relative bg-ink-800 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="RAINY SEASON GUIDE"
          title="梅雨生存指南"
          desc={tips.weather.note}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* 天气卡 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-7"
          >
            <h3 className="font-mincho mb-5 text-xl font-bold text-ajisai">关西梅雨天气</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CloudDrizzle className="h-5 w-5 text-mist" />
                <span className="font-zen text-sm text-paper/80">{tips.weather.season}</span>
              </li>
              <li className="flex items-center gap-3">
                <Thermometer className="h-5 w-5 text-lamp" />
                <span className="font-zen text-sm text-paper/80">气温 {tips.weather.temp}</span>
              </li>
              <li className="flex items-center gap-3">
                <Droplets className="h-5 w-5 text-ajisai" />
                <span className="font-zen text-sm text-paper/80">{tips.weather.rainChance}</span>
              </li>
            </ul>
          </motion.div>

          {/* 打包清单 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-3xl p-7 lg:col-span-2"
          >
            <h3 className="font-mincho mb-5 text-xl font-bold text-matcha">雨季打包清单</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {tips.packList.map((p) => {
                const Icon = packIcons[p.icon] ?? Package;
                return (
                  <div
                    key={p.label}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-3.5"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-matcha" />
                    <div>
                      <p className="font-zen text-sm font-bold text-paper">{p.label}</p>
                      <p className="font-zen text-xs text-paper/50">{p.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 雨天小技巧 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-7 lg:col-span-2"
          >
            <h3 className="font-mincho mb-5 flex items-center gap-2 text-xl font-bold text-lamp">
              <Lightbulb className="h-5 w-5" />
              雨天 & 省钱小技巧
            </h3>
            <ul className="space-y-3">
              {tips.hacks.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mincho shrink-0 text-lamp">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-zen text-sm leading-relaxed text-paper/80">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 实用 App */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-3xl p-7"
          >
            <h3 className="font-mincho mb-5 flex items-center gap-2 text-xl font-bold text-mist">
              <Smartphone className="h-5 w-5" />
              实用 App / 票券
            </h3>
            <ul className="space-y-3">
              {tips.apps.map((a) => (
                <li key={a.name} className="border-l-2 border-mist/40 pl-3">
                  <p className="font-zen text-sm font-bold text-paper">{a.name}</p>
                  <p className="font-zen text-xs text-paper/50">{a.use}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 关西温泉延伸 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-7 lg:col-span-3"
          >
            <h3 className="font-mincho mb-1 flex items-center gap-2 text-xl font-bold text-ajisai">
              <Waves className="h-5 w-5" />
              想泡温泉？关西可达汤乡
            </h3>
            <p className="font-zen mb-5 text-xs text-paper/50">
              梅雨阴雨天最适合泡汤。下面几处都能从关西出发，可挑一处加进行程或单独延长一晚。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tips.onsen.map((o) => (
                <div
                  key={o.name}
                  className="flex flex-col rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <p className="font-mincho text-lg font-bold text-paper">{o.name}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-ajisai/15 px-2 py-0.5 font-zen text-[11px] text-ajisai">
                      {o.area}
                    </span>
                    <span className="font-zen text-[11px] text-paper/45">{o.access}</span>
                  </div>
                  <p className="font-zen mt-3 text-xs leading-relaxed text-paper/70">
                    {o.feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
