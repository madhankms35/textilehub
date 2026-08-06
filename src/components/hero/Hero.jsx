import {Link} from "react-router-dom";
function Hero() {
  return (
    <section className="hero py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">
              Trusted Textile <span className="text-primary">B2B Marketplace</span>
            </h1>

            <p className="lead text-dark mb-4">
              Connect with verified manufacturers, wholesalers, and buyers for fabrics, garments, yarn, and textile accessories.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
              <Link to="/marketplace" className="btn btn-primary btn-lg">
                Explore Products
              </Link>

              <Link to="/register" className="btn btn-success btn-lg">
                Become a Supplier
              </Link>
            </div>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search fabrics, yarn, garments..."
              />

              <button className="btn btn-primary">
                Search
              </button>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://placehold.co/600x450?text=Hero+Illustration"
              className="img-fluid"
              alt="Textile Marketplace"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;