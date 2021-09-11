import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import styled from "styled-components";

const StartInput = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    router.push(
      emailRef.current?.value !== ""
        ? `register?email=${emailRef.current?.value}`
        : "register"
    );
  };

  return (
    <StyledContainer>
      <StyledInput ref={emailRef} type="email" placeholder="Email Address" />
      <StyledButton onClick={handleSubmit} type="submit">
        Get Started
      </StyledButton>
    </StyledContainer>
  );
};

export default StartInput;

const StyledContainer = styled.form`
  margin: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
`;

const StyledButton = styled(Button)`
  &&& {
    height: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    font-weight: 600;
    border-radius: 0;
    text-transform: none;
  }
`;

const StyledInput = styled.input`
  height: 100%;
  width: 30%;
  max-width: 37rem;
  padding: 0.75rem;
  outline-width: 0;
  border: none;
`;
