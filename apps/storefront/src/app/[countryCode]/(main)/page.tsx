import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Musfi — Modest Fashion | Hijabs, Abayas & More",
  description: "Discover premium hijabs, abayas, and modest clothing crafted for the modern woman. Free shipping across India.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({ fields: "id, handle, title" })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />

      {/* Editorial promise strip */}
      <div style={{ background: "var(--pearl-surface)", borderBottom: "1px solid var(--pearl-line)" }}>
        <div className="content-container py-8">
          <div className="grid grid-cols-1 small:grid-cols-3 gap-6 text-center">
            {[
              { icon: "✦", title: "Premium Fabric", desc: "Breathable, high-quality materials sourced with care" },
              { icon: "⬦", title: "Modest by Design", desc: "Every piece crafted to honor your personal style" },
              { icon: "◈", title: "Made in India", desc: "Supporting local artisans, shipped across the country" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-2 px-4">
                <span style={{ fontSize: 18, color: "var(--pearl-accent)" }}>{icon}</span>
                <p
                  className="font-display"
                  style={{ fontSize: 14, fontWeight: 500, color: "var(--pearl-ink)", letterSpacing: "-0.01em" }}
                >
                  {title}
                </p>
                <p style={{ fontSize: 12, color: "var(--pearl-muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <ul className="flex flex-col">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>

      {/* Footer editorial quote */}
      <div
        className="content-container py-20 text-center"
        style={{ borderTop: "1px solid var(--pearl-line)" }}
      >
        <p
          className="font-display italic"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            color: "var(--pearl-muted)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.4,
          }}
        >
          "Modesty is not a limitation — it is an expression of beauty."
        </p>
        <div
          style={{ width: 40, height: 1, background: "var(--pearl-accent)", margin: "20px auto 0", opacity: 0.6 }}
        />
      </div>
    </>
  )
}
