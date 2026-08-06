import categories from "../../data/categories";
import CategoryCard from "../common/CategoryCard";

function Categories() {
  return (
    <section className="py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Browse Categories
        </h2>

        <div className="row g-4">

          {categories.map((category) => (
            <div
              key={category.id}
              className="col-6 col-md-4 col-lg-3"
            >
              <CategoryCard category={category} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;