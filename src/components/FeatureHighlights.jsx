import { CreditCard, Shield, Truck, Star } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Seamless Payments",
    desc: "Optimized for quick, secure checkout with a premium feel.",
  },
  {
    icon: Shield,
    title: "Bank‑grade Security",
    desc: "Encrypted end‑to‑end with best‑in‑class standards.",
  },
  {
    icon: Truck,
    title: "Express Delivery",
    desc: "Fast global shipping and real‑time tracking.",
  },
  {
    icon: Star,
    title: "Loved by Customers",
    desc: "4.9/5 average rating from thousands of reviews.",
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Built for modern commerce</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Everything you need to sell products with confidence and style.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center shadow-inner">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-medium text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-600/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
