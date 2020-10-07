import React from "react";
import { Media } from "react-bootstrap";

const BlogItem = (props) => {
  const { id, image, content, title } = props;
  return (
    <Media key={id}>
      <img
        width={64}
        height={64}
        className="align-self-start mr-3"
        src={image}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{title}</h5>
        <p>{content}</p>
      </Media.Body>
    </Media>
  );
};

BlogItem.propTypes = {};

export default React.memo(BlogItem);
