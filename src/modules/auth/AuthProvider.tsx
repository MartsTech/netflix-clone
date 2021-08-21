import { auth } from "config/firebase";
import { useEffect } from "react";
import { useStore } from "stores/store";

const AuthProvider: React.FC = ({ children }) => {
  const { setUser } = useStore().userStore;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email!,
          photoURL: user.photoURL!,
        });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [setUser]);

  return <>{children}</>;
};

export default AuthProvider;
