function FeaturedCard({ feature }) {
  const Icon = feature.icon
  return (
    <div className="card h-100 shadow-sm border-0 product-card">

      
        <div className="card-body text-center">
            <h1><Icon size={30} className="mb-1 text-dark"/></h1>
            <h5>{feature.title}</h5>

            <p className="text-muted mb-1">
            <small>{feature.description}</small>
        </p>       
        </div>
    </div>
  );
}

export default FeaturedCard;