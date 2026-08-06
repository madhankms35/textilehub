function MarketplaceHeader({
  search,
  setSearch,
  sort,
  setSort,
  count,
}) {
  return (
    <>
      <small className="text-muted">
        Home / Marketplace
      </small>

      <h2 className="fw-bold mt-2">
        Marketplace
      </h2>

      <p className="text-muted">
        Showing {count} Products
      </p>

      <div className="d-flex flex-column flex-md-row gap-3 mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{ maxWidth: "220px" }}
        >
          <option value="">Sort By</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
          <option value="rating">Highest Rated</option>
        </select>

      </div>
    </>
  );
}

export default MarketplaceHeader;