import { useState } from "react";
import productsData from "../../data/product";

import MarketplaceHeader from "../../components/marketplace/MarketplaceHeader";
import FilterSidebar from "../../components/marketplace/FilterSidebar";
import ProductGrid from "../../components/marketplace/ProductGrid";
import Pagination from "../../components/marketplace/Pagination";

function Marketplace() {

    const [search,setSearch]=useState("");
    const [sort,setSort]=useState("");
    const [category,setCategory]=useState("All");

    let filteredProducts=[...productsData];

    // Search

    filteredProducts=filteredProducts.filter(product=>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Category

    if(category!=="all"){
        filteredProducts=filteredProducts.filter(product=>
            product.category===category
        );
    }

    // Sort

    if(sort==="low"){
        filteredProducts.sort((a,b)=>a.price-b.price);
    }

    if(sort==="high"){
        filteredProducts.sort((a,b)=>b.price-a.price);
    }

    if(sort==="rating"){
        filteredProducts.sort((a,b)=>b.rating-a.rating);
    }

    return(

        <div className="container-fluid py-4">

            <div className="row">

                <div className="col-lg-3">

                    <FilterSidebar

                        category={category}
                        setCategory={setCategory}

                    />

                </div>

                <div className="col-lg-9">

                    <MarketplaceHeader

                        search={search}
                        setSearch={setSearch}

                        sort={sort}
                        setSort={setSort}

                        count={filteredProducts.length}

                    />

                    <ProductGrid

                        products={filteredProducts}

                    />

                    <Pagination/>

                </div>

            </div>

        </div>

    )

}

export default Marketplace;