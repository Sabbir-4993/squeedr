import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";

// style
import "./searchComponent.scss";

const menu = [
  "Events",
  "Appontments",
  "Clients",
  "Team members",
  "Reports",
  "Messages",
  "Settings",
  "Membership",
];

const SearchComponent = () => {
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  const [value, setValue] = useState("All places");
  return (
    <>
      <AiOutlineSearch
        className={displaySearch ? "display-none" : "icons"}
        onClick={() => {
          setDisplaySearch(true);
        }}
      />

      <div className={displaySearch ? "searchComponent" : "display-none"}>
        <div className="select-wrapper">
          <input className="search__input" placeholder="Search or Filter" />

          <div className="right">
            <div className="places">
              <div
                onClick={() => {
                  setDisplayMenu(true);
                }}
                className="value__select"
              >
                <span>{value}</span>
                <AiFillCaretDown className="down-icon" />
              </div>

              <div className={displayMenu ? "menu" : "display-none"}>
                <div
                  className="top"
                  onClick={() => {
                    setDisplayMenu(false);
                    setValue("All places");
                  }}
                >
                  <span>All places</span>
                  <AiFillCaretUp className="caret-up" />
                </div>

                {menu.map((data, index) => {
                  return (
                    <>
                      <div
                        className="select-item"
                        onClick={() => {
                          setValue(data);
                          setDisplayMenu(false);
                        }}
                      >
                        {data}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <AiOutlineSearch
              color="#29BDEF"
              size={26}
              onClick={() => {
                setDisplaySearch(false);
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
