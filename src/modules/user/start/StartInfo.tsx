import styled from "styled-components";

const StartInfo = () => {
  return (
    <>
      <StyledTitle>Unlimited films, TV programmes and more.</StyledTitle>
      <StyledSubTitle>Watch anywhere. Cancel anytime.</StyledSubTitle>
      <StyledSmallTitle>
        Ready to watch? Enter your email to create or restart your membership
      </StyledSmallTitle>
    </>
  );
};

export default StartInfo;

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
