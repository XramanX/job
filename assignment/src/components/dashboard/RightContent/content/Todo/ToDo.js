import React from "react";
import RightTopComponent from "../common/RightTopComponent";

function ToDo({ selected }) {
  const title = selected;
  const name = "John Doe";
  return (
    <div className="right-content-coming-soon">
      <RightTopComponent title={selected} name={name} />
    </div>
  );
}

export default ToDo;
