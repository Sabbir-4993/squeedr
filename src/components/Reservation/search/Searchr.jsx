import React from "react";
import filter from "../../../assets/squeed images/lines.png";
import frame1 from "../../../assets/squeed images/mperson.png";
import union from "../../../assets/squeed images/oneperson.png";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import shop from "../../../assets/squeed images/shop232.png";
import space from "../../../assets/squeed images/spac2232.png";
import search from "../../../assets/squeed images/search-6.png";

// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
// import BluetoothSearchingIcon from "@mui/icons-material/BluetoothSearching";

import "./searchr.scss";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const names = [
  { one: "Group Events", img: frame1 },
  { one: "Personal Appointments", img: union },
  { one: "Space", img: space },
  { one: "Items", img: shop },
];

const Searchr = () => {
  const [personName, setPersonName] = React.useState({
    one: "All Activities",
    img: search,
  });

  const handleChange = (name) => {
    setPersonName({ one: name.one, img: name.img });
    // const {
    //   target: { value },
    // } = event;
    // setPersonName(
    //   // On autofill we get a the stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );
  };
  return (
    <>
      <div className="search-select-wrapper-hr">
        <div className="search-select">
          {/* <div className="input">Search events or by date, category...</div> */}
          <div className="input">{personName.one}</div>

          <div className="arrow22 ">
            {/* <SearchIcon /> */}
            <img className="lines" src={personName.img} alt="" />
            <div className="arrow232">
              <IoMdArrowDropdown className="down232" />{" "}
              <IoMdArrowDropup className="up232" />
            </div>
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
                  {" "}
                  <div>{data.one}</div>
                  <div>
                    <img alt="" src={data.img} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Searchr;
