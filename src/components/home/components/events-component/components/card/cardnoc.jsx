import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { MdLocationOn, MdEventAvailable } from "react-icons/md";
import CardViewInfo from "../card-view-info/CardViewInfo";
// import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

import AppointmentCardDailog from "../../../appointments-component/appointment-card-dailog/AppointmentCardDailog";
import SpaceCardDailog from "../../../spaces-component/space-card-dailog/SpaceCardDailog";
import CalendarComponentRightDrawer from "../../../calendar-component-main/calendar-component-main";

import { useDispatch, useSelector } from "react-redux";
import {
  setCalender,
  setTextCopied,
  setViewinfo,
  setViewinfo2,
} from "../../../../../../Redux/HomeReducer";
import TextCopied from "../../../../../Text Copied/TextCopied";
import { useHistory } from "react-router";
import CardViewInfo2 from "../card-view-info/CardViewinfo2";

const Cardnoc = (props) => {
  // Redux
  const fref = React.useRef(CardViewInfo);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show1, setshow1] = useState(true);
  const history = useHistory();

  const handleClick = () => {
    if (show1 == true) {
      setshow1(false);
    } else setshow1(true);
  };

  return (
    <>
      <div className="card-wrapper">
        <div
          className="carousel-image"
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(setViewinfo2(true));
          }}
        >
          <img src={props.img} alt="" />
        </div>

        <div className="content">
          <div className="head">
            <div className="title">
              <div
                className="status"
                style={{
                  background: props.color,
                  display: props.status ? "flex" : "none",
                }}
              ></div>
              <div className="text">{props.title}</div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="status"
                style={{
                  color: props.availColor,
                }}
              >
                {props.available}
              </div>

              <div className="copy-link-div">
                <span
                  style={{
                    visibility: show1 ? "visible" : "hidden",
                    fontSize: "11px",
                  }}
                >
                  copy link
                </span>

                <span
                  style={{
                    display: show1 ? "none" : "block",
                    fontSize: "11px",
                  }}
                >
                  Text copied!
                </span>
                <div className="copy-link">
                  <BiLink size={16} onClick={handleClick} />
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="body">
            <div className="dur-div">
              <div className="icon-text">
                <FiClock />
                <span>Duration</span>
              </div>
              <div className="text">{props.duration}</div>
            </div>

            <div className="avail-div">
              <div className="icon-text">
                <MdEventAvailable />
                <span>Availability:</span>
              </div>
              <div className="text">
                {props.avail}{" "}
                <span
                  style={{
                    color: "#29bdef",
                    display: props.none ? "none" : "inline-block",
                  }}
                >
                  more…
                </span>
              </div>
            </div>

            <div className="loca-div">
              <div className="icon-text">
                <MdLocationOn />
                <span>Locations:</span>
              </div>

              <div className="text">
                <p>
                  <span
                    style={{
                      color: "#29bdef",
                      display: props.none ? "none" : "inline-block",
                    }}
                  >
                    #Pernety{" "}
                  </span>{" "}
                  {props.loca}
                </p>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="price">€ 49.00</div>

            <div
              className="book"
              onClick={() => {
                dispatch(setCalender(true));
              }}
            >
              <span>Book Date</span>
              <MdEventAvailable />
            </div>

            {props.viewdailog === "event" ? (
              <div
                className="view"
                onClick={() => {
                  dispatch(setViewinfo(true));
                }}
              >
                View Info
              </div>
            ) : props.viewdailog === "appointment" ? (
              <AppointmentCardDailog />
            ) : props.viewdailog === "space" ? (
              <SpaceCardDailog />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardnoc;
