import { Button } from "@material-ui/core";
import { useStore } from "stores/store";
import styled from "styled-components";

const SignLayoutProvider = () => {
  const { signInProvider } = useStore().userStore;

  return <StyledButton onClick={signInProvider}>Sign with Google</StyledButton>;
};

export default SignLayoutProvider;

const StyledButton = styled(Button)`
  &&& {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    color: #fff;
    border-radius: 0.25rem;
    background-color: #e50914;
    font-weight: 600;
    border: none;
    cursor: pointer;
    text-transform: none;
  }
`;
