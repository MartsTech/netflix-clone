import styled from "styled-components";
import BackgroundLayout from "../BackgroundLayout";
import Logo from "../Logo";
import SignLayoutProvider from "./SignLayoutProvider";
import SignLayoutText from "./SignLayoutText";

interface SignLayoutProps {
  title: string;
}

const SignLayout: React.FC<SignLayoutProps> = ({ title, children }) => {
  return (
    <BackgroundLayout>
      <Logo />
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        {children}
        <SignLayoutText title={title} />
        <SignLayoutProvider />
      </StyledContainer>
    </BackgroundLayout>
  );
};

export default SignLayout;

const StyledContainer = styled.div`
  max-width: 25rem;
  padding: 4rem;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.85);

  @media (max-width: 640px) {
    padding: 2rem;
  }
`;

const StyledTitle = styled.h1`
  text-align: left;
  margin-bottom: 25px;
`;
