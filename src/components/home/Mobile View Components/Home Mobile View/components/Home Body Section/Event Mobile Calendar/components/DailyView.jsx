import React from "react";
import EventMobileCalendarCard from "./EventMobileCalendarCard";
const number = [1, 2, 3, 4];

const DailyView = () => {
  return (
    <div>
      {/* date wrapper */}
      <div className="date-wrapper">
        {/* time-day div */}
        <div className="date">Monday 21st, April 2020</div>
        {number.map(() => {
          return (
            <>
              <EventMobileCalendarCard />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DailyView;
