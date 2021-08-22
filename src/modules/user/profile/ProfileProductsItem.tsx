import { Button } from "@material-ui/core";
import { useStore } from "stores/store";
import styled from "styled-components";
import { Product } from "types/product";

interface ProfileProductsItemProps {
  product: Product;
}

const ProfileProductsItem: React.FC<ProfileProductsItemProps> = ({
  product,
}) => {
  const { name, description, prices } = product;
  const { createCheckout } = useStore().paymentStore;

  return (
    <StyledContainer>
      <StyledInfo>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </StyledInfo>
      <StyledButton onClick={() => prices && createCheckout(prices.priceId)}>
        Subscribe
      </StyledButton>
    </StyledContainer>
  );
};

export default ProfileProductsItem;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;

const StyledInfo = styled.div``;

const StyledName = styled.h5``;

const StyledDescription = styled.h6``;

const StyledButton = styled(Button)`
  &&& {
    padding: 0.5rem 1.25rem;
    font-size: 1rem;
    color: #fff;
    background-color: #e50914;
    font-weight: 600;
    text-transform: none;
  }
`;
