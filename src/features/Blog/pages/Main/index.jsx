/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetch, refresh } from "../../blogSlice";
import BlogListItems from "../../components/BlogListItems";
import BlogPagination from "../../components/BlogPagination";
import BlogSearch from "../../components/BlogSearch";
import BlogSort from "../../components/BlogSort";

const BlogsView = () => {
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
    sortBy: "createdAt",
    order: "asc",
    search: "",
  });
  const disPatch = useDispatch();
  const data = useSelector((state) => state.blogs);

  useEffect(() => {
    disPatch(fetch({ ...params }));
  }, [params]);

  useEffect(() => {
    return () => {
      disPatch(refresh());
    };
  }, []);

  const onChangePage = (number) => {
    setParams((prev) => ({ ...prev, page: number }));
  };

  const onSortPage = (sortValue) => {
    setParams((prev) => ({ ...prev, ...sortValue, page: 1 }));
  };

  const handleSearch = (inputValue) => {
    setParams((prev) => ({ ...prev, page: 1, search: inputValue }));
  };

  return (
    <Container>
      {data.loading ? (
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <BlogSearch searchValue={params.search} handleSearch={handleSearch} />
          <BlogSort onSortPage={onSortPage} />
          <BlogListItems data={data} />
          <BlogPagination
            totalBlogs={data.total}
            pagination={params}
            onChangePage={onChangePage}
          />
        </>
      )}
    </Container>
  );
};

BlogsView.propTypes = {};

export default React.memo(BlogsView);
