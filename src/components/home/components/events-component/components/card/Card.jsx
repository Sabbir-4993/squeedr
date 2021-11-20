import React, { useState, useEffect } from "react";
import { BiLink } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { MdLocationOn, MdEventAvailable } from "react-icons/md";
import CardViewInfo from "../card-view-info/CardViewInfo";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import AppointmentCardDailog from "../../../appointments-component/appointment-card-dailog/AppointmentCardDailog";
import SpaceCardDailog from "../../../spaces-component/space-card-dailog/SpaceCardDailog";
import CalendarComponentRightDrawer from "../../../calendar-component-main/calendar-component-main";
import { FiCheckCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  setCalender,
  setTextCopied,
  setViewinfo,
  setDrawer,
} from "../../../../../../Redux/HomeReducer";
import TextCopied from "../../../../../Text Copied/TextCopied";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Card = (props) => {
  // Redux
  const fref = React.useRef(CardViewInfo);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show1, setshow1] = useState(true);
  const [wait, setwait] = useState(true);
  const history = useHistory();

  const handleClick = () => {
    if (show1 == true) {
      setshow1(false);
    } else setshow1(true);
  };

  const image = [
    {
      original: props.img,
    },
    {
      original: props.img,
    },
    {
      original: props.img,
    },
  ];

  // Url Params
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );

  const openCalendar = () => {
    if (urlEvents === "true") {
      dispatch(setCalender(true));
      history.push("/dashboard?events=true&event-calendar=true");
    } else if (urlAppointments === "true") {
      dispatch(setCalender(true));
      history.push("/dashboard?appointments=true&appointment-calendar=true");
    } else if (urlSpaces === "true") {
      dispatch(setCalender(true));
      history.push("/dashboard?spaces=true&spaces-calendar=true");
    } else if (urlPernety === "true") {
      dispatch(setCalender(true));
      history.push("/dashboard?pernety=true&pernety-calendar=true");
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <div
          className={
            props.viewdailog === "appointment"
              ? "display-none"
              : "carousel-image"
          }
        >
          <ImageGallery
            items={image}
            infinite={true}
            showThumbnails={false}
            // autoPlay={true}}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            showBullets={true}
            onClick={() => {
              if (props.viewdailog === "event") {
                history.push("/dashboard?events=true&event-info=true");

                dispatch(setViewinfo(true));
              }
            }}
          />
        </div>

        <div
          className={
            props.viewdailog === "appointment"
              ? "carousel-image-appointment"
              : "display-none"
          }
          style={{ cursor: "pointer" }}
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

              <div
                className="copy-link-div"
                // onClick={() => {
                //   dispatch(setTextCopied(true));
                // }}
              >
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

              {/* <TextCopied /> */}
            </div>
          </div>

          <div
            className={props.viewdailog === "appointment" ? "" : "divider"}
          ></div>

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
                {/* Today at <span style={{ fontWeight: "bold" }}>14:00,</span>{" "}
                16:00, 18:00, <span style={{ color: "#29bdef" }}>more…</span> */}
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
            <div
              style={{ display: props.available == "FULL" ? "block" : "none" }}
            >
              <div
                className="div1_01"
                style={{ display: wait ? "block" : "none" }}
                onClick={() => setwait(false)}
              >
                Add To Waiting List
              </div>
              <div
                className="div1_02"
                style={{ display: wait ? "none" : "flex" }}
              >
                <FiCheckCircle
                  className="div1_02"
                  style={{ marginTop: "1.5px" }}
                />{" "}
                <div> Successfully added to waiting list</div>
              </div>
            </div>

            <div className="div2">
              <div className="price">€ 49.00</div>

              <div
                className="book"
                onClick={openCalendar}
                style={{ marginRight: props.margin }}
              >
                <span>Book Date</span>
                <MdEventAvailable />
              </div>
            </div>

            <div
              className={
                props.viewdailog === "appointment" ||
                props.viewdailog === "space"
                  ? "view"
                  : "display-none"
              }
              onClick={() => {
                if (props.viewdailog === "appointment") {
                  dispatch(setDrawer({ appointmentInfo: true }));
                  history.push(
                    "/dashboard?appointments=true&appointments-info=true"
                  );
                } else if (props.viewdailog === "space") {
                  dispatch(setDrawer({ spacesInfo: true }));

                  history.push("/dashboard?spaces=true&spaces-info=true");
                }
              }}
            >
              View Info
            </div>

            {/* {props.viewdailog === "event" ? (
              <></>
            ) : props.viewdailog === "appointment" ? (
              <AppointmentCardDailog />
            ) : props.viewdailog === "space" ? (
              <SpaceCardDailog />
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
