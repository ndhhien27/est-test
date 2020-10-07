import { takeLatest, call, put } from "redux-saga/effects";
import BlogService from "../../services/BlogService";
import { type } from "./blogSlice";

function* fetchBlogList({ payload }) {
  try {
    const res = yield call(BlogService.getList, payload.params);
    const resAll = yield call(BlogService.getList, {
      title: payload.params.title,
    });
    const listBlog = res.data;
    yield put({
      type: type.FETCH_SUCCESS,
      payload: {
        listBlog,
        total: resAll.data.length,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

function* blogSaga() {
  yield takeLatest(type.FETCH, fetchBlogList);
}

export default blogSaga;
