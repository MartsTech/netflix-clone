import { Button } from "@material-ui/core";
import Logo from "components/logo/Logo";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import styled from "styled-components";
import BackgroundLayout from "./BackgroundLayout";

interface SignLayoutProps {
  title: string;
}

const SignLayout: React.FC<SignLayoutProps> = ({ title, children }) => {
  const { signInProvider } = useStore().userStore;
  const router = useRouter();

  return (
    <BackgroundLayout>
      <Logo path="/" />
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        {children}
        <StyledText>
          <StyledSpan>
            {router.pathname === "/login" && "New to Neflix?"}{" "}
            {router.pathname === "/register" && "Already registered?"}{" "}
          </StyledSpan>
          <StyledLink
            onClick={() =>
              router.push(router.pathname === "/login" ? "register" : "login")
            }
          >
            {title}
          </StyledLink>
        </StyledText>
        <StyledButton onClick={signInProvider}>Sign with Google</StyledButton>
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

const StyledText = styled.h4`
  text-align: left;
  margin: 1rem 0;
`;

const StyledSpan = styled.span`
  color: gray;
`;

const StyledLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

const StyledButton = styled(Button)`
  &&& {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    color: #fff;
    border-radius: 0.25rem;
    border: 1px solid #fff;
    font-weight: 600;
    cursor: pointer;
    text-transform: none;
  }
`;
