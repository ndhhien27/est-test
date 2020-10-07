import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../App.css";
import AppBar from "../../components/AppBar";

const HomeView = lazy(() => import("../../features/Home/pages/Main"));
const BlogsView = lazy(() => import("../../features/Blog/pages/Main"));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/blogs" component={BlogsView} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
