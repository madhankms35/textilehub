import ProductCard from "../common/ProductCard";

function ProductGrid({ products }) {

  return (
    <div className="row g-4">

      {products.map((product) => (

        <div
          className="col-md-6 col-xl-4"
          key={product.id}
        >
          <ProductCard product={product} />
        </div>

      ))}

    </div>
  );

}

export default ProductGrid;