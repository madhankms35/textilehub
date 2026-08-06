function SupplierCard({ supplier }) {
  return (
    <div className="card h-100 shadow-sm border-0 product-card">
   
      <div className="card-body">

        <h4>{supplier.companyName}</h4>

        <p className="text-success fw-bold mb-1">
          ⭐ {supplier.rating}
        </p>

        <h5 className="text-primary">
          ₹{supplier.location}
        </h5>

        <p className="mb-1">
          {supplier.experience} years of experience
        </p>

        <p className="text-dark fw-bold my-3">
          {supplier.totalProducts} products
        </p>

        {supplier.verified && (
          <span className="badge bg-success">
            Verified Supplier
          </span>
        )}

      </div>

      <div className="card-footer bg-white border-0 mt-3">
        <button className="btn btn-primary w-100">
          Visit Store 
        </button>
      </div>

    </div>
  );
}

export default SupplierCard;