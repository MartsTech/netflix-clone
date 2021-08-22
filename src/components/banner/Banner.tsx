import { Button } from "@material-ui/core";
import { MOVIES_BASE_URL } from "constants/movies";
import useRandomMovie from "hooks/useRandomMovie";
import { useStore } from "stores/store";
import styled from "styled-components";
import truncate from "utils/truncate";

const Banner = () => {
  const { playTrailer } = useStore().movieStore;
  const [movie, reload] = useRandomMovie();

  return (
    <StyledBanner backdrop={movie?.backdrop_path}>
      <StyledContainer>
        <StyledTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </StyledTitle>
        <StyledButtons>
          <StyledButton onClick={() => movie && playTrailer(movie)}>
            Play
          </StyledButton>
          <StyledButton onClick={reload}>Random Movie</StyledButton>
        </StyledButtons>
        <StyledDescription>
          {truncate(movie?.overview || "", 150)}
        </StyledDescription>
      </StyledContainer>
      <StyledFade />
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.header<{ backdrop?: string }>`
  position: relative;
  color: white;
  object-fit: contain;
  height: 28rem;
  width: 100%;
  background-color: black;
  background-size: cover;
  background-position: center center;
  background-image: ${({ backdrop }) =>
    backdrop && `url("${MOVIES_BASE_URL}/${backdrop}")`};
`;

const StyledContainer = styled.div`
  margin-left: 2rem;
  padding-top: 9rem;
  height: 12rem;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
`;

const StyledButtons = styled.div``;

const StyledButton = styled(Button)`
  &&& {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.25rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);

    :hover {
      color: #000;
      background-color: #e6e6e6;
      transition: all 0.2s;
    }
  }
`;

const StyledDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  height: 5rem;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
`;

const StyledFade = styled.div`
  position: absolute;
  bottom: 0;
  height: 7.4rem;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
