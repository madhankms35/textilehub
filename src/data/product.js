import {
    FaArrowRight
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Cotton Fabric",
    price: 250,
    category: "cotton",
    unit: "Meter",
    supplier: "ABC Textiles",
    rating: 4.8,
    moq: 100,
    verified: true,
    image: "https://placehold.co/600x400",
    icon: FaArrowRight,

  },
  {
    id: 2,
    name: "Silk Fabric",
    price: 450,
    category: "silk",
    unit: "Meter",
    supplier: "Royal Silk Mills",
    rating: 4.7,
    moq: 50,
    verified: true,
    image: "https://placehold.co/600x400",
    icon: FaArrowRight,

  },
  {
    id: 3,
    name: "Polyester Yarn",
    price: 180,
    category: "polyester",
    unit: "Kg",
    supplier: "Modern Threads",
    rating: 4.5,
    moq: 25,
    verified: false,
    image: "https://placehold.co/600x400",
    icon: FaArrowRight,
  },
  {
    id: 4,
    name: "Denim Fabric",
    price: 390,
    category: "denim",
    unit: "Meter",
    supplier: "Blue Denim Co",
    rating: 4.9,
    moq: 75,
    verified: true,
    image: "https://placehold.co/600x400",
    icon: FaArrowRight,
  }
];


export default products;