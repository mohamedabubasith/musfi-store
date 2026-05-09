import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div style={{ background: "var(--pearl-bg)", minHeight: "80vh" }}>
      {/* Page header */}
      <div
        className="content-container py-12"
        style={{ borderBottom: "1px solid var(--pearl-line)" }}
      >
        <p
          style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--pearl-accent)", fontWeight: 500, marginBottom: 8 }}
        >
          Shop
        </p>
        <h1
          className="font-display"
          style={{ fontSize: 36, fontWeight: 400, color: "var(--pearl-ink)", letterSpacing: "-0.02em" }}
          data-testid="store-page-title"
        >
          Our Collection
        </h1>
      </div>

      <div
        className="flex flex-col small:flex-row small:items-start py-8 content-container gap-8"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} />
        <div className="w-full">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
