import { useRouter } from "next/router";
import styled from "styled-components";

interface SignLayoutTextProps {
  title: string;
}

const SignLayoutText: React.FC<SignLayoutTextProps> = ({ title }) => {
  const router = useRouter();

  return (
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
  );
};

export default SignLayoutText;

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
