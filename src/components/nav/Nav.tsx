import Logo from "components/logo/Logo";
import useShowNav from "hooks/useShowNav";
import styled from "styled-components";
import NavAvatar from "./NavAvatar";

const Nav = () => {
  const [show] = useShowNav();

  return (
    <StyledNav show={show}>
      <StyledContainer>
        <Logo path="/home" />
        <NavAvatar />
      </StyledContainer>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav<{ show?: boolean }>`
  position: fixed;
  top: 0;
  padding: 1.25rem;
  width: 100%;
  height: 5rem;
  z-index: 1;
  transition: all 0.5s;
  transition-timing-function: ease-in;

  background-color: ${({ show }) => (show ? "#111" : "transparant")};
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
