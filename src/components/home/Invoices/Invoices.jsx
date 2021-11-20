import React, { useState } from "react";
import "./invoices.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button, Space } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiDownArrowCircle } from "react-icons/bi";
import { Table } from "react-bootstrap";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Search from "../../../components/Calendar Pop Up - 3/search";
import Notifications from "../../../components/Notifications/Notifications";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "react-date-picker";
import { IoMdArrowDropup } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import filter from "../../../assets/squeed images/Group -335.png";
import line from "../../../assets/squeed images/lines.png";
import { MdCancel } from "react-icons/md";

import Profileform from "../../dashboard/Profile setting/Profileform";
import TopNavbar from "../Mobile View Components/Top Navbar/TopNavbar";
import FooterNavRouter from "../Mobile View Components/Footer Nav Router/FooterNavRouter";

const item = [
  {
    invoice: "1N 022212",
    concet: "APRIL MAINTENANCE",
    amount: "€ 1,234.20",

    date: "Friday 24, April 2020",
  },
  {
    invoice: "1N 022212",
    concet: "APRIL MAINTENANCE",
    amount: "€ 1,234.20",

    date: "Monday 24, April 2020",
  },
];
function Invoices() {
  const [value, onChange] = useState(new Date());
  const [displaySearch, setDisplaySearch] = useState(false);
  return (
    <>
      <div className="container-fluid main_reserve">
        <div className="top_reserve">
          <div>
            <div className="tp_reserve">
              <div className="head_reserve">
                <h2 className="reserve_h2">Invoices</h2>
              </div>

              <div className="reserve_icons">
                <div
                  className="icons-div"
                  style={{
                    alignItems: "center",
                    paddingRight: "15px",
                    display: "flex",
                  }}
                >
                  <div
                    className="search-wrapper"
                    style={{
                      display: displaySearch ? "block" : "none",
                    }}
                  >
                    <div
                      onClick={() => {
                        setDisplaySearch(!displaySearch);
                      }}
                    >
                      <Search />
                    </div>
                  </div>
                  <AiOutlineSearch
                    className="icons"
                    style={{
                      marginRight: "10px",
                      marginRight: "10px",
                      fontSize: "30px",
                      color: "#29bdef",
                      display: displaySearch ? "none" : "block",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setDisplaySearch(!displaySearch);
                    }}
                  />
                  <Notifications />

                  {/* <IoIosNotificationsOutline
                className="icons margin-right"
                onClick={() => {
                  setDisplayNotifications(!displayNotifications);
                }}
              /> */}
                </div>
              </div>
            </div>
          </div>
          <hr className="line"></hr>

          <div className="d-flex flex-row search121">
            <div className="searchinvoice12">
              <InputBase
                sx={{ ml: 1, p: 1, flex: 1 }}
                placeholder="Search using keywords"
                inputProps={{ "aria-label": "Search using keywords" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon style={{ color: "#AEBACA" }} />
              </IconButton>
            </div>

            <div
              className="filt"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                className="liness"
                src={line}
                style={{ width: "23px", height: "23px", cursor: "pointer" }}
              />
              <img
                className="lines"
                src={filter}
                style={{
                  width: "23px",
                  height: "23px",
                  cursor: "pointer",
                  paddingRight: "10px",
                }}
              />

              <div className="react-date-pick" style={{ alignSelf: "end" }}>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  calendarIcon={
                    <CalendarTodayIcon style={{ color: "#AEBACA" }} />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="main_table_div">
          <Table borderless>
            <thead className="table_head">
              <tr>
                <th className="table_heading">Invoice #</th>
                <th className="table_heading">Concet</th>
                <th className="table_heading"></th>
                <th className="table_heading"></th>
                <th className="table_heading"></th>
                <th className="table_heading">Amount</th>
                <th className="table_heading">Date</th>
                <th className="table_heading"></th>
              </tr>
            </thead>
            <tbody className="table_body">
              {item.map((dat) => (
                <tr className="body_tr">
                  <td
                    className="table_bodies prof"
                    style={{ textAlign: "inherit" }}
                  >
                    {dat.invoice}
                  </td>
                  <td
                    className="table_bodies meet"
                    style={{ fontWeight: "bold" }}
                  >
                    {dat.concet}
                  </td>
                  <td className="table_bodies zoom"></td>
                  <td className="table_bodies zoom"></td>
                  <td className="table_bodies zoom"></td>
                  <td className="table_bodies zoom">{dat.amount}</td>
                  <td className="table_bodies zoom hosting">{dat.date}</td>
                  <td
                    className="table_bodies zoom"
                    style={{ textAlign: "end" }}
                  >
                    {" "}
                    <RiDeleteBinLine
                      BsArrowDownCircle
                      style={{
                        fontSize: "24px",
                        color: "#AEBACA",
                        marginRight: "10px",
                      }}
                    />{" "}
                    <BiDownArrowCircle
                      style={{ fontSize: "24px", color: "#08A7DE" }}
                    />{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      {/* Mobile view */}
      <div>
        <div className="mobileviewinvoice">
          <div className="intitle">Invoices</div>
          <div className="divider232"></div>
          <div className="searchbardrop">
            <InputBase
              sx={{ ml: 1, p: 1, flex: 1 }}
              placeholder="All dates"
              inputProps={{ "aria-label": "All dates" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon style={{ color: "#AEBACA" }} />
              <TiArrowSortedDown style={{ color: "#AEBACA" }} />
            </IconButton>
          </div>
          {item.map((data) => (
            <div className="cardoutermain232">
              <div className="card232">
                <div className="innermain232">
                  <div className="cardinner232">
                    <p className="p232"> English Class with Maud Blanc </p>{" "}
                    <BiDownArrowCircle
                      style={{
                        fontSize: "24px",
                        color: "#08A7DE",
                        marginRight: "5px",
                      }}
                    />{" "}
                  </div>
                  <div className="divider2321"></div>
                  <div className="card232body">
                    <div className="innerbody232">
                      <div style={{ width: "25%" }}> ID: </div> <div></div>
                      <div>
                        <span className="span232"> 1N 022212 </span>
                      </div>
                    </div>
                    <div className="innerbody232">
                      <div style={{ width: "25%" }}> Rating: </div>
                      <div>
                        {" "}
                        <span
                          className="span232"
                          style={{ fontWeight: "bold" }}
                        >
                          {" "}
                          €99.00{" "}
                          <span className="innerspan232">
                            +VAT (€49.00 per hour)
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="innerbody232">
                      <div style={{ width: "25%" }}> Location: </div>
                      <div>
                        {" "}
                        <span className="span232">
                          {" "}
                          Zoom Meeting{" "}
                          <span className="innerspan232">
                            - No specified
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="innerbody232">
                      <div style={{ width: "25%" }}> Date / Time: </div>
                      <div>
                        {" "}
                        <span className="span232">
                          {" "}
                          22:00 hours{" "}
                          <span className="innerspan232">
                            (120 min) - 24, Ap 2020
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="innerbody232">
                      <div style={{ width: "25%" }}> Host: </div>{" "}
                      <div>
                        <span className="span232"> Maud Blanc </span>
                      </div>
                    </div>
                    <div className="innerbody2321">View complete details</div>
                  </div>
                </div>
              </div>
              <div className="cardend232">
                {" "}
                12 minutes ago{" "}
                <span>
                  {" "}
                  <MdCancel
                    style={{ color: "#AEBACA", marginRight: "5px" }}
                  />{" "}
                  Discard from list
                </span>
              </div>
            </div>
          ))}
          {/* last div */}
        </div>
      </div>
    </>
  );
}

export default Invoices;
