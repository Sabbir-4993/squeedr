import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const EventMobileCalendarCard = () => {
  return (
    <>
      {/* data wrapper */}
      <div className="data-wrapper">
        {/* header */}
        <div className="header">
          <div className="left">
            <div className="dot" style={{ backgroundColor: "#FD65A7" }}></div>

            <div className="title">
              Crossfit <span>with Maud</span>
            </div>
          </div>

          <div className="right">
            <span>€ 49.00</span>
            <RiArrowRightSLine className="icon" />
          </div>
        </div>

        {/* body  */}
        <div className="body-data">
          <div className="card-text">
            <div className="title">Time:</div>

            <div className="subtitle">Today at 15:00 hrs (120 min)</div>
          </div>

          <div className="card-text">
            <div className="title">Location:</div>

            <div className="subtitle">
              #Pernety - Street Name, District #3423, City
            </div>
          </div>

          <div className="card-text">
            <div className="title">Bookings:</div>

            <div className="subtitle">10 / 11</div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="divider"></div>
    </>
  );
};

export default EventMobileCalendarCard;
