import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/60 border-b border-slate-200/60 dark:bg-slate-900/40 dark:border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 shadow-inner" />
          <span className="font-semibold text-slate-900 dark:text-white tracking-tight">BlueCard</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Features</a>
          <a href="#products" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Products</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Pricing</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition">
            <Search size={18} />
            <span className="hidden md:inline">Search</span>
          </button>
          <button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition">
            <User size={18} />
          </button>
          <button className="relative p-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 transition">
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-400 text-slate-900 font-semibold">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
