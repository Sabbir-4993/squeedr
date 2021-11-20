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

import "./searchGray.scss";

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

const SearchGray = () => {
  return (
    <>
      <div className="search-input">
        <input
          className="inputSearching"
          type="text"
          placeholder="Search using keywords"
        />
        <img src={search} alt="search" className="searchIconInput" />
      </div>
    </>
  );
};

export default SearchGray;
