import Breadcrumbs from "../../components/product/Breadcrumbs";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";

import product from "../../data/productDetails";

import "../../css/product-details.css";

const ProductDetails = () => {

    return (

        <section className="product-details-page py-4">

            <div className="container">

                <Breadcrumbs product={product} />

                <div className="row g-5 mt-2">

                    <div className="col-lg-6">

                        <ProductGallery images={product.images} />

                    </div>

                    <div className="col-lg-6">

                        <ProductInfo product={product} />

                    </div>

                </div>

            </div>

        </section>

    );

};

export default ProductDetails;