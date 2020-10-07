const { fork } = require("redux-saga/effects");
const { default: blogSaga } = require("../../features/Blog/blogSaga");

function* rootSaga() {
  yield fork(blogSaga);
}

export default rootSaga;
