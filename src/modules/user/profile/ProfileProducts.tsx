import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "stores/store";
import styled from "styled-components";
import ProfileProductsItem from "./ProfileProductsItem";

const ProfileProducts = () => {
  const { products } = useStore().paymentStore;

  return (
    <StyledContainer>
      {products.map((product) => (
        <ProfileProductsItem key={product.name} product={product} />
      ))}
    </StyledContainer>
  );
};

export default observer(ProfileProducts);

const StyledContainer = styled.div``;
