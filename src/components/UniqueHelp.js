import React from "react";

const UniqueHelp = ({icon, text, styles}) => {
  return (
    <div
      className="d-flex align-items-center position-relative mb-1"
      style={{ cursor: "pointer" }}
    >
      <p className="mb-0" style={{ marginRight: ".5rem", color: styles }}>
        {icon}
      </p>
      <p className="m-0 text-item" style={{ paddingTop: "1px", color: styles }}>
        {text}
      </p>
    </div>
  );
};

export default UniqueHelp;
