import { useState } from "react";
import { motion } from "framer-motion";
import { Sunrise, Sun, Moon, Sparkles, Umbrella, ChevronDown } from "lucide-react";
import type { DayPlan } from "../data/trip";

interface Props {
  plan: DayPlan;
  index: number;
}

const slots = [
  { key: "morning" as const, icon: Sunrise, label: "上午" },
  { key: "afternoon" as const, icon: Sun, label: "下午" },
  { key: "evening" as const, icon: Moon, label: "夜晚" },
];

export default function DayCard({ plan, index }: Props) {
  const [openRain, setOpenRain] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`relative flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"}`}
    >
      {/* 中轴节点 */}
      <div
        className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ring-ink-900 md:left-1/2"
        style={{ backgroundColor: plan.cityColor }}
      />

      <article
        className="glass ml-10 w-full rounded-3xl p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/30 md:ml-0 md:w-[calc(50%-2.5rem)]"
        style={{ borderTop: `2px solid ${plan.cityColor}55` }}
      >
        <header className="mb-4 flex items-start justify-between gap-3">
          <div>
            <span className="font-zen text-xs tracking-widest text-paper/50">
              DAY {plan.day} · {plan.date} {plan.weekday}
            </span>
            <h3 className="font-mincho mt-1 text-2xl font-bold text-paper">{plan.theme}</h3>
            <p className="font-zen text-xs italic text-paper/40">{plan.subtitle}</p>
          </div>
          <span
            className="shrink-0 rounded-full px-3 py-1 font-zen text-sm font-bold"
            style={{ backgroundColor: `${plan.cityColor}22`, color: plan.cityColor }}
          >
            {plan.city}
          </span>
        </header>

        <div className="space-y-3">
          {slots.map((s) => (
            <div key={s.key} className="flex gap-3">
              <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" />
              <p className="font-zen text-sm leading-relaxed text-paper/80">
                <span className="mr-1.5 text-xs text-paper/40">{s.label}</span>
                {plan[s.key]}
              </p>
            </div>
          ))}
        </div>

        {/* 独创标签 */}
        <div className="mt-4 flex flex-wrap gap-2">
          {plan.unique.map((u) => (
            <span
              key={u}
              className="inline-flex items-center gap-1 rounded-full bg-lamp/10 px-2.5 py-1 font-zen text-xs text-lamp"
            >
              <Sparkles className="h-3 w-3" />
              {u}
            </span>
          ))}
        </div>

        {/* 雨天 Plan B */}
        <button
          onClick={() => setOpenRain((v) => !v)}
          className="mt-4 flex w-full items-center justify-between rounded-xl bg-ajisai/10 px-3 py-2 font-zen text-xs text-ajisai transition hover:bg-ajisai/20"
        >
          <span className="flex items-center gap-1.5">
            <Umbrella className="h-3.5 w-3.5" />
            雨天 Plan B
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${openRain ? "rotate-180" : ""}`} />
        </button>
        {openRain && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="font-zen overflow-hidden px-3 pt-2 text-xs leading-relaxed text-paper/60"
          >
            {plan.rainPlanB}
          </motion.p>
        )}

        <p className="mt-4 border-t border-white/5 pt-3 font-zen text-xs text-paper/40">
          预估花费 ¥{plan.budget.toLocaleString()} / 人
        </p>
      </article>
    </motion.div>
  );
}
