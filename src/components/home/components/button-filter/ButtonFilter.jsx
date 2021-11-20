import React, { useState } from "react";

// import style
import "./buttonfilter.scss";

const ButtonFilter = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        style={{ margin: `${props.margin}` }}
        className={
          toggle ? "btn-filter-inner btn-filter-active" : "btn-filter-inner"
        }
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          style={{
            minWidth: "10px",
            minHeight: "10px",
            borderRadius: "50%",

            backgroundColor: `${props.color}`,
          }}
        ></div>
        <div style={{ font: `${props.font}` }} className="text">
          {props.text}
        </div>
      </div>
    </>
  );
};

export default ButtonFilter;
