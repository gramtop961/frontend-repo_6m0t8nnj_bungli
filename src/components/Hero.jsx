import Spline from "@splinetool/react-spline";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-slate-900/60 dark:via-slate-900/30 dark:to-slate-900/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl py-24 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 dark:bg-slate-900/40 dark:border-slate-800/60 px-3 py-1 text-xs text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-cyan-500" />
            <span>Modern. Minimal. Fintech-ready.</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
            Elevate your checkout with a glass‑morphic experience
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            BlueCard is a clean ecommerce theme built for digital products and premium goods. Fast, elegant, and crafted with delightful 3D details.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#products"
              className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 transition shadow-sm"
            >
              Shop bestsellers
            </a>
            <a
              href="#features"
              className="inline-flex justify-center items-center px-5 py-3 rounded-xl border border-slate-300/80 bg-white/70 hover:bg-white dark:bg-slate-900/40 dark:border-slate-700 dark:hover:bg-slate-900 transition backdrop-blur text-slate-800 dark:text-slate-200"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
