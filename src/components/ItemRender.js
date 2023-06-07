import React from "react";
import UniqueItemRender from "./UniqueItemRender";

const ItemRender = ({ title, icon1, icon2, text1, text2 }) => {
  return (
    <div className="mb-4">
      <h4 className="ajust-title">{title}</h4>
      <UniqueItemRender icon={icon1} text={text1} />
      <UniqueItemRender icon={icon2} text={text2} />
    </div>
  );
};

export default ItemRender;
