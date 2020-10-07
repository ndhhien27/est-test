import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createInjectorsEnhancer, forceReducerReload } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import blogReducer from "../../features/Blog/blogSlice";

export default function configureAppStore(initialState = {}) {
  const rootReducer = {
    blogs: blogReducer,
  };
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: () => rootReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    preloadedState: initialState,
    // devTools: process.env.NODE_ENV !== "production",
    enhancers,
  });

  sagaMiddleware.run(rootSaga);

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  // if (module.hot) {
  //   module.hot.accept("./reducers", () => {
  //     forceReducerReload(store);
  //   });
  // }

  return store;
}
