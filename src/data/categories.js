import {
  FaTshirt,
  FaCouch,
  FaIndustry,
  FaLeaf,
} from "react-icons/fa";

import {
  GiSewingNeedle,
  GiRolledCloth,
  GiYarn,
  GiClothes,
} from "react-icons/gi";

const categories = [
  {
    id: 1,
    name: "Cotton",
    icon: GiRolledCloth,
  },
  {
    id: 2,
    name: "Yarn",
    icon: GiYarn,
  },
  {
    id: 3,
    name: "Apparel",
    icon: GiClothes,
  },
  {
    id: 4,
    name: "Home Textile",
    icon: FaCouch,
  },
  {
    id: 5,
    name: "Denim",
    icon: FaTshirt,
  },
  {
    id: 6,
    name: "Silk",
    icon: FaLeaf,
  },
  {
    id: 7,
    name: "Industrial",
    icon: FaIndustry,
  },
  {
    id: 8,
    name: "Accessories",
    icon: GiSewingNeedle,
  },
];

export default categories;
