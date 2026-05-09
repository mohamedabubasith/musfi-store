import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header
        className="relative mx-auto duration-200"
        style={{
          background: "var(--pearl-bg)",
          borderBottom: "1px solid var(--pearl-line)",
          boxShadow: "0 1px 12px rgba(26,24,18,0.06)",
        }}
      >
        <nav
          className="content-container flex items-center justify-between w-full h-16"
          style={{ color: "var(--pearl-muted)" }}
        >
          {/* Left — hamburger / side menu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
          </div>

          {/* Center — wordmark */}
          <LocalizedClientLink
            href="/"
            className="flex flex-col items-center leading-none transition-opacity hover:opacity-75"
            data-testid="nav-store-link"
          >
            <span
              className="font-display tracking-[0.12em] uppercase"
              style={{ fontSize: 22, fontWeight: 500, color: "var(--pearl-ink)", letterSpacing: "0.14em" }}
            >
              Musfi
            </span>
            <span
              style={{
                fontSize: 9,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--pearl-accent)",
                fontWeight: 500,
                marginTop: 1,
              }}
            >
              Modest Fashion
            </span>
          </LocalizedClientLink>

          {/* Right — links + cart */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full text-sm" style={{ color: "var(--pearl-muted)" }}>
              <LocalizedClientLink
                className="transition-colors hover:text-[--pearl-ink]"
                href="/store"
                data-testid="nav-store-link"
                style={{ color: "var(--pearl-muted)" } as React.CSSProperties}
              >
                Shop
              </LocalizedClientLink>
              <LocalizedClientLink
                className="transition-colors hover:text-[--pearl-ink]"
                href="/account"
                data-testid="nav-account-link"
                style={{ color: "var(--pearl-muted)" } as React.CSSProperties}
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 text-sm"
                  href="/cart"
                  data-testid="nav-cart-link"
                  style={{ color: "var(--pearl-muted)" } as React.CSSProperties}
                >
                  Bag (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>

        {/* Thin gold accent line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--pearl-accent), transparent)", opacity: 0.4 }} />
      </header>
    </div>
  )
}
