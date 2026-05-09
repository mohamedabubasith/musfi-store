import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div
      className="content-container py-16 small:py-24"
      style={{ borderBottom: "1px solid var(--pearl-line)" }}
    >
      <div className="flex justify-between items-end mb-10">
        <div>
          <p
            style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--pearl-accent)", fontWeight: 500, marginBottom: 6 }}
          >
            Collection
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 28, fontWeight: 400, color: "var(--pearl-ink)", letterSpacing: "-0.02em" }}
          >
            {collection.title}
          </h2>
        </div>
        <LocalizedClientLink
          href={`/collections/${collection.handle}`}
          className="transition-colors duration-200 hover:opacity-60"
          style={{
            fontSize: 12,
            color: "var(--pearl-muted)",
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 500,
            borderBottom: "1px solid var(--pearl-line)",
            paddingBottom: 2,
          }}
        >
          View all
        </LocalizedClientLink>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-5 gap-y-12">
        {pricedProducts.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </div>
  )
}
