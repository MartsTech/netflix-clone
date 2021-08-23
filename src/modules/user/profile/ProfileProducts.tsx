import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "stores/store";
import styled from "styled-components";
import ProfileProductsItem from "./ProfileProductsItem";

const ProfileProducts = () => {
  const { products, currentSubscription } = useStore().paymentStore;

  return (
    <StyledContainer>
      {products.map((product) => {
        const isCurrentPackage =
          product.metadata.firebaseRole === currentSubscription?.role;

        return (
          <ProfileProductsItem
            key={product.name}
            product={product}
            current={isCurrentPackage}
          />
        );
      })}
    </StyledContainer>
  );
};

export default observer(ProfileProducts);

const StyledContainer = styled.div``;
