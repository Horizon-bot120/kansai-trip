import { Plane } from "lucide-react";
import SectionHeading from "./SectionHeading";
import DayCard from "./DayCard";
import { days, RETURN_NOTE } from "../data/trip";

export default function Itinerary() {
  return (
    <section id="itinerary" className="bg-rainnight relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker="ITINERARY"
          title="七日行程时间轴"
          desc="自落地京都，到神户百万夜景收尾。每天都为梅雨准备了室内 Plan B，下雨也不慌。"
        />

        <div className="relative">
          {/* 垂直主轴 */}
          <div className="vline absolute left-4 top-0 h-full w-px md:left-1/2" />

          <div className="space-y-10">
            {days.map((plan, i) => (
              <DayCard key={plan.day} plan={plan} index={i} />
            ))}
          </div>

          {/* 返程节点 */}
          <div className="relative mt-10 flex md:justify-center">
            <div className="absolute left-4 top-5 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-paper/70 ring-4 ring-ink-900 md:left-1/2" />
            <div className="glass ml-10 flex items-center gap-3 rounded-2xl px-5 py-4 md:ml-0">
              <Plane className="h-5 w-5 text-paper/60" />
              <p className="font-zen text-sm text-paper/70">{RETURN_NOTE}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
