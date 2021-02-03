import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>{/* <Route path="/" component={Home} exact /> */}</Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
