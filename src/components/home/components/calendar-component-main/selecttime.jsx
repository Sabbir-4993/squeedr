import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { setCalender, setCheckOut,setselecttime } from "../../../../Redux/HomeReducer";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./calendar-component-main.scss";
import { useHistory } from "react-router";
import { Modal, Box } from "@mui/material/";

function Selecttime() {
  const history = useHistory();
  const [act, setact] = useState(1);
  const [state, setState] = useState({ visible: false, placement: "right" });
  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(store.home.openselecttime)
  return (
    
    <>
      <Modal
        open={store.home.openselecttime}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mobiletime"
      >
        <>
          <div className="mainContainerCalendar">
            <div className="mainCalendarDialog">
              {/* Header title */}
              <div className="header">
                <MdClose
                  className="md-icon"
                  onClick={() => {
                    dispatch(setselecttime(false));
                    dispatch(setCalender(true));

                    // if (urlEvents === "true") {
                    //   dispatch(setCalender(false));
                    //   history.push("/dashboard?events=true");
                    // } else if (urlAppointments === "true") {
                    //   dispatch(setCalender(false));
                    //   history.push("/dashboard?appointments=true");
                    // } else if (urlSpaces === "true") {
                    //   dispatch(setCalender(false));
                    //   history.push("/dashboard?spaces=true");
                    // } else if (urlShop === "true") {
                    //   dispatch(setCalender(false));
                    //   history.push("/dashboard?shop=true&shop-info=true");
                    // }
                  }}
                />

                <div className="title">
                  Studio Corps Pernety Installations (Only Weekend)
                </div>
              </div>

              {/* Select one or More */}
              <div className="select-one-or-more">
                <div className="title"> 1.Select a date on the calendar</div>

                <div className="para">
                  Tuesday,21th og April{" "}
                  <span style={{ color: "#29bdef", marginLeft: "10px" }}>
                    {" "}
                    Edit date
                  </span>
                </div>
              </div>
              <div className="divider1"></div>
              <div
                className="select-one-or-more"
                style={{ padding: "10px 20px 10px 20px" }}
              >
                <div className="title"> 2.Select a start time...</div>
              </div>
              <div
                // className={
                //   urlEvents ? "select-time-btn-wrapper" : "display-none"
                // }
                className="select-time-btn-wrapper"
              >
                <div
                  className={act === 1 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(1);
                  }}
                >
                  14:00 hrs
                </div>
                <div
                  className={act === 2 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(2);
                  }}
                >
                  15:00 hrs
                </div>
                <div
                  className={act === 3 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(3);
                  }}
                >
                  16:00 hrs
                </div>
                <div
                  className={act === 4 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(4);
                  }}
                >
                  17:00 hrs
                </div>
                <div
                  className={act === 5 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(5);
                  }}
                >
                  18:00 hrs
                </div>
                <div
                  className={act === 6 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(6);
                  }}
                >
                  19:00 hrs
                </div>
                <div
                  className={act === 7 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(7);
                  }}
                >
                  20:00 hrs
                </div>
                <div
                  className={act === 8 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(8);
                  }}
                >
                  21:00 hrs
                </div>
                <div
                  className={act === 9 ? "btn active" : "btn"}
                  onClick={() => {
                    setact(9);
                  }}
                >
                  22:00 hrs
                </div>
                <div className="btn inactive">23:00 hrs</div>
              </div>

              {/* footer */}
              <div className="btns-div">
                <div
                  className="select-go-back-btn"
                  onClick={() => {
                    //
                    dispatch(setselecttime(false));
                    dispatch(setCalender(true));
                  }}
                >
                  Go back
                </div>
                <div
                  className="select-continue-btn"
                  onClick={() => {
                    dispatch(setCalender(true));
                    dispatch(setselecttime(false));
                  }}
                >
                  Continue
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}

export default Selecttime;
