const Hero = () => {
  return (
    <section style={{ background: "var(--pearl-bg)" }}>

      {/* ── Top editorial strip ─────────────────────────────── */}
      <div
        className="w-full flex items-center justify-center gap-6 py-2 text-center text-xs tracking-widest uppercase"
        style={{
          background: "var(--pearl-ink)",
          color: "var(--pearl-accent)",
          letterSpacing: "0.22em",
          fontSize: 10,
          fontWeight: 500,
        }}
      >
        <span>New Arrivals — Ramadan Edit 2026</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span>Free Shipping on orders above ₹999</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span>Crafted in India</span>
      </div>

      {/* ── Main hero — editorial split ────────────────────── */}
      <div className="content-container flex flex-col small:flex-row min-h-[88vh] small:min-h-[80vh]">

        {/* Left — text panel */}
        <div
          className="flex-1 flex flex-col justify-center py-20 small:py-0 small:pr-16"
          style={{ maxWidth: 560 }}
        >
          <div
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--pearl-accent)", letterSpacing: "0.24em", fontWeight: 500 }}
          >
            Est. Bengaluru · 2024
          </div>

          <h1
            className="font-display leading-tight mb-6"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 400,
              color: "var(--pearl-ink)",
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
            }}
          >
            Grace in
            <br />
            <em style={{ color: "var(--pearl-accent)", fontStyle: "italic" }}>Every</em>
            {" "}Drape.
          </h1>

          <p
            className="mb-10 leading-relaxed"
            style={{
              fontSize: 15,
              color: "var(--pearl-muted)",
              maxWidth: 420,
              lineHeight: 1.72,
            }}
          >
            Premium hijabs, abayas and modest clothing — curated for the modern woman who values grace, comfort and timeless style.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/in/store"
              className="transition-all duration-200 hover:opacity-85"
              style={{
                background: "var(--pearl-ink)",
                color: "var(--pearl-bg)",
                padding: "14px 32px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Shop Collection
            </a>
            <a
              href="/in/store"
              className="transition-all duration-200 hover:opacity-75"
              style={{
                border: "1px solid var(--pearl-accent)",
                color: "var(--pearl-ink)",
                padding: "14px 32px",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Our Story
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex gap-10 mt-14 pt-10"
            style={{ borderTop: "1px solid var(--pearl-line)" }}
          >
            {[
              ["500+", "Styles"],
              ["100%", "Breathable"],
              ["Free", "Returns"],
            ].map(([val, label]) => (
              <div key={label}>
                <div
                  className="font-display"
                  style={{ fontSize: 22, fontWeight: 500, color: "var(--pearl-accent)" }}
                >
                  {val}
                </div>
                <div style={{ fontSize: 11, color: "var(--pearl-muted)", marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative image panel */}
        <div
          className="flex-1 flex items-center justify-center relative overflow-hidden"
          style={{
            background: "var(--pearl-surface)",
            minHeight: 420,
          }}
        >
          {/* Islamic geometric pattern SVG */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.07]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="geo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="#a98147" strokeWidth="0.8" />
                <circle cx="20" cy="20" r="6" fill="none" stroke="#a98147" strokeWidth="0.5" />
                <path d="M20 14 L26 20 L20 26 L14 20 Z" fill="none" stroke="#a98147" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#geo)" />
          </svg>

          {/* Central monogram */}
          <div className="relative z-10 flex flex-col items-center text-center select-none">
            <div
              className="font-display italic"
              style={{
                fontSize: 120,
                lineHeight: 1,
                color: "var(--pearl-accent)",
                opacity: 0.18,
                fontWeight: 400,
                letterSpacing: "-0.04em",
              }}
            >
              م
            </div>
            <div
              className="font-display tracking-widest uppercase"
              style={{
                fontSize: 13,
                color: "var(--pearl-muted)",
                letterSpacing: "0.32em",
                marginTop: -16,
              }}
            >
              Musfi
            </div>
            <div
              style={{
                width: 40,
                height: 1,
                background: "var(--pearl-accent)",
                margin: "12px auto",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                fontSize: 10,
                color: "var(--pearl-muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Modest Fashion
            </div>
          </div>
        </div>
      </div>

      {/* ── Category pills ───────────────────────────────────── */}
      <div
        className="content-container py-10"
        style={{ borderTop: "1px solid var(--pearl-line)" }}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {["Hijabs", "Abayas", "Undercaps", "Dupattas", "Niqabs", "Bundles"].map((cat) => (
            <a
              key={cat}
              href="/in/store"
              className="transition-all duration-200 hover:opacity-75"
              style={{
                padding: "8px 20px",
                border: "1px solid var(--pearl-line)",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--pearl-muted)",
                textDecoration: "none",
                background: "var(--pearl-surface)",
                fontWeight: 500,
              }}
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero
