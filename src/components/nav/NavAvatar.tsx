import { Avatar } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import styled from "styled-components";

const NavAvatar = () => {
  const { user } = useStore().userStore;
  const router = useRouter();

  return (
    <StyledAvatar
      onClick={() => router.push("profile")}
      src={user?.photoURL || undefined}
      alt="avatar"
    >
      {user?.email[0]}
    </StyledAvatar>
  );
};

export default observer(NavAvatar);

const StyledAvatar = styled(Avatar)`
  &&& {
    position: fixed;
    top: 1.25rem;
    right: 1.25rem;
    cursor: pointer;
    text-transform: capitalize;

    :hover {
      opacity: 0.9;
    }
  }
`;
