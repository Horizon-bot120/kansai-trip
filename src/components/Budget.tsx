import { motion } from "framer-motion";
import { Ticket, Wallet } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { days, budgetMeta } from "../data/trip";

export default function Budget() {
  const total = days.reduce((s, d) => s + d.budget, 0);
  const maxBudget = Math.max(...days.map((d) => d.budget));
  const rmb = Math.round((total / 1000) * 48);

  return (
    <section id="budget" className="bg-rainnight relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker="BUDGET & RHYTHM"
          title="预算与节奏"
          desc="以下为每人每日游玩花费估算（含门票/体验/餐食/市内交通，不含机票与住宿）。"
        />

        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          {/* 每日预算条 */}
          <div className="glass rounded-3xl p-7">
            <h3 className="font-mincho mb-6 text-lg font-bold text-paper">每日花费节奏</h3>
            <div className="space-y-4">
              {days.map((d, i) => (
                <div key={d.day} className="flex items-center gap-3">
                  <span className="font-zen w-14 shrink-0 text-xs text-paper/50">
                    D{d.day}·{d.city}
                  </span>
                  <div className="h-5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(d.budget / maxBudget) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                      className="flex h-full items-center justify-end rounded-full pr-2"
                      style={{
                        background: `linear-gradient(90deg, ${d.cityColor}66, ${d.cityColor})`,
                      }}
                    >
                      <span className="font-zen text-[10px] font-bold text-ink-900">
                        ¥{(d.budget / 1000).toFixed(1)}k
                      </span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-lamp" />
                <span className="font-zen text-sm text-paper/60">7 日游玩合计 / 人</span>
              </div>
              <div className="text-right">
                <p className="font-mincho text-3xl font-bold text-lamp">
                  ¥{total.toLocaleString()}
                </p>
                <p className="font-zen text-xs text-paper/50">≈ ¥{rmb.toLocaleString()} 人民币</p>
              </div>
            </div>
            <p className="font-zen mt-3 text-xs text-paper/40">{budgetMeta.exchangeNote}</p>
          </div>

          {/* 票券建议 */}
          <div className="glass rounded-3xl p-7">
            <h3 className="font-mincho mb-5 flex items-center gap-2 text-lg font-bold text-paper">
              <Ticket className="h-5 w-5 text-ajisai" />
              交通票券建议
            </h3>
            <ul className="space-y-4">
              {budgetMeta.ticketTips.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl bg-white/5 p-4 font-zen text-sm leading-relaxed text-paper/80"
                >
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
