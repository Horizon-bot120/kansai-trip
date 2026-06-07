import { useEffect, useState } from "react";
import { Menu, X, Umbrella } from "lucide-react";

const links = [
  { href: "#itinerary", label: "行程" },
  { href: "#map", label: "地图" },
  { href: "#highlights", label: "亮点" },
  { href: "#tips", label: "梅雨指南" },
  { href: "#budget", label: "预算" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", "itinerary", "map", "highlights", "tips", "budget"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-2 font-mincho text-lg font-bold text-paper">
          <Umbrella className="h-5 w-5 text-ajisai" />
          梅雨之间
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const id = l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`font-zen text-sm tracking-wide transition ${
                    active === id ? "text-lamp" : "text-paper/70 hover:text-paper"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="菜单"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="glass-strong mx-6 mt-3 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 font-zen text-sm text-paper/80 hover:bg-white/5 hover:text-lamp"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
