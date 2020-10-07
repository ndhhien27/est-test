import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";

function BlogPagination(props) {
  const { totalBlogs, pagination, onChangePage } = props;
  const { limit, page } = pagination;
  const numberPage = Math.ceil(totalBlogs / limit);
  let items = [];

  function handleChangePage(number) {
    onChangePage(number);
  }

  for (let number = 1; number <= numberPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => handleChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}

BlogPagination.propTypes = {
  totalBlogs: PropTypes.number,
  pagination: PropTypes.object,
  onChangePage: PropTypes.func.isRequired,
};

export default React.memo(BlogPagination);
