export const buyerDashboard = {

    quickActions: [
        {
            title: "Browse Marketplace",
            icon: "store",
            path: "/marketplace"
        },
        {
            title: "Create RFQ",
            icon: "rfq",
            path: "/dashboard/rfqs"
        },
        {
            title: "Wishlist",
            icon: "wishlist",
            path: "/dashboard/wishlist"
        }
    ],

    recentOrders: [
        {
            id: "TX1001",
            supplier: "ABC Textiles",
            amount: "₹42,000",
            status: "Delivered"
        },
        {
            id: "TX1002",
            supplier: "Fabric House",
            amount: "₹18,500",
            status: "Processing"
        },
        {
            id: "TX1003",
            supplier: "Premium Cotton Mills",
            amount: "₹65,000",
            status: "Shipped"
        }
    ],

    rfqs: [
        {
            product: "Cotton Fabric",
            suppliers: 5,
            status: "Open"
        },
        {
            product: "Denim Fabric",
            suppliers: 3,
            status: "Quoted"
        }
    ]

};

