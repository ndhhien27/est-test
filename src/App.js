import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

const HomeView = lazy(() => import("./features/Home/pages/Main"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route exact path="/" component={HomeView} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
