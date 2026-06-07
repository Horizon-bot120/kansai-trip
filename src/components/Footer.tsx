import { ArrowUp, Umbrella } from "lucide-react";
import { TRIP_META } from "../data/trip";

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 px-6 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <Umbrella className="h-8 w-8 text-ajisai" />
        <p className="font-mincho max-w-lg text-xl leading-relaxed text-paper/80">
          “{TRIP_META.tagline}”
        </p>
        <p className="font-zen text-sm text-paper/50">
          {TRIP_META.title} · {TRIP_META.subtitle} — {TRIP_META.dateRange}
        </p>

        <a
          href="#hero"
          className="glass mt-2 flex items-center gap-2 rounded-full px-5 py-2.5 font-zen text-sm text-paper/70 transition hover:text-lamp"
        >
          <ArrowUp className="h-4 w-4" />
          回到序章
        </a>

        <p className="font-zen mt-4 text-xs text-paper/30">
          行程为独创规划方案，实际营业时间/预约请以各景点官网为准 · 梅雨季出行注意气象厅大雨警报
        </p>
      </div>
    </footer>
  );
}
