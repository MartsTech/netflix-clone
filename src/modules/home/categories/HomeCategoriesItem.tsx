import styled from "styled-components";
import { Category } from "types/movies";
import HomeCategoriesPosters from "./HomeCategoriesPosters";

interface HomeCategoriesItemProps {
  category: Category;
}

const HomeCategoriesItem: React.FC<HomeCategoriesItemProps> = ({
  category,
}) => {
  const { title } = category;

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <HomeCategoriesPosters title={title} />
    </StyledContainer>
  );
};

export default HomeCategoriesItem;

const StyledContainer = styled.div`
  margin-left: 1.25rem;
  color: white;
`;

const StyledTitle = styled.h2``;
