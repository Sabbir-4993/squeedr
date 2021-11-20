import React from "react";
import { FiClock } from "react-icons/fi";

import "./pernetyavailability.scss";

const PernetyAvailability = () => {
  return (
    <>
      <div className="pernety-availability-component">
        <div className="header">
          <div className="text">#Pernety Availability</div>

          <div className="icon">
            <FiClock />
          </div>
        </div>

        <div className="time">
          <div className="day">Monday</div>

          <div className="hour">11:00 - 22:30 hrs</div>
        </div>

        <div className="time">
          <div className="day">Tuesday</div>

          <div className="hour">11:00 - 22:30 hrs</div>
        </div>

        <div className="time">
          <div className="day">Wednesday</div>

          <div className="hour">11:00 - 22:30 hrs</div>
        </div>

        <div className="time">
          <div className="day">Thursday</div>

          <div className="hour">11:00 - 22:30 hrs</div>
        </div>

        <div className="time">
          <div className="day">Friday</div>

          <div className="hour">No service</div>
        </div>

        <div className="time">
          <div className="day">Saturday</div>

          <div className="hour">11:00 - 22:30 hrs</div>
        </div>

        <div className="time">
          <div className="day">Sunday</div>

          <div className="hour">11:00 - 22:30 hrs</div>
        </div>
      </div>
    </>
  );
};

export default PernetyAvailability;
