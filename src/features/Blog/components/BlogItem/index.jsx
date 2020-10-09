import React from "react";
import { Media } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

const BlogItem = (props) => {
  const { id, image, content, title } = props;
  const match = useRouteMatch();
  return (
    <Media key={id}>
      <Link to={`${match.url}/${id}`}>
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src={image}
          alt="Generic placeholder"
        />
      </Link>
      <Media.Body>
        <h5>
          <Link to={`${match.url}/${id}`}>{title}</Link>
        </h5>
        <p>{content}</p>
      </Media.Body>
    </Media>
  );
};

BlogItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
};

export default React.memo(BlogItem);
