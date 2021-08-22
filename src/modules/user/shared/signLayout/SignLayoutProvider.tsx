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
    border: 1px solid #fff;
    font-weight: 600;
    cursor: pointer;
    text-transform: none;
  }
`;
