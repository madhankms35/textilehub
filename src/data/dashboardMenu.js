import {
  FaHome,
  FaStore,
  // FaShoppingBag,
  // FaHeart,
  // FaFileAlt,
  // FaUser,
  FaSignOutAlt,
  // FaBoxOpen,
  // FaPlusCircle,
  // FaChartLine
} from "react-icons/fa";

export const dashboardMenus = {
  buyer: [
    { title: "Dashboard", path: "/dashboard", icon: FaHome },
    { title: "Marketplace", path: "/marketplace", icon: FaStore },
    // { title: "My Orders", path: "/dashboard/orders", icon: FaShoppingBag },
    // { title: "Wishlist", path: "/dashboard/wishlist", icon: FaHeart },
    // { title: "RFQs", path: "/dashboard/rfqs", icon: FaFileAlt },
    // { title: "Profile", path: "/dashboard/profile", icon: FaUser },
    { title: "Logout", path: "/login", icon: FaSignOutAlt }
  ],

  supplier: [
    { title: "Dashboard", path: "/dashboard", icon: FaHome },
    { title: "Marketplace", path: "/marketplace", icon: FaStore },
    // { title: "My Products", path: "/dashboard/products", icon: FaBoxOpen },
    // { title: "Add Product", path: "/dashboard/add-product", icon: FaPlusCircle },
    // { title: "Sales Orders", path: "/dashboard/orders", icon: FaShoppingBag },
    // { title: "Analytics", path: "/dashboard/analytics", icon: FaChartLine },
    // { title: "Profile", path: "/dashboard/profile", icon: FaUser },
    { title: "Logout", path: "/login", icon: FaSignOutAlt }
  ]
};