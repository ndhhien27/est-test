import React from "react";
import PropTypes from "prop-types";
import { Col, Form } from "react-bootstrap";

const BlogSearch = (props) => {
  const { handleSearch, searchValue } = props;

  const handleSearchTermChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Row>
        <Form.Group as={Col} controlId="search">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter something..."
            value={searchValue}
            onChange={handleSearchTermChange}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

BlogSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
};

export default React.memo(BlogSearch);
