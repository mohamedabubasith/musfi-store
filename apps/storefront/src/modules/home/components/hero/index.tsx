const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, #7c3aed 0%, transparent 50%),
                           radial-gradient(ellipse at 80% 20%, #4f46e5 0%, transparent 50%),
                           radial-gradient(ellipse at 60% 80%, #6d28d9 0%, transparent 40%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] text-center px-6 py-24">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-white/80 text-sm font-medium tracking-wide">New Collection 2026</span>
        </div>

        <h1 className="text-5xl small:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl">
          Dress to
          <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Express Yourself
          </span>
        </h1>

        <p className="text-white/60 text-lg small:text-xl max-w-xl mb-10 leading-relaxed">
          Discover handcrafted fashion that celebrates your individuality. Premium quality, modern design.
        </p>

        <div className="flex flex-col xsmall:flex-row gap-4 items-center">
          <a
            href="/in/store"
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
          >
            Shop Now
          </a>
          <a
            href="/in/collections"
            className="border border-white/30 hover:border-white/60 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10"
          >
            View Collections
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-20 border-t border-white/10 pt-10">
          {[
            { value: "500+", label: "Products" },
            { value: "10k+", label: "Happy Customers" },
            { value: "4.9★", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/40 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
