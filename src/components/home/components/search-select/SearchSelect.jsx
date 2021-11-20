import React, { useState } from "react";
import filter from "../../../../assets/squeed images/lines.png";
import SearchIcon from "@mui/icons-material/Search";
import "./searchselect.scss";

const names = [
  "By Popularity",
  "Lower to Higher",
  "Higher to Lower",
  "#Pernety Events",
  "#Parodi Events",
  "#Plaza Events",
  "All Events",
];

const SearchSelect = () => {
  const [personName, setPersonName] = React.useState(
    "Search events or by date, category..."
  );
  const [value, onChange] = useState(new Date());
  const [valueTime, onChangeTime] = useState("10:00");

  const handleChange = (name) => {
    setPersonName(name);
  };

  return (
    <>
      <div className="search-select-wrapper" style={{}}>
        <div className="search-select">
          <div className="input">{personName}</div>

          <div>
            <SearchIcon />
            <img className="lines" src={filter} alt="" />
          </div>
        </div>

        <div className="search-select-menu">
          {names.map((data, index) => {
            return (
              <>
                <div
                  className="check-menu-item"
                  onClick={() => {
                    handleChange(data);
                  }}
                >
                  <div className="checkbox-div">
                    <div
                      className={
                        data === personName ? "checkbox-inner" : "checkbox-dis"
                      }
                    ></div>
                  </div>
                  <div className="text">{data}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchSelect;
