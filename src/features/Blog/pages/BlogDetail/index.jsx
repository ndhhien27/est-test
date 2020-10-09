/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { history } from "../../../../core/router/Router";
import { fetchDetail, refresh } from "../../blogSlice";

function BlogDetails() {
  const data = useSelector((state) => state.blogs);
  const { detail } = data;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetail({ id }));
    return () => {
      dispatch(refresh());
    };
  }, []);

  function goBack() {
    history.push("/blogs");
  }

  return (
    <Container>
      {detail ? (
        <>
          <Button className="mb-3" onClick={() => goBack()}>
            Back
          </Button>
          <Row>
            <Col>
              <img src={detail.image} alt="" />
            </Col>
            <Col>
              <h4>{detail.title || ""}</h4>
              <div>{detail.content || ""}</div>
            </Col>
          </Row>
        </>
      ) : (
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
}

BlogDetails.propTypes = {};

export default React.memo(BlogDetails);
