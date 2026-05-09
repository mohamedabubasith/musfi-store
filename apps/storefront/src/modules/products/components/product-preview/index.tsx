import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region: _region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({ product })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block">
      <div data-testid="product-wrapper">
        {/* Image */}
        <div
          className="overflow-hidden mb-4 relative"
          style={{ background: "var(--pearl-surface)" }}
        >
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
              className="!rounded-none !shadow-none !bg-transparent"
            />
          </div>
          {/* Gold corner accent on hover */}
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5 origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
            style={{ background: "var(--pearl-accent)" }}
          />
        </div>

        {/* Info */}
        <div className="flex justify-between items-end gap-4">
          <div className="flex-1 min-w-0">
            <p
              className="font-display truncate transition-colors duration-200"
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "var(--pearl-ink)",
                letterSpacing: "-0.01em",
              }}
              data-testid="product-title"
            >
              {product.title}
            </p>
            {product.collection && (
              <p
                className="mt-0.5 truncate"
                style={{ fontSize: 11, color: "var(--pearl-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                {product.collection.title}
              </p>
            )}
          </div>
          <div
            className="flex-shrink-0"
            style={{ fontSize: 14, color: "var(--pearl-accent)", fontWeight: 500 }}
          >
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
