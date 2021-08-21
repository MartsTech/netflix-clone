import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import styled from "styled-components";

const StartButton = () => {
  const router = useRouter();

  return (
    <StyledButton onClick={() => router.push("/login")}>Sign in</StyledButton>
  );
};

export default StartButton;

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
