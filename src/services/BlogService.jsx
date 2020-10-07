import request from "./request";

const getList = (params) => {
  const url = "/blogs";
  return request.get(url, { params });
};

const getDetails = (id) => {
  const url = `/blogs/${id}`;
  return request.get(url);
};

export default {
  getList,
  getDetails,
};
