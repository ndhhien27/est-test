/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refresh } from "../../../features/Blog/blogSlice";

function ServerError() {
  const disPatch = useDispatch();
  useEffect(() => {
    return () => {
      disPatch(refresh());
    };
  }, []);
  return <div>Server Error.</div>;
}

ServerError.propTypes = {};

export default ServerError;
