import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useStore } from "stores/store";

const IsNotAuth: React.FC = ({ children }) => {
  const { user, loading } = useStore().userStore;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/home");
    }
  }, [user, router]);

  if (!user && !loading) {
    return <>{children}</>;
  }

  return null;
};

export default observer(IsNotAuth);
