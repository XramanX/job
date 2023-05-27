import React from "react";
import RightTopComponent from "../common/RightTopComponent";
import ComingSoon from "../common/ComingSoon";
function Posts({ selected }) {
  const title = selected;
  const name = "John Doe";
  return (
    <div className="right-content-coming-soon">
      <div className="right-top-content">
        <RightTopComponent title={selected} />
      </div>
      <ComingSoon />
    </div>
  );
}

export default Posts;
