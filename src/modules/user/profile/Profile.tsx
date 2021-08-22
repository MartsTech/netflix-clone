import Nav from "components/nav/Nav";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <>
      <Nav />
      <StyledContainer>
        <StyledTitle>Edit Profile</StyledTitle>
        <ProfileInfo />
      </StyledContainer>
    </>
  );
};

export default Profile;

const StyledContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
  color: #fff;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`;

const StyledTitle = styled.h1`
  font-size: 3.75rem;
  font-weight: 400;
  border-bottom: 1px solid #282c2d;
  margin-bottom: 1.25rem;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;
