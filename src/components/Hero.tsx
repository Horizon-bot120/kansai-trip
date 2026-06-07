import { motion } from "framer-motion";
import { ChevronDown, MapPin, CalendarDays, CloudRain } from "lucide-react";
import RainCanvas from "./RainCanvas";
import { TRIP_META } from "../data/trip";

const stat = [
  { icon: CalendarDays, label: "天行程", value: TRIP_META.days },
  { icon: MapPin, label: "座城市", value: TRIP_META.cities },
  { icon: CloudRain, label: "梅雨限定", value: "雨季" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-rainnight grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <RainCanvas />

      {/* 远山剪影 */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full opacity-30"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,160 C220,80 360,180 560,120 C760,60 900,170 1120,110 C1280,70 1380,150 1440,120 L1440,220 L0,220 Z"
          fill="#0e1822"
        />
        <path
          d="M0,190 C260,140 420,200 640,160 C880,118 1040,200 1260,160 C1360,142 1410,180 1440,170 L1440,220 L0,220 Z"
          fill="#16242f"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-zen mb-6 tracking-[0.5em] text-mist"
        >
          KANSAI · {TRIP_META.titleEn}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-mincho text-6xl font-extrabold leading-none tracking-wide text-paper sm:text-7xl md:text-8xl"
        >
          {TRIP_META.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="my-6 h-px w-40 bg-gradient-to-r from-transparent via-ajisai to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-mincho text-2xl text-paper/90 md:text-3xl"
        >
          {TRIP_META.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass mt-8 rounded-full px-7 py-2.5 font-zen text-lg tracking-widest text-lamp"
        >
          {TRIP_META.dateRange}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="font-zen mt-7 max-w-md text-sm leading-relaxed text-paper/60"
        >
          {TRIP_META.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex gap-4"
        >
          {stat.map((s) => (
            <div
              key={s.label}
              className="glass flex w-24 flex-col items-center gap-1 rounded-2xl py-4"
            >
              <s.icon className="h-5 w-5 text-ajisai" />
              <span className="font-mincho text-2xl font-bold text-paper">{s.value}</span>
              <span className="font-zen text-[11px] text-paper/50">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#itinerary"
        className="absolute bottom-8 z-10 flex flex-col items-center gap-1 text-paper/50 transition hover:text-paper"
        aria-label="向下滚动查看行程"
      >
        <span className="font-zen text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="h-6 w-6 animate-bobArrow" />
      </a>
    </section>
  );
}
