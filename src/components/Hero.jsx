function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-yellow-400/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-red-700">
            Lovin' what's new
          </h1>
          <p className="mt-4 text-lg text-red-900/80 max-w-xl">
            Explore craveable burgers, crispy chicken, world-famous fries and sweet treats.
            This is a playful, unofficial demo site for showcasing UI and API features.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#featured" className="px-5 py-3 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition">
              See Featured
            </a>
            <a href="#menu" className="px-5 py-3 rounded-full bg-yellow-300 text-red-800 font-semibold shadow hover:bg-yellow-400 transition">
              Browse Menu
            </a>
          </div>
          <p className="mt-3 text-xs text-red-900/60">McDonald's® is a registered trademark. This is a non-commercial demo.</p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&q=80&auto=format&fit=crop"
            alt="Big Mac and fries"
            className="rounded-2xl shadow-2xl ring-8 ring-yellow-300/40"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-yellow-200">
            <p className="font-bold text-red-700">Big Mac Meal</p>
            <p className="text-sm text-red-900/70">Two patties, special sauce, fries and a drink</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
