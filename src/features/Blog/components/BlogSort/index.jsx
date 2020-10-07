import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Col, Button } from "react-bootstrap";

function BlogSort(props) {
  const { onSortPage } = props;
  const [sortValue, setSortValue] = useState({
    sortBy: "createdAt",
    order: "asc",
  });

  function handleChangeSelect(e) {
    setSortValue({ ...sortValue, [e.target.name]: e.target.value });
  }

  function onClickSort() {
    onSortPage(sortValue);
  }

  return (
    <div>
      <Form>
        <Form.Row className="align-items-end justify-content-end">
          <Col sm={2} className="my-1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              as="select"
              custom
              name="sortBy"
              onChange={(e) => handleChangeSelect(e)}
            >
              <option value="createdAt">Create At</option>
              <option value="title">Title</option>
            </Form.Control>
          </Col>
          <Col sm={2} className="my-1">
            <Form.Label>Order</Form.Label>
            <Form.Control
              as="select"
              custom
              name="order"
              onChange={(e) => handleChangeSelect(e)}
            >
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </Form.Control>
          </Col>
          <Col sm="auto" className="my-1">
            <Button onClick={() => onClickSort()}>Sort</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}

BlogSort.propTypes = {
  onSortPage: PropTypes.func.isRequired,
};

export default React.memo(BlogSort);
