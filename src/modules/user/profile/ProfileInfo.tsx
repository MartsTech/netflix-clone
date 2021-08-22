import { Avatar, Button } from "@material-ui/core";
import { useStore } from "stores/store";
import styled from "styled-components";
import ProfileProducts from "./ProfileProducts";

const ProfileInfo = () => {
  const { user, signOut } = useStore().userStore;

  return (
    <StyledContainer>
      <StyledAvatar src={user?.photoURL || undefined} alt="avatar">
        {user?.email[0]}
      </StyledAvatar>
      <StyledDetails>
        <StyledEmail>{user?.email}</StyledEmail>
        <StyledTitle>Plans</StyledTitle>
        <ProfileProducts />
        <StyledButton onClick={signOut}>Sign Out</StyledButton>
      </StyledDetails>
    </StyledContainer>
  );
};

export default ProfileInfo;

const StyledContainer = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledAvatar = styled(Avatar)`
  &&& {
    height: 6.25rem;
    width: 6.25rem;
    object-fit: contain;
    text-transform: uppercase;
    font-size: 4rem;
    cursor: pointer;

    @media (max-width: 640px) {
      margin-bottom: 1rem;
    }
  }
`;

const StyledDetails = styled.div`
  margin-left: 1.5rem;
  flex: 1;
`;

const StyledEmail = styled.h2`
  background-color: gray;
  padding: 1rem;
  font-size: 1rem;
  padding-left: 1.25rem;
`;

const StyledTitle = styled.h3`
  margin-top: 1.25rem;
  border-bottom: 1px solid #282c2d;
  padding-bottom: 0.75rem;
`;

const StyledButton = styled(Button)`
  &&& {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    margin-top: 1rem;
    width: 100%;
    color: #fff;
    background-color: #e50914;
    font-weight: 600;
    text-transform: none;
  }
`;
