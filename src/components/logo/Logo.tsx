import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

interface LogoProps {
  path: string;
}

const Logo: React.FC<LogoProps> = ({ path }) => {
  const router = useRouter();

  return (
    <StyledLogo onClick={() => router.push(path)}>
      <Image
        src="/images/logo.png"
        width={150}
        height={30}
        objectFit="contain"
        alt="logo"
      />
    </StyledLogo>
  );
};

export default Logo;

const StyledLogo = styled.div`
  position: fixed;
  left: 1.25rem;
  top: 1.25rem;
  cursor: pointer;
`;
