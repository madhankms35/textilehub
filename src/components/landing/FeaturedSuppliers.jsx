import suppliers from "../../data/suppliers";
import SupplierCard from "../common/SupplierCard";

function FeaturedSuppliers() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="fw-bold text-center mb-5">
          Featured Suppliers
        </h2>

        <div className="row g-4">

          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="col-md-6 col-lg-3"
            >
              <SupplierCard supplier={supplier} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedSuppliers;