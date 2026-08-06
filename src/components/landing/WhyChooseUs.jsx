import products from "../../data/features";
import FeaturedCard from "../common/FeaturedCard";

function WhyChooseUs() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="fw-bold text-center mb-5">
          Why Choose Us
        </h2>

        <div className="row g-4">

          {products.map((feature) => (
            <div
              key={feature.id}
              className="col-md-6 col-lg-3"
            >
              <FeaturedCard feature={feature} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;