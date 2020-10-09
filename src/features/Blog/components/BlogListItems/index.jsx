import PropTypes from "prop-types";
import React from "react";
import BlogItem from "../BlogItem";

const BlogListItems = ({ data }) => {
  return (
    <>
      {data.listBlog.length > 0
        ? data.listBlog.map((blog) => <BlogItem {...blog} key={blog.id} />)
        : "No data"}
    </>
  );
};

BlogListItems.propTypes = {
  data: PropTypes.object,
};

export default React.memo(BlogListItems);
