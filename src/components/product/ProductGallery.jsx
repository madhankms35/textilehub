import { useState } from "react";

const ProductGallery = ({ images }) => {

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (

        <div className="product-gallery">

            <div className="gallery-main">

                <img
                    src={selectedImage}
                    alt="Product"
                    className="img-fluid rounded"
                />

            </div>

            <div className="gallery-thumbnails mt-3">

                {images.map((image, index) => (

                    <img
                        key={index}
                        src={image}
                        alt=""
                        className={`thumbnail ${
                            selectedImage === image ? "active" : ""
                        }`}
                        onClick={() => setSelectedImage(image)}
                    />

                ))}

            </div>

        </div>

    );

};

export default ProductGallery;