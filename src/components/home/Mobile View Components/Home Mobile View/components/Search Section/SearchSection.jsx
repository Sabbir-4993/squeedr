import React from "react";
import { DatePicker } from "antd";
import { TimePicker } from "antd";

import moment from "moment";
import SearchSelect from "../../../../components/search-select/SearchSelect";
import "./searchSection.scss";
import ButtonFilter from "../../../../components/button-filter/ButtonFilter";

const format = "HH:mm";

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

const SearchSection = (props) => {
  // Current Date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return (
    <div className="search-section-component-wrapper-main">
      <div className="search-section-component-wrapper">
        <SearchSelect />

        <div className={props.dateTime ? "display-none" : "calender-div"}>
          <div className="date" id="date" style={{ position: "relative" }}>
            <DatePicker
              getPopupContainer={() => document.getElementById("date")}
              defaultValue={moment(`${today}`, "DD/MM/YYYY")}
              format="DD/MM/YYYY"
            />
          </div>

          <div className="time" id="time" style={{ position: "relative" }}>
            <TimePicker
              getPopupContainer={() => document.getElementById("time")}
              defaultValue={moment("00:00", format)}
              format={format}
            />
          </div>
        </div>

        {/* <div className="btn-wrapper">{props.btnName}</div> */}
      </div>

      <div
        className={props.button ? "display-none" : "search-section-btn-wrapper"}
      >
        {data.map((item, index) => {
          return <ButtonFilter color={item.color} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default SearchSection;
