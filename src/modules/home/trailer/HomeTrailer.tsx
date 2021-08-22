import Modal from "components/modal/Modal";
import { observer } from "mobx-react-lite";
import YouTube from "react-youtube";
import { useStore } from "stores/store";

const HomeTrailer = () => {
  const { trailerUrl } = useStore().movieStore;

  return (
    <Modal>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{
            height: "500",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      )}
    </Modal>
  );
};

export default observer(HomeTrailer);
