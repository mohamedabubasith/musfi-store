const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 40%, #1a0a2e 100%)" }}>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20" style={{
        background: "radial-gradient(ellipse at right, #c9a96e 0%, transparent 70%)"
      }} />

      <div className="relative z-10 content-container flex flex-col small:flex-row items-center justify-between min-h-[80vh] py-20 gap-12">
        {/* Left content */}
        <div className="flex-1 text-center small:text-left">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(201,169,110,0.1)" }}>
            <span className="text-amber-300 text-sm font-medium tracking-widest uppercase">New Arrivals 2026</span>
          </div>

          <h1 className="text-4xl small:text-6xl font-bold text-white leading-tight mb-4">
            Elegance in
            <span className="block" style={{ color: "#c9a96e" }}>Every Drape</span>
          </h1>

          <p className="text-white/60 text-base small:text-lg max-w-md mb-8 leading-relaxed">
            Discover our curated collection of premium hijabs and modest fashion — crafted for the modern woman who values grace, comfort and style.
          </p>

          <div className="flex flex-col xsmall:flex-row gap-4 items-center small:items-start">
            <a href="/in/store"
              className="font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 text-white"
              style={{ background: "linear-gradient(135deg, #c9a96e, #a07840)" }}>
              Shop Collection
            </a>
            <a href="/in/categories"
              className="border border-white/20 hover:border-amber-400/50 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200">
              Browse Categories
            </a>
          </div>

          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
            {[["500+", "Styles"], ["Premium", "Quality"], ["Free", "Returns"]].map(([val, label]) => (
              <div key={label}>
                <div className="text-xl font-bold" style={{ color: "#c9a96e" }}>{val}</div>
                <div className="text-white/40 text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right decorative */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-64 h-64 small:w-80 small:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 animate-pulse" />
            <div className="absolute inset-4 rounded-full border border-amber-400/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">✦</div>
                <div className="text-white/40 text-sm tracking-widest uppercase">Musfi</div>
                <div className="text-white font-semibold tracking-widest uppercase">Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
