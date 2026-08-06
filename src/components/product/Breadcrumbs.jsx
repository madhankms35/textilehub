import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumbs = ({ product }) => {

    return (

        <nav className="product-breadcrumb">

            <Link to="/">Home</Link>

            <FaChevronRight />

            <Link to="/marketplace">

                Marketplace

            </Link>

            <FaChevronRight />

            <span>{product.category}</span>

            <FaChevronRight />

            <strong>{product.name}</strong>

        </nav>

    );

};

export default Breadcrumbs;
