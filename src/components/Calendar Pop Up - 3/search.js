import React, { useState } from "react";
import "./search.scss";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SearchBar = () => {
  const [places, setPlaces] = useState("");

  const handleChange = (event) => {
    setPlaces(event.target.value);
  };
  return (
    <div className="mainDisplay">
      <div className="mainSearchBar">
        <input className="searchInput" placeholder="Search or Filter" />
        <FormControl
          className="checkList"
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel
            style={{
              fontWeight: "bold",
            }}
          >
            All Places
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="All places"
            value={places}
            onChange={handleChange}
            style={{ fontSize: "15px" }}
          >
            <MenuItem value={10}>Events</MenuItem>
            <MenuItem value={20}>Appointments</MenuItem>
            <MenuItem value={30}>Clients</MenuItem>
            <MenuItem value={40}>Team members</MenuItem>
            <MenuItem value={50}>Reports</MenuItem>
            <MenuItem value={60}>Messages</MenuItem>
            <MenuItem value={70}>Settings</MenuItem>
            <MenuItem value={80}>Membership</MenuItem>
          </Select>
        </FormControl>
        <SearchIcon className="searchIcon" />
      </div>
    </div>
  );
};

export default SearchBar;
