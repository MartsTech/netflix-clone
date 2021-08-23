import useMovieCategory from "hooks/useMovieCategory";
import styled from "styled-components";
import HomeCategoriesPostersItem from "./HomeCategoriesPostersItem";

const HomeCategoriesPosters = ({ title }: { title: string }) => {
  const [movies] = useMovieCategory(title);

  return (
    <StyledContainer>
      {movies?.map((movie) => (
        <HomeCategoriesPostersItem
          key={movie.id}
          movie={movie}
          isLarge={title === "Trending"}
        />
      ))}
    </StyledContainer>
  );
};

export default HomeCategoriesPosters;

const StyledContainer = styled.div`
  display: flex;

  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1.25rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;
