import React, { useState, useEffect } from "react";
import ButtonFilter from "../button-filter/ButtonFilter";
import Card from "./components/card/Card";
import SearchSelect from "../search-select/SearchSelect";
// import DatePicker from "react-date-picker";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "antd";
import moment from "moment";
// const { RangePicker } = DatePicker;

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// image
// import load from "../../../../assets/home-page/load.png";
import cardpic from "../../../../assets/home-page/event.png";

// style
import "./events.scss";

const data = [
  {
    id: 1,
    color: "#FD65A7",
    text: "Crossfit",
  },
  {
    id: 2,
    color: "#65F8FD",
    text: "Kundalini Yoga",
  },
  {
    id: 3,
    color: "#FDCF65",
    text: "Personal Massage",
  },
  {
    id: 4,
    color: "#65F8FD",
    text: "Service Name",
  },
  {
    id: 5,
    color: "#65F8FD",
    text: "Service Name",
  },
];

const card = [
  {
    id: 1,
    img: cardpic,
    status: "#FD65A7",
    title: "Kundalini Yoga",
    duration: "120 min",
    avail: "Today at 14:00, 16:00, 18:00,",
    loca: "- St Name, District, City, Co...",
    available: "2 Left",
    availColor: "#01a601",
  },
  {
    id: 2,
    img: cardpic,
    status: "#FD65A7",
    title: "Kundalini Yoga",
    duration: "120 min",
    avail: "Today at 14:00, 16:00, 18:00,",
    loca: "- St Name, District, City, Co...",
    available: "FULL",
    availColor: "red",
  },
  {
    id: 3,
    img: cardpic,
    status: "#FD65A7",
    title: "Kundalini Yoga",
    duration: "120 min",
    avail: "Today at 14:00, 16:00, 18:00,",
    loca: "- St Name, District, City, Co...",
    available: "5 Left",
    availColor: "#01a601",
  },
];

const Events = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());

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
          <div className="title">
            All available events at Studio Corps & Forme
          </div>
          <div className="subtitle">
            Select a Studio Corps & Forme location to book events, or tap on any
            name to see it directly.
          </div>
        </div>

        <div className="calender-search">
          <div className="calender-div">
            {/* <div className="react-date-pick" style={{ alignSelf: "end" }}>
              <DatePicker
                onChange={onChange}
                value={value}
                calendarIcon={
                  <CalendarTodayIcon style={{ color: "#AEBACA" }} />
                }
              />
            </div> */}
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
          {card.map((item, index) => {
            return (
              <>
                <Card
                  margin={"0px"}
                  key={index}
                  id={index}
                  img={item.img}
                  status={true}
                  color={item.status}
                  title={item.title}
                  duration={item.duration}
                  avail={item.avail}
                  loca={item.loca}
                  viewdailog="event"
                  available={item.available}
                  availColor={item.availColor}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
