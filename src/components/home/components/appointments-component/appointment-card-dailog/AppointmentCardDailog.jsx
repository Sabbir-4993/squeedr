import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { AiOutlinePoundCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { MdLocationOn, MdEventAvailable } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import TextCopied from "../../../../Text Copied/TextCopied";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setCalender,
  setTextCopied,
  setDrawer,
} from "../../../../../Redux/HomeReducer";

// image
import thumb from "../../../../../assets/home-page/e.png";
import book from "../../../../../assets/home-page/book.png";
import shop from "../../../../../assets/home-page/shop.png";

// style
import "./appointmentCardDailog.scss";

const item = [1, 2];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AppointmentCardDailog = () => {
  const history = useHistory();

  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({ visible: false, placement: "right" });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // url params
  const urlAppointInfo = new URLSearchParams(history.location.search).get(
    "appointments-info"
  );
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );

  const showDrawer = () => {
    if (urlPernety === "true") {
      history.push("/dashboard?pernety=true&pernety-info=true");
      dispatch(setDrawer({ appointmentInfo: true }));
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true&appointments-info=true");
      dispatch(setDrawer({ appointmentInfo: true }));
    }
  };

  const onClose = () => {
    if (urlPernety === "true") {
      history.push("/dashboard?pernety=true");
      dispatch(setDrawer({ appointmentInfo: false }));
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true");
      dispatch(setDrawer({ appointmentInfo: false }));
    }
  };

  const makeRes = () => {
    if (urlPernety === "true") {
      history.push("/dashboard?pernety=true&pernety-calendar=true");
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true&appointments-calendar=true");
    }

    dispatch(setDrawer({ appointmentInfo: false }));
    dispatch(setCalender(true));
  };

  // useEffect(() => {
  //   if (urlAppointInfo === "true") {
  //     setState({
  //       visible: true,
  //     });
  //   }
  // }, []);

  return (
    <>
      {/* <TextCopiedModal /> */}

      {/* <div className="view" onClick={showDrawer}>
        View Info
      </div> */}

      <Drawer
        width="550px"
        placement="right"
        closable={false}
        // onClose={onClose}
        visible={store.home.openDrawer.appointmentInfo}
        // key={state.placement}
      >
        <>
          <div className="appointment-card-view-dailog">
            {/* Header title */}
            <div className="header">
              <MdClose
                className="md-icon"
                style={{ color: "#000" }}
                onClick={onClose}
              />

              <div className="title">English Class</div>

              <div className="copy-link-div">
                <div className="copy-link">
                  <BiLink size={16} onClick={handleOpen} />
                </div>

                <span
                  onClick={() => {
                    dispatch(setTextCopied(true));
                  }}
                >
                  copy link
                </span>
              </div>
              <TextCopied />
            </div>

            {/* Thumbnail Image */}
            <div className="thumbnail">
              <img src={thumb} alt="" />
            </div>

            {/* Book at #Pernety Button */}
            <div className="make" onClick={makeRes}>
              Make Reservation
            </div>

            {/* Price title */}
            <div className="price-title">
              <div className="baisc">
                <AiOutlinePoundCircle className="icon" />
                <div className="key">Basic Rate:</div>
              </div>

              <div className="additional">
                <AiOutlinePoundCircle className="icon" />
                <div className="key">Additional fees</div>
              </div>
            </div>

            {/* Price Table */}
            <div className="price-div">
              <div className="price-side-1">
                {/* <AiOutlinePoundCircle className="icon" />
                <div className="key">Basic Rate:</div> */}
                <div className="value">
                  € 49.00 <span className="price-side-1-lig">(per visit)</span>
                </div>
                <div className="value">
                  € 29.00 <span className="price-side-1-lig">(per hour)</span>
                </div>
              </div>

              <div className="price-side-2">
                <div className="text-main">
                  <div className="text-div">
                    Cleaning fee <span className="lig">(Obligatory)*:</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>

                <div className="text-main">
                  <div className="text-div">
                    Soap & towel <span className="lig">(Optional):</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>

                <div className="text-main">
                  <div className="text-div">
                    <span className="lig">In case of accident*:</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>

                <div className="text-main">
                  <div className="text-div">
                    <span className="lig">Travel fee (Obligatory)*:</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="basic-information-wrapper">
              {/* <div className="title">Basic Information</div> */}

              <div className="text-wrapper">
                {/* Availability */}
                <div className="div1-wrapper">
                  <div className="icon-text">
                    <MdEventAvailable className="icon" />
                    <span>Availability:</span>
                  </div>

                  {/* <div className="text">
                    Today at 14:00, 16:00, 18:00, 20:00, see more
                  </div> */}

                  <div className="text ">
                    <div className="avail-text">
                      <span className="days">Monday</span>
                      <span className="time">
                        <span className="cancel">19:00 - 22:30</span>

                        <span className="open">19:00 - 22:30</span>
                      </span>
                    </div>

                    <div className="text avail-text">
                      <span className="days">Wednesday</span>
                      <span className="time">11:00 - 15:30</span>
                    </div>

                    <div className="text avail-text">
                      <span className="days">Saturday</span>
                      <span className="time">12:00 - 15:30</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="div1-wrapper">
                  <div className="icon-text">
                    <MdLocationOn className="icon" />
                    <span>Location:</span>
                  </div>

                  <div className="text">
                    Studio Corps & Forme Parodi - Gym (Room 12){" "}
                    <span className="loca-text">
                      Street Name, District/area, City, Country
                    </span>
                  </div>
                </div>

                {/* Host */}
                <div className="div1-wrapper">
                  <div className="icon-text">
                    <CgProfile className="icon" />
                    <span>Host(s):</span>
                  </div>

                  <div
                    style={{
                      color: "#29bdef",
                      font: "normal normal normal 16px/19px Lato",
                    }}
                  >
                    Maud Blanc
                  </div>
                </div>

                {/* Duration */}
                <div className="div1-wrapper">
                  <div className="icon-text">
                    <FiClock className="icon" />
                    <span>Duration</span>
                  </div>

                  <div className="text">120 min</div>
                </div>

                {/* Description */}
                <div className="div1-wrapper">
                  <div className="icon-text">
                    <span style={{ marginLeft: "1px" }}>Description:</span>
                  </div>

                  <div className="des-text">
                    Spinning is a training technique that connects movements
                    from different disciplines, such as weightlifting ,
                    metabolic training or gymnastics.
                  </div>
                </div>

                {/* Category */}
                <div className="div1-wrapper">
                  <div className="icon-text">
                    <div
                      style={{
                        width: "14px",
                        height: "14px",
                        backgroundColor: "#FD65A7",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <span>Category:</span>
                  </div>

                  <div className="text">Fitness</div>
                </div>

                {/*  Bookings */}
                {/* <div className="div1-wrapper">
                  <div className="icon-text">
                    <GoThreeBars className="icon" />
                    <span>Bookings:</span>
                  </div>

                  <div className="text">5 of 20</div>
                </div> */}
              </div>

              {/* Divider */}
              <div className="basic-divider"></div>
            </div>

            {/* Guidelines and Information */}
            <div className="information-wrapper">
              <div className="title">Guidelines and Information</div>

              {/* Guideline 1 */}
              {item.map((data, index) => {
                return (
                  <>
                    <div className="content-wrapper">
                      <div className="head">Guideline 1</div>

                      <div className="text-wrapper">
                        <div className="arrow-down"> </div>

                        <div className="description">
                          Voyez ce jeu exquis wallon, de graphie en kit mais
                          bref. Portez ce vieux whisky au juge blond qui fume
                          sur son île intérieure, à côté de l"alcôve ovoïde, où
                          le dans un capharnaüm.
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      </Drawer>
    </>
  );
};

export default AppointmentCardDailog;
