import { createAction, createSlice } from "@reduxjs/toolkit";

export const type = {
  FETCH: "FETCH",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
  SEARCH: "SEARCH",
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_FAILURE: "SEARCH_FAILURE",
};

export const fetch = createAction(type.FETCH);
export const fetchSuccess = createAction(type.FETCH_SUCCESS);
export const fetchFailure = createAction(type.FETCH_FAILURE);

export const search = createAction(type.SEARCH);
export const searchSuccess = createAction(type.SEARCH_SUCCESS);
export const searchFailure = createAction(type.SEARCH_FAILURE);

export const initialState = {
  listBlog: [],
  detail: {},
  error: null,
  loading: false,
  total: 0,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: {
    [fetch]: (state) => {
      state.loading = true;
    },
    [fetchSuccess]: (state, action) => {
      state.listBlog = action.payload.listBlog;
      state.error = null;
      state.loading = false;
      state.total = action.payload.total;
    },
    [fetchFailure]: (state, action) => {
      state.listBlog = [];
      state.error = action.payload.error;
      state.loading = false;
      state.total = 0;
    },
  },
});

const { actions, name, reducer } = blogSlice;
export default reducer;
