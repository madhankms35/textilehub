import products from "../../data/product";
import ProductCard from "../common/ProductCard";
import { Link } from "react-router-dom";


function FeaturedProducts() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">

        <h2 className="fw-bold text-center mb-5">
          Featured Products
        </h2>
        

        <div className="row g-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="col-md-6 col-lg-3"
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

        <Link to="/marketplace" className="btn btn-primary m-4 px-4 fs-5">View All Products</Link>  

      </div>
    </section>
  );
}

export default FeaturedProducts;