import Banner from "components/banner/Banner";
import Nav from "components/nav/Nav";
import HomeCategories from "./categories/HomeCategories";
import HomeTrailer from "./trailer/HomeTrailer";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <HomeCategories />
      <HomeTrailer />
    </>
  );
};

export default Home;
