import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand text-dark fw-bold fs-3">
          TextileHub
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <form className="d-flex mx-auto my-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search fabrics, yarn..."
            />

            <button className="btn btn-primary ms-3">Search</button>
          </form>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/marketplace" className="nav-link text-dark ">
                Marketplace
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-dark ">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-2 ms-5 ">
            <Link className="btn btn-outline-dark mx-2" to="/login">Login</Link>
            <Link className="btn btn-primary mx-2" to="/register">Register</Link>
          </div>  
        </div>
      </div>
    </nav>
  );
}

export default Navbar;