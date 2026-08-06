function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <div className="card h-100 text-center shadow-sm border-0 category-card">
      <div className="card-body py-4">
        <Icon size={30} className="mb-3 text-primary" />

        <h5>{category.name}</h5>
      </div>
    </div>
  );
}

export default CategoryCard;