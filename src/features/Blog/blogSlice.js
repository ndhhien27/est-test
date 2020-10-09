import { createAction, createSlice } from "@reduxjs/toolkit";

export const type = {
  FETCH: "FETCH",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
  FETCH_DETAIL: "FETCH_DETAIL",
  FETCH_DETAIL_SUCCESS: "FETCH_DETAIL_SUCCESS",
  FETCH_DETAIL_FAILURE: "FETCH_DETAIL_FAILURE",
};

export const fetch = createAction(type.FETCH);
export const fetchSuccess = createAction(type.FETCH_SUCCESS);
export const fetchFailure = createAction(type.FETCH_FAILURE);

export const fetchDetail = createAction(type.FETCH_DETAIL);
export const fetchDetailSuccess = createAction(type.FETCH_DETAIL_SUCCESS);
export const fetchDetailFailure = createAction(type.FETCH_DETAIL_FAILURE);

export const initialState = {
  listBlog: [],
  detail: null,
  error: null,
  loading: true,
  total: 0,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    refresh: (state) => {
      state.listBlog = [];
      state.loading = true;
      state.detail = null;
      state.error = null;
    },
  },
  extraReducers: {
    [fetch]: (state) => {
      // state.loading = true;
      state.detail = null;
    },
    [fetchSuccess]: (state, action) => {
      state.listBlog = action.payload.listBlog;
      state.error = null;
      state.loading = false;
      state.total = action.payload.total;
      state.detail = null;
    },
    [fetchFailure]: (state, action) => {
      state.listBlog = [];
      state.error = action.payload.error;
      state.loading = false;
      state.total = 0;
      state.detail = null;
    },
    [fetchDetail]: (state) => {
      state.loading = true;
      state.detail = null;
    },
    [fetchDetailSuccess]: (state, action) => {
      state.error = null;
      state.loading = false;
      state.detail = action.payload.detail;
    },
    [fetchDetailFailure]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
      state.detail = null;
    },
  },
});

const { reducer, actions } = blogSlice;
export const { refresh } = actions;
export default reducer;
