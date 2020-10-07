/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../blogSlice";
import BlogItem from "../../components/BlogItem";
import BlogPagination from "../../components/BlogPagination";
import BlogSearch from "../../components/BlogSearch";
import BlogSort from "../../components/BlogSort";

const BlogsView = () => {
  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
    sortBy: "createdAt",
    order: "asc",
    title: "",
  });
  const disPatch = useDispatch();
  const data = useSelector((state) => state.blogs);
  console.log("DATA", data);
  useEffect(() => {
    const params = {
      page: filter.page,
      limit: filter.limit,
      sortBy: filter.sortBy,
      order: filter.order,
      title: filter.title,
    };
    disPatch(fetch({ params }));
  }, [filter]);

  const onChangePage = (number) => {
    setFilter((prev) => ({ ...prev, page: number }));
  };

  const onSortPage = (sortValue) => {
    setFilter((prev) => ({ ...prev, ...sortValue }));
  };

  const handleSearch = (searchValue) => {
    setFilter((prev) => ({ ...prev, title: searchValue }));
  };

  return (
    <Container>
      <BlogSearch searchValue={filter.title} handleSearch={handleSearch} />
      <BlogSort onSortPage={onSortPage} />
      {data.listBlog.length > 0 &&
        data.listBlog.map((blog) => <BlogItem {...blog} key={blog.id} />)}
      <BlogPagination
        totalBlogs={data.total}
        pagination={filter}
        onChangePage={onChangePage}
      />
    </Container>
  );
};

BlogsView.propTypes = {};

export default React.memo(BlogsView);
