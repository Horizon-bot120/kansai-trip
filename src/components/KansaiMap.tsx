import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { cityNodes, days } from "../data/trip";

// 城市连线顺序（按行程推进）
const routeOrder = ["名古屋", "京都", "宇治", "奈良", "大阪", "神户"];

export default function KansaiMap() {
  const [selected, setSelected] = useState<string>("名古屋");
  const node = cityNodes.find((c) => c.name === selected)!;
  const selectedDays = days.filter((d) => node.days.includes(d.day));

  const pathPoints = routeOrder
    .map((n) => cityNodes.find((c) => c.name === n)!)
    .map((c) => `${c.x},${c.y}`)
    .join(" ");

  return (
    <section id="map" className="relative bg-ink-800 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="MAP"
          title="关西漫游地图"
          desc="点击城市节点，查看那座城的行程精华。虚线是八日推进的足迹。"
        />

        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
          {/* 地图 */}
          <div className="glass rounded-3xl p-4">
            <svg viewBox="0 0 640 480" className="h-auto w-full">
              {/* 海/底纹 */}
              <defs>
                <radialGradient id="sea" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#1d3340" />
                  <stop offset="100%" stopColor="#13212c" />
                </radialGradient>
              </defs>
              <rect width="640" height="480" rx="20" fill="url(#sea)" />

              {/* 抽象陆地块 */}
              <path
                d="M90,250 C140,150 280,90 400,120 C520,150 580,230 560,320 C540,410 420,440 300,420 C180,400 70,360 90,250 Z"
                fill="#26404f"
                opacity="0.55"
              />

              {/* 路线虚线 */}
              <motion.polyline
                points={pathPoints}
                fill="none"
                stroke="#e0a060"
                strokeWidth="2.5"
                strokeDasharray="2 9"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* 城市节点 */}
              {cityNodes.map((c) => {
                const isSel = c.name === selected;
                return (
                  <g
                    key={c.name}
                    onClick={() => setSelected(c.name)}
                    className="cursor-pointer"
                  >
                    {isSel && (
                      <circle cx={c.x} cy={c.y} r="20" fill={c.color} opacity="0.18">
                        <animate
                          attributeName="r"
                          values="14;24;14"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={isSel ? 9 : 6.5}
                      fill={c.color}
                      stroke="#eef2f0"
                      strokeWidth={isSel ? 2.5 : 1.2}
                      className="transition-all"
                    />
                    <text
                      x={c.x}
                      y={c.y - 16}
                      textAnchor="middle"
                      className="font-mincho"
                      fontSize={isSel ? 19 : 15}
                      fill={isSel ? "#eef2f0" : "#9fb4be"}
                      fontWeight="bold"
                    >
                      {c.name}
                    </text>
                    <text
                      x={c.x}
                      y={c.y + 26}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#9fb4be"
                      letterSpacing="2"
                    >
                      {c.romaji}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 城市详情 */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-7"
            style={{ borderLeft: `3px solid ${node.color}` }}
          >
            <span className="font-zen text-xs tracking-widest text-paper/40">
              {node.romaji}
            </span>
            <h3 className="font-mincho mt-1 text-3xl font-bold text-paper">{node.name}</h3>
            <p className="font-zen mt-1 text-sm text-paper/50">
              涉及第 {node.days.join(" · ")} 天
            </p>

            <div className="mt-6 space-y-5">
              {selectedDays.map((d) => (
                <div key={d.day}>
                  <p
                    className="font-mincho text-lg font-bold"
                    style={{ color: node.color }}
                  >
                    Day {d.day} · {d.theme}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {d.unique.map((u) => (
                      <span
                        key={u}
                        className="rounded-full bg-white/5 px-2.5 py-1 font-zen text-xs text-paper/70"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
