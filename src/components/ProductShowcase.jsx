const products = [
  {
    id: 1,
    name: "Aurora Card Case",
    price: "$49",
    tag: "New",
    colorA: "from-cyan-400",
    colorB: "to-blue-600",
  },
  {
    id: 2,
    name: "Nebula Wallet",
    price: "$79",
    tag: "Bestseller",
    colorA: "from-fuchsia-400",
    colorB: "to-purple-700",
  },
  {
    id: 3,
    name: "Prism Keychain",
    price: "$19",
    tag: "Popular",
    colorA: "from-emerald-400",
    colorB: "to-teal-700",
  },
  {
    id: 4,
    name: "Glass Dock",
    price: "$129",
    tag: "Limited",
    colorA: "from-amber-400",
    colorB: "to-orange-600",
  },
  {
    id: 5,
    name: "Wave Sleeve",
    price: "$59",
    tag: "New",
    colorA: "from-sky-400",
    colorB: "to-indigo-600",
  },
  {
    id: 6,
    name: "Ion Charger",
    price: "$39",
    tag: "Hot",
    colorA: "from-rose-400",
    colorB: "to-red-700",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Featured products</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Curated pieces that pair perfectly with a modern setup.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-slate-300/80 bg-white/70 hover:bg-white dark:bg-slate-900/40 dark:border-slate-700 dark:hover:bg-slate-900 transition backdrop-blur text-slate-800 dark:text-slate-200"
          >
            View all
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/40 backdrop-blur overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className={`h-52 w-full bg-gradient-to-br ${p.colorA} ${p.colorB}`} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-slate-900 dark:text-white">{p.name}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{p.price}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-flex text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {p.tag}
                  </span>
                  <button className="inline-flex px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 transition">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-slate-50/0 via-white/10 to-white/0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
