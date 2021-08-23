import { MOVIES_BASE_URL } from "constants/movies";
import Image from "next/image";
import { useStore } from "stores/store";
import styled from "styled-components";
import { Movie } from "types/movies";

interface HomeCategoriesPosterItemProps {
  movie: Movie;
  isLarge: boolean;
}

const HomeCategoriesPosterItem: React.FC<HomeCategoriesPosterItemProps> = ({
  movie,
  isLarge,
}) => {
  const { playTrailer } = useStore().movieStore;
  const path = isLarge ? movie.poster_path : movie.backdrop_path;

  if (!path) {
    return null;
  }

  return (
    <StyledContainer large={isLarge} onClick={() => playTrailer(movie)}>
      <Image
        layout="fill"
        objectFit="contain"
        src={`${MOVIES_BASE_URL}${path}`}
        alt={movie?.title || movie?.name || movie?.original_name || ""}
      />
    </StyledContainer>
  );
};

export default HomeCategoriesPosterItem;

const StyledContainer = styled.div<{ large: boolean }>`
  position: relative;
  margin-right: 0.75rem;
  transition: transform 450ms;
  cursor: pointer;
  min-height: ${({ large }) => (large ? "15.75rem" : "6.25rem")};
  min-width: ${({ large }) => (large ? "10.75rem" : "11.25rem")};

  :hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;
