import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  return (
    <footer style={{ background: "var(--pearl-ink)", color: "var(--pearl-bg)" }}>
      {/* Thin gold accent top */}
      <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--pearl-accent), transparent)", opacity: 0.5 }} />

      <div className="content-container pt-16 pb-8">
        {/* Top row */}
        <div className="flex flex-col small:flex-row gap-12 small:gap-0 justify-between mb-16">

          {/* Brand column */}
          <div className="flex flex-col gap-4" style={{ maxWidth: 280 }}>
            <div>
              <p
                className="font-display tracking-widest uppercase"
                style={{ fontSize: 20, fontWeight: 400, color: "var(--pearl-bg)", letterSpacing: "0.12em" }}
              >
                Musfi
              </p>
              <p
                style={{ fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--pearl-accent)", marginTop: 2, fontWeight: 500 }}
              >
                Modest Fashion
              </p>
            </div>
            <p style={{ fontSize: 13, color: "rgba(245,240,232,0.5)", lineHeight: 1.7 }}>
              Premium hijabs, abayas and modest clothing crafted for the modern woman. Bengaluru, India.
            </p>
            <a
              href="mailto:care@musfi.in"
              style={{ fontSize: 12, color: "var(--pearl-accent)", textDecoration: "none", letterSpacing: "0.04em" }}
              className="hover:opacity-75 transition-opacity"
            >
              care@musfi.in
            </a>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 small:grid-cols-3 gap-10 text-sm">
            {/* Categories */}
            {productCategories && productCategories.length > 0 && (
              <div>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--pearl-accent)",
                    fontWeight: 500,
                    marginBottom: 14,
                  }}
                >
                  Shop
                </p>
                <ul className="flex flex-col gap-3">
                  {productCategories.slice(0, 6).map((c) => {
                    if (c.parent_category) return null
                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          href={`/categories/${c.handle}`}
                          className="transition-opacity hover:opacity-60"
                          style={{ fontSize: 13, color: "rgba(245,240,232,0.65)", textDecoration: "none" }}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Collections */}
            {collections && collections.length > 0 && (
              <div>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--pearl-accent)",
                    fontWeight: 500,
                    marginBottom: 14,
                  }}
                >
                  Collections
                </p>
                <ul className="flex flex-col gap-3">
                  {collections.slice(0, 5).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        href={`/collections/${c.handle}`}
                        className="transition-opacity hover:opacity-60"
                        style={{ fontSize: 13, color: "rgba(245,240,232,0.65)", textDecoration: "none" }}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Support */}
            <div>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--pearl-accent)",
                  fontWeight: 500,
                  marginBottom: 14,
                }}
              >
                Help
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "All Products", href: "/store" },
                  { label: "My Account", href: "/account" },
                  { label: "My Orders", href: "/account/orders" },
                  { label: "Contact Us", href: "mailto:care@musfi.in" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition-opacity hover:opacity-60"
                      style={{ fontSize: 13, color: "rgba(245,240,232,0.65)", textDecoration: "none" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col small:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(169,129,71,0.2)" }}
        >
          <p style={{ fontSize: 12, color: "rgba(245,240,232,0.35)" }}>
            © {new Date().getFullYear()} Musfi. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(245,240,232,0.25)" }}>
            Made with care in Bengaluru, India
          </p>
        </div>
      </div>
    </footer>
  )
}
