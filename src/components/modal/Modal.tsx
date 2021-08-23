import { Modal as ModalUI } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import styled from "styled-components";

const Modal: React.FC = ({ children }) => {
  const { modalOpen, setModalOpen } = useStore().commonStore;

  return (
    <ModalUI open={modalOpen} onClose={() => setModalOpen(false)}>
      <StyledContainer>{children}</StyledContainer>
    </ModalUI>
  );
};

export default observer(Modal);

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 31.25rem;
  width: 50%;

  background-color: black;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;
