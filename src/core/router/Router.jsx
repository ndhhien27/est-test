import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import AppBar from "../../components/AppBar";
import MainLayout from "../layout/MainLayout";

const HomeView = lazy(() => import("../../features/Home/pages/Main"));
const BlogsView = lazy(() => import("../../features/Blog/pages/Main"));
const BlogDetailView = lazy(() =>
  import("../../features/Blog/pages/BlogDetail")
);
const NotFoundView = lazy(() => import("../layout/NotFound"));
const ServerErrorView = lazy(() => import("../layout/ServerError"));

export const history = createBrowserHistory();

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    )}
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    )}
  />
);

const BlogRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    )}
  />
);

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router history={history}>
        <AppBar />
        <Switch>
          <HomeRoute exact path="/" component={HomeView} />
          <BlogRoute exact path="/blogs" component={BlogsView} />
          <BlogRoute exact path="/blogs/:id" component={BlogDetailView} />
          <BlogRoute exact path="/404" component={NotFoundView} />
          <PublicRoute exact path="/500" component={ServerErrorView} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routers;
