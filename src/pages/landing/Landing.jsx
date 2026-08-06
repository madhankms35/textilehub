import Hero from "../../components/hero/Hero";
import Categories from "../../components/landing/Categories";
import FeaturedProducts from "../../components/landing/FeaturedProducts";
import WhyChooseUs from "../../components/landing/WhyChooseUs";
import FeaturedSuppliers from "../../components/landing/FeaturedSuppliers";


function Landing() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <FeaturedSuppliers />
    </>
  );
}

export default Landing;