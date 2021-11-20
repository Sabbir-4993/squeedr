import React, { useState } from "react";
import { Drawer } from "antd";

// components
import TopNavbar from "../../../../Top Navbar/TopNavbar";
import MontlyView from "./components/MontlyView";
import WeeklyView from "./components/WeeklyView";
import DailyView from "./components/DailyView";

// icons
import { setNavCalender } from "../../../../../../../Redux/HomeReducer";
import { BiChevronsDown } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

// style
import "./eventMobileCalendar.scss";

const EventMobileCalendar = () => {
  const [state, setState] = useState({ visible: false });
  const [show, setShow] = useState(1);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // const showDrawer = () => {
  //   setState({
  //     visible: true,
  //   });
  // };

  const onClose = () => {
    dispatch(setNavCalender(false));
  };

  return (
    <>
      <Drawer
        width="100%"
        height="100%"
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={store.home.openNavCalender}
      >
        <TopNavbar />
        <div className="eventMobileCalendar">
          {/* Close Drawer */}
          <div className="close-btn" onClick={onClose}>
            <BiChevronsDown size={40} />
          </div>

          <div className="wrapper">
            <div className="calendar-month-week-day">
              <div
                className={show === 1 ? "month active" : "month"}
                onClick={() => {
                  setShow(1);
                }}
              >
                Monthly
              </div>

              <div
                className={show === 2 ? "week active" : "week"}
                onClick={() => {
                  setShow(2);
                }}
              >
                Weekly
              </div>

              <div
                className={show === 3 ? "daily active" : "daily"}
                onClick={() => {
                  setShow(3);
                }}
              >
                Daily
              </div>
            </div>

            {/* month view */}
            <div className={show === 1 ? "" : "display-none"}>
              <MontlyView />
            </div>

            {/* Weekly View */}
            <div className={show === 2 ? "" : "display-none"}>
              <WeeklyView />
            </div>

            {/* Daily View */}
            <div className={show === 3 ? "" : "display-none"}>
              <DailyView />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default EventMobileCalendar;
