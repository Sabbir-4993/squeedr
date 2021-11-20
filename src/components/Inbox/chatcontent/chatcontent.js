import React, { Component, useState, createRef, useEffect } from "react";

import "./chatcontent.scss";
import chat1 from "../../../assets/chat1.png";

import ChatItem from "./chatitems";
import Item from "antd/lib/list/Item";
import { BiSearch } from "react-icons/bi";
import { VscCloudUpload, VscSmiley } from "react-icons/vsc";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  imguploader = createRef(null);
  chatItms = [
    {
      key: 2,
      image: chat1,
      type: "other",
      msg: "Voyez ce jeu exquis wallon, de graphie en kit mais ",
    },
    {
      key: 3,
      image: chat1,
      type: "",
      msg: 'Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un…',
    },
    {
      key: 4,
      image: chat1,
      type: "",
      msg: 'Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un…',
    },
    {
      key: 5,
      image: chat1,
      type: "other",
      msg: 'Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un…',
      img: "",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
      img: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  uploadImg = (event) => {
    this.imguploader.current.click();
  };
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            img: this.state.img,
            image: chat1,
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
          this.setState({ img: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  handleenter = (e) => {
    if (this.state.msg != "") {
      this.chatItms.push({
        key: 1,
        type: "",
        msg: this.state.msg,
        img: this.state.img,
        image: chat1,
      });
      this.setState({ chat: [...this.chatItms] });
      this.scrollToBottom();
      this.setState({ msg: "" });
      this.setState({ img: "" });
    }
  };

  handleChange1 = (event) => {
    const i = URL.createObjectURL(event.target.files[0]);
    console.log("image", i);

    this.chatItms.push({
      key: 1,
      type: "",
      img: i,
      image: chat1,
    });
    this.setState({ chat: [...this.chatItms] });
    this.scrollToBottom();

    this.setState({ img: "" });
  };

  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    let previousUser = null;
    return (
      <div>
        <div className="main__chatcontent">
          <div className="content__body">
            <div className="chat__items">
              {this.state.chat.map((itm, index) => {
                if (this.previousUser == null) {
                  this.previousUser = itm.type;
                  return (
                    <ChatItem
                      animationDelay={index + 2}
                      key={itm.key}
                      user={itm.type ? itm.type : "me"}
                      margin="true"
                      msg={itm.msg}
                      image={itm.image}
                      img={itm.img}
                    />
                  );
                } else if (
                  this.previousUser != null &&
                  this.previousUser != itm.type
                ) {
                  this.previousUser = itm.type;
                  return (
                    <ChatItem
                      animationDelay={index + 2}
                      key={itm.key}
                      user={itm.type ? itm.type : "me"}
                      margin="true"
                      msg={itm.msg}
                      image={itm.image}
                      img={itm.img}
                    />
                  );
                } else {
                  this.previousUser = itm.type;
                  return (
                    <ChatItem
                      animationDelay={index + 2}
                      key={itm.key}
                      user={itm.type ? itm.type : "me"}
                      margin="false"
                      msg={itm.msg}
                      image={itm.image}
                      img={itm.img}
                    />
                  );
                }
              })}
              <div ref={this.messagesEndRef} />
            </div>
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            {/* <button className="addFiles">
             
            </button> */}
            <input
              type="text"
              placeholder="Type something or drop a document…"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <div className="icons23">
              {" "}
              <BiSearch className="iconse" />
              <VscSmiley className="iconvsc" />
              <>
                {" "}
                <input
                  type="file"
                  ref={this.imguploader}
                  accept="image/png , image/jpeg"
                  style={{ display: "none" }}
                  id="forimg"
                  value={this.state.img}
                  onChange={this.handleChange1}
                />
                <VscCloudUpload className="iconvsc" onClick={this.uploadImg} />
              </>
            </div>
            <button
              className="btnSendMsg"
              id="sendMsgBtn"
              onClick={this.handleenter}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    );
  }
}
