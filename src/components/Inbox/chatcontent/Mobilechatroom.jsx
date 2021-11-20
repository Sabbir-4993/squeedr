import React from "react";
import chat1 from "../../../assets/chat1.png";
import "./chatcontent.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChatContent from "./chatcontent";
import { IoMdClose } from "react-icons/io";
import { useHistory } from "react-router-dom";

const Mobilechatroom = () => {
  const history = useHistory();
  const handleRoute = () => {
    history.push("/dashboard?chat=true");
  };
  return (
    <>
      <div className="chatroomheader">
        <div className="chat">
          <IoMdClose className="icon" size={20} onClick={handleRoute} />{" "}
          ChatRoom
        </div>
      </div>
      <div className="inboxmobile012">
        <div className="titled ">
          <div className="innertitle">
            <img src={chat1} alt="" />{" "}
            <p className="p1a"> Studio Corps & Forme</p>
          </div>
          <div className="icons012">
            <RiDeleteBinLine
              className="iconfont01"
              style={{ marginRight: "6px", color: "#AEBACA" }}
            />
            <BsThreeDotsVertical
              className="iconfont01"
              style={{ color: "#AEBACA" }}
            />{" "}
          </div>
        </div>
        <div className="chatroom012">
          <ChatContent />
        </div>
      </div>
    </>
  );
};
export default Mobilechatroom;
