import styled from "styled-components";

const BackgroundLayout: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledGradient />
      <StyledBody>{children}</StyledBody>
    </StyledContainer>
  );
};

export default BackgroundLayout;

const StyledContainer = styled.div`
  position: relative;
  height: 100vh;
  background: url("/images/cover.jpg") center no-repeat;
  background-size: cover;
`;

const StyledGradient = styled.div`
  z-index: 1;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const StyledBody = styled.div`
  position: absolute;
  top: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1;
  color: #fff;
  padding: 1.25rem;
  left: 0;
  right: 0;

  @media (max-width: 640px) {
    top: 20%;
  }
`;
