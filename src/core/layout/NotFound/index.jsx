/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refresh } from "../../../features/Blog/blogSlice";

function NotFound() {
  const disPatch = useDispatch();
  useEffect(() => {
    return () => {
      disPatch(refresh());
    };
  }, []);
  return <div>Not Found.</div>;
}

NotFound.propTypes = {};

export default NotFound;
