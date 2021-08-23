import { Button } from "@material-ui/core";
import Logo from "components/logo/Logo";
import { useRouter } from "next/router";
import styled from "styled-components";
import BackgroundLayout from "../shared/BackgroundLayout";
import StartInput from "./StartInput";

const Start = () => {
  const router = useRouter();

  return (
    <BackgroundLayout>
      <Logo path="/" />
      <StyledButton onClick={() => router.push("/login")}>Sign in</StyledButton>
      <StyledTitle>Unlimited films, TV programmes and more.</StyledTitle>
      <StyledSubTitle>Watch anywhere. Cancel anytime.</StyledSubTitle>
      <StyledSmallTitle>
        Ready to watch? Enter your email to create or restart your membership
      </StyledSmallTitle>
      <StartInput />
    </BackgroundLayout>
  );
};

export default Start;

const StyledButton = styled(Button)`
  &&& {
    position: fixed;
    right: 1.25rem;
    top: 1.25rem;
    height: 2.5rem;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
`;

const StyledTitle = styled.h1`
  font-size: 3.125rem;
  margin-bottom: 1.25rem;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const StyledSubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.75rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const StyledSmallTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;
