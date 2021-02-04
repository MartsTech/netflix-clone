import { LinearProgress } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./styles/App.module.css";

const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Switch>
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <Route path="/" exact component={Home} />
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
