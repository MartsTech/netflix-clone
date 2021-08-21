import { LinearProgress } from "@material-ui/core";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { selectIntro } from "./features/introSlice";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import styles from "./styles/App.module.css";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));

const Intro = lazy(() => import("./components/Intro"));

const App: React.FC = () => {
  const [fetching, setFetching] = useState<boolean>(true);

  const user = useSelector(selectUser);
  const intro = useSelector(selectIntro);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email!,
          })
        );
      } else {
        dispatch(logout());
      }
      setFetching(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        {!user && !fetching && (
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <Route path="/" exact component={Login} />
          </Suspense>
        )}
        {user && !fetching && (
          <Switch>
            <Suspense fallback={<LinearProgress color="secondary" />}>
              <Route path="/" exact component={!intro ? Home : Intro} />
              <Route path="/profile" component={!intro ? Profile : Intro} />
            </Suspense>
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
