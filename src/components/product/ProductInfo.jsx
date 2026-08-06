import { FaStar } from "react-icons/fa";

const ProductInfo = ({ product }) => {

    return (

        <div>

            <span className="badge bg-primary mb-3">

                {product.category}

            </span>

            <h2 className="fw-bold">

                {product.name}

            </h2>

            <div className="d-flex align-items-center gap-2 mb-4">

                <FaStar className="text-warning" />

                <strong>{product.rating}</strong>

                <span className="text-muted">

                    ({product.reviews} Reviews)

                </span>

            </div>

            <h3 className="text-primary mb-4">

                ₹{product.price} / {product.unit}

            </h3>

            <table className="table product-table">

                <tbody>

                    <tr>

                        <th>SKU</th>

                        <td>{product.sku}</td>

                    </tr>

                    <tr>

                        <th>Brand</th>

                        <td>{product.brand}</td>

                    </tr>

                    <tr>

                        <th>MOQ</th>

                        <td>{product.moq} Meters</td>

                    </tr>

                    <tr>

                        <th>Stock</th>

                        <td>{product.stock} Meters</td>

                    </tr>

                    <tr>

                        <th>Lead Time</th>

                        <td>{product.leadTime}</td>

                    </tr>

                    <tr>

                        <th>Material</th>

                        <td>{product.material}</td>

                    </tr>

                    <tr>

                        <th>Width</th>

                        <td>{product.width}</td>

                    </tr>

                    <tr>

                        <th>GSM</th>

                        <td>{product.gsm}</td>

                    </tr>

                    <tr>

                        <th>Origin</th>

                        <td>{product.origin}</td>

                    </tr>

                </tbody>

            </table>

        </div>

    );

};

export default ProductInfo;