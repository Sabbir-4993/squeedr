import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Button } from "./Styles";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./styles.css"

const Scrolltext = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(true);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  // window.addEventListener("scroll", toggleVisible);

  return (
    <div className="scroll__text">
      <div
        onClick={scrollToBottom}
        style={{ display: visible ? "flex" : "none" }}
      >
        Create Your Workspace
        <IoIosArrowRoundForward
          style={{ color: "#29BDEF", marginLeft: "10px", fontSize: "36px" }}
        />
      </div>
    </div>
  );
};

export default Scrolltext;
