import IsAuth from "modules/auth/IsAuth";
import Profile from "modules/user/profile/Profile";
import { useEffect } from "react";
import { useStore } from "stores/store";

const ProfilePage = () => {
  const { loadProducts } = useStore().paymentStore;

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <IsAuth>
      <Profile />
    </IsAuth>
  );
};

export default ProfilePage;
