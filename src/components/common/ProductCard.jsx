import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const Icon = product.icon
  return (
    <div className="card h-100 shadow-sm border-0 product-card">

      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.name}
      />

      <div className="card-body">

        <h5>{product.name}</h5>

        <p className="text-warning mb-1">
          ⭐ {product.rating}
        </p>

        <h4 className="text-primary">
          ₹{product.price}
          <small className="fs-6 text-muted">
            / {product.unit}
          </small>
        </h4>

        <p className="mb-1">
          MOQ: {product.moq} {product.unit}
        </p>

        <p className="text-dark fw-bold mb-2">
          {product.supplier}<br/>
          <small className="text-muted">verified manufacturer</small>
        </p>

        {product.verified && (
          <span className="badge bg-success">
            Verified Supplier
          </span>
        )}

      </div>
      <Link to="/productdetails">
      <div className="card-footer bg-white border-0">
        <button className="btn btn-outline-primary w-100">
          View Details <Icon size={20} className="mb-1 text-primary"/>
        </button>
      </div></Link>

    </div>
  );
}

export default ProductCard;