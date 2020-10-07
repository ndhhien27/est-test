import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppBar from "../../components/AppBar";
import MainLayout from "../layout/MainLayout";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
