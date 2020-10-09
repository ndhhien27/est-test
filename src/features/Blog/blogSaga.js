import { call, delay, put, takeLatest } from "redux-saga/effects";
import { history } from "../../core/router/Router";
import BlogService from "../../services/BlogService";
import { handleError } from "../../utils/handleError";
import { type } from "./blogSlice";

function* fetchBlogListTask({ payload }) {
  try {
    yield delay(300);
    const res = yield call(BlogService.getList, payload);
    const resAll = yield call(BlogService.getList, {
      search: payload.search,
    });
    const listBlog = res;
    yield put({
      type: type.FETCH_SUCCESS,
      payload: {
        listBlog,
        total: resAll.length,
      },
    });
    return;
  } catch (err) {
    handleError(err, history);
    // yield call(history.push, "/404");
    yield put({
      type: type.FETCH_FAILURE,
      payload: {
        error: err,
      },
    });
  }
}

// function* watchfetchBlogListTask() {
//   while (true) {
//     const action = yield take(type.FETCH);
//     console.log(action, "ACTION");
//     const { payload } = action;
//     const res = yield call(BlogService.getList, payload.paramsQuery);
//     const resAll = yield call(BlogService.getList);
//     const listBlog = res.data;
//     yield put({
//       type: type.FETCH_SUCCESS,
//       payload: {
//         listBlog,
//         total: resAll.data.length,
//       },
//     });
//   }
// }

// function* searchBlogListTask({ payload }) {
//   try {
//     yield delay(500);
//     const { paramsQuery } = payload;
//     yield put(fetch({ paramsQuery }));
//   } catch (err) {
//     console.log(err);
//   }
// }

function* fetchDetailBlogListTask({ payload }) {
  try {
    const res = yield call(BlogService.getDetails, payload.id);
    const detail = res;
    yield put({
      type: type.FETCH_DETAIL_SUCCESS,
      payload: {
        detail,
      },
    });
  } catch (err) {
    handleError(err, history);
    yield put({
      type: type.FETCH_DETAIL_FAILURE,
      payload: {
        error: err,
      },
    });
  }
}

function* blogSaga() {
  yield takeLatest(type.FETCH, fetchBlogListTask);
  // yield fork(watchfetchBlogListTask);
  // yield takeLatest(type.SEARCH, searchBlogListTask);
  yield takeLatest(type.FETCH_DETAIL, fetchDetailBlogListTask);
}

export default blogSaga;
