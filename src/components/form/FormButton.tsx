import { Button } from "@material-ui/core";
import styled from "styled-components";

const FormButton: React.FC = ({ children }) => {
  return <StyledButton type="submit">{children}</StyledButton>;
};

export default FormButton;

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
