import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useStore } from "stores/store";

const HasSubscription: React.FC = ({ children }) => {
  const { currentSubscription, loading } = useStore().paymentStore;
  const router = useRouter();

  useEffect(() => {
    if (!currentSubscription && !loading) {
      router.replace("/profile");
    }
  }, [currentSubscription, loading, router]);

  if (currentSubscription) {
    return <>{children}</>;
  }

  return null;
};

export default observer(HasSubscription);
