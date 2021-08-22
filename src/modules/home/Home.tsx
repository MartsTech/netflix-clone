import Banner from "components/banner/Banner";
import Nav from "components/nav/Nav";
import styled from "styled-components";
import HomeCategories from "./categories/HomeCategories";
import HomeTrailer from "./trailer/HomeTrailer";

const Home = () => {
  return (
    <StyledContainer>
      <Nav />
      <Banner />
      <HomeCategories />
      <HomeTrailer />
    </StyledContainer>
  );
};

export default Home;

const StyledContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: black;
`;
