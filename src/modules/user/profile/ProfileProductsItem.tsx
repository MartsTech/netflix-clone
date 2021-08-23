import { Button } from "@material-ui/core";
import { useStore } from "stores/store";
import styled from "styled-components";
import { Product } from "types/product";

interface ProfileProductsItemProps {
  product: Product;
  current: boolean;
}

const ProfileProductsItem: React.FC<ProfileProductsItemProps> = ({
  product,
  current,
}) => {
  const { name, description, prices } = product;
  const { createCheckout } = useStore().paymentStore;

  return (
    <StyledContainer>
      <StyledInfo>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </StyledInfo>
      <StyledButton
        disabled={current}
        onClick={() => prices && createCheckout(prices.priceId)}
      >
        {!current ? "Subscribe" : "Current"}
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
    width: 7.5rem;
    padding: 0.5rem 1.25rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: none;
    color: #fff;
    background-color: ${({ disabled }) => (!disabled ? "#e50914" : "gray")};
  }
`;
