import React, { useState } from "react";
import Card from "../events-component/components/card/Card";
import ButtonFilter from "../button-filter/ButtonFilter";
import SearchSelect from "../search-select/SearchSelect";
import { DatePicker } from "antd";
import moment from "moment";
// image
import load from "../../../../assets/home-page/load.png";
import e from "../../../../assets/home-page/e.png";

// import style
import "../events-component/events.scss";
import Cardnoc from "../events-component/components/card/cardnoc";

const data = [
  {
    id: 1,
    color: "#65F8FD",
    text: "Service",
  },
  {
    id: 2,
    color: "#FDCF65",
    text: "English Class",
  },
  {
    id: 3,
    color: "#65F8FD",
    text: "Personal Massage",
  },
];

const card = [
  {
    id: 1,
    status: "#65F8FD",
    title: "English Class",
    duration: "120 min",
    avail: "Monday, Tuesday, Wednesday",
    loca: "Zoom Meeting",
    img: e,
  },
  {
    id: 2,
    status: "#FDCF65",
    title: "English Class",
    duration: "120 min",
    avail: "Monday, Tuesday, Wednesday",
    loca: "Zoom Meeting",
    img: e,
  },
];

let limi = 4;

const Appointments = () => {
  const [limit, setLimit] = useState(4);

  const handleLimit = () => {
    limi = limit + 4;
    setLimit(limi);
  };

  // Current Date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return (
    <>
      <div className="event-component">
        <div className="head-div">
          <div className="title">Appointment Services </div>
          <div className="subtitle">
            The Studio Corps & Forme available hours are from 9:00 - 22:00 hrs
            Monday to Friday, 11:00 - 14:00 hrs Saturdays.
          </div>
        </div>

        <div className="calender-search">
          <div className="calender-div">
            <DatePicker
              defaultValue={moment(`${today}`, "DD/MM/YYYY")}
              format="DD/MM/YYYY"
            />
          </div>

          <SearchSelect />
        </div>

        <div className="button-div">
          {data.map((item, index) => {
            return (
              <>
                <ButtonFilter color={item.color} text={item.text} />
              </>
            );
          })}
        </div>

        <div className="card-main">
          {card.slice(0, limit).map((item, index) => {
            return (
              <>
                <Card
                  key={index}
                  img={item.img}
                  status={true}
                  color={item.status}
                  title={item.title}
                  duration={item.duration}
                  avail={item.avail}
                  loca={item.loca}
                  none={true}
                  viewdailog="appointment"
                />
              </>
            );
          })}
        </div>

        <div className="load-more" onClick={handleLimit}>
          <span>LOAD MORE DATES</span>
          <img src={load} alt="" />
        </div>
      </div>
    </>
  );
};

export default Appointments;
