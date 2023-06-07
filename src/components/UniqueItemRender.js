import React from "react";
import { IoChevronForward } from "react-icons/io5";

const UniqueItemRender = ({ icon, text }) => {
  return (
    <div className="d-flex align-items-center position-relative mb-3" style={{cursor: "pointer"}}>
      <p className="mb-0" style={{ marginRight: ".5rem", color: "#38343D" }}>
        {icon}
      </p>
      <p className="m-0 text-item" style={{ paddingTop: "1px" }}>
        {text}
      </p>
      <p className="m-0 position-absolute end-0">
        <IoChevronForward />
      </p>
    </div>
  );
};

export default UniqueItemRender;
