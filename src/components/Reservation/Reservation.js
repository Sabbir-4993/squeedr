import React, { useState, useEffect } from "react";
import "./Reservation.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import "antd/dist/antd.css";
import DatePicker from "react-date-picker";
import { Menu, Dropdown, Button, Space } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import SearchGray from "./search2/SearchGray";
import { Table } from "react-bootstrap";
import clock4 from "../../assets/squeed images/clock-4.png";
import profile1 from "../../assets/squeed images/Union 71.png";
import frame9 from "../../assets/squeed images/Frame-9.png";
import group4888 from "../../assets/squeed images/Group 4888.png";
import frame1 from "../../assets/squeed images/Frame-1.png";
import path from "../../assets/squeed images/greentick.png";
import clock2 from "../../assets/squeed images/clock-2.png";
import close from "../../assets/squeed images/close.png";
import ticklight from "../../assets/squeed images/lighttick.png";
import gari from "../../assets/squeed images/lightclock.png";
import union from "../../assets/squeed images/pro.png";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import search from "../../assets/squeed images/search-26.png";
import filter from "../../assets/squeed images/Group -335.png";
import SearchIcon from "@mui/icons-material/Search";
import line from "../../assets/squeed images/lines.png";
import Searchr from "./search/Searchr";
import { BiDownArrowCircle } from "react-icons/bi";
import { MdCancel, MdClose } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import calender from "../../assets/squeed images/calenderpic.png";
import Invoices from "../../components/home/Invoices/Invoices";
import Search from "../../components/Calendar Pop Up - 3/search";
import Notifications from "../../components/Notifications/Notifications";
import FooterNavRouter from "../home/Mobile View Components/Footer Nav Router/FooterNavRouter";
import TopNavbar from "../home/Mobile View Components/Top Navbar/TopNavbar";
import { HiOutlineDownload } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setViewinfo2, setNavCalender } from "../../Redux/HomeReducer";
//import css
import "react-date-picker/dist/DatePicker.css";
import CardViewInfo2 from "../home/components/events-component/components/card-view-info/CardViewinfo2";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { MovieCreationOutlined } from "@material-ui/icons";

function Reservation() {
  const [drpimg, setDrpimg] = useState(false);
  const [text1, settext1] = useState();
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [drops, setDrops] = useState({});
  const history = useHistory();
  const [select, setSelect] = useState({});
  const [data, setData] = useState([
    { one: "Completed dates", img: path },
    { one: "Upcoming dates", img: clock4 },
    { one: "Reschedulled dates ", img: gari },
    { one: "Cancelled dates", img: close },
  ]);
  const [drop, setDro] = useState([
    { one: "Group Events", img: frame1 },
    { one: "Personal Appointments", img: union },
    { one: "Space", img: frame1 },
  ]);
  const handleSelect = async (e) => {
    console.log(e);
    setSelect(data[e.key]);
  };
  const handleSelect2 = async (e) => {
    console.log(e);
    setDrops(drop[e.key]);
  };

  const [item, setItem] = useState([
    {
      img: clock4,
      name: "Meeting",
      location: "Zoom call",
      room: "No specified",
      host: "Maud Blanc",
      time: "16:00 hrs (120 min)",
      date: "Friday 24, April 2020",
      img2: profile1,
    },
    {
      img: clock4,
      name: "Kundalini Yoga",
      location: "#Pernety",
      room: "Gym (Room 12)",
      host: "Maud Blanc",
      time: "16:00 hrs (120 min)",
      date: "Friday 24, April 2020",
      img2: frame9,
    },
    {
      img: clock4,
      name: "Pernety Ins..",
      location: "St Name,Area #34",
      room: "No specified",
      host: "Maud Blanc",
      time: "16:00 hrs (120 min)",
      date: "Friday 24, April 2020",
      img2: group4888,
    },
    {
      img: path,
      name: "Crossfit",
      location: "#Parodi",
      room: "Room 115",
      host: "Maud Blanc",
      time: "16:00 hrs",
      date: "Monday 19, April 2020",
      img2: frame1,
    },
    {
      img: path,
      name: "Spinning",
      location: "#Pernety",
      room: "Gym (Room 12)",
      host: "Carl Johnson",
      time: "16:00 hrs (20 min)",
      date: "Sunday 18, April 2020",
      img2: frame1,
    },
    {
      img: path,
      name: "English Class",
      location: "Zoom Meeting",
      room: "Room 115",
      host: "Maud Blanc",
      time: "16:00 hrs",
      date: "Monday 19, April 2020",
      img2: frame1,
    },
    {
      img: clock2,
      name: "Kundalini Yoga",
      location: "#Parodi",
      room: "Room 115",
      host: "Maud Blanc",
      time: "16:00 hrs",
      date: "Monday 19, April 2020",
      img2: frame1,
    },
    {
      img: close,
      name: "Spinning",
      location: "#Parodi",
      room: "Room 115",
      host: "Maud Blanc",
      time: "16:00 hrs",
      date: "Monday 19, April 2020",
      img2: frame1,
    },
    {
      img: path,
      name: "Spinning",
      location: "#Parodi",
      room: "Room 115",
      host: "Maud Blanc",
      time: "16:00 hrs",
      date: "Monday 19, April 2020",
      img2: frame1,
    },
  ]);
  const Urlreservedrawer = new URLSearchParams(history.location.search).get(
    "reservedrawer"
  );

  const menu = (
    <Menu onClick={handleSelect}>
      {data.map((ite, index) => (
        <Menu.Item placement="right" key={index}>
          {ite.one}{" "}
          <span className="tickgreen">
            <img src={ite.img} />
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );
  const droped = (
    <Menu onClick={handleSelect2}>
      {drop.map((dro, index) => (
        <Menu.Item placement="right" key={index}>
          {dro.one}{" "}
          <span className="tickgreen">
            <img src={dro.img} />
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displaySearchGray, setDisplaySearchGray] = useState(false);
  const [value, onChange] = useState(new Date());
  const moveroute = () => {
    history.push("/dashboard?reservation=true&reservedrawer=true");
    dispatch(setViewinfo2(true));
  };

  useEffect(() => {
    console.log(
      "djdn",
      history.location.search,
      new URLSearchParams(history.location.search).get("reservedrawer")
    );
    if (Urlreservedrawer == "true") {
      dispatch(setViewinfo2(true));
    }
  }, []);

  return (
    <>
      <div className="container-fluid main_reserve">
        <div className="top_reserve">
          <div>
            <div className="tp_reserve">
              <div className="head_reserve">
                <h2 className="reserve_h2">Reservations</h2>
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

          <div
            className="d-flex flex-row"
            style={{ justifyContent: "space-between" }}
          >
            <div className="Ddowns" style={{ display: "flex" }}>
              <div>
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown overlay={menu} placement="bottomCenter">
                      <Button className="date_btn">
                        <span style={{ fontSize: "14px" }}>
                          {Object.entries(select).length > 0
                            ? select.one
                            : "All dates"}
                        </span>

                        {Object.entries(select).length > 0 ? (
                          <span>
                            <img src={select.img} />
                          </span>
                        ) : (
                          <span>
                            <img src={ticklight} />
                            <img className="gari" src={gari} />
                          </span>
                        )}
                      </Button>
                    </Dropdown>
                  </Space>
                </Space>
              </div>
              <div className="second">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      overlay={droped}
                      onVisibleChange={() => setDrpimg(!drpimg)}
                      placement="bottomCenter"
                    >
                      <Button className="date_btn actbtns">
                        <span
                          style={{ fontSize: "14px" }}
                          className={drpimg ? "activityhover" : "activity"}
                        >
                          {Object.entries(drops).length > 0
                            ? drops.one
                            : "All Activity"}
                        </span>

                        {Object.entries(drops).length > 0 ? (
                          <span>
                            <img src={drops.img} />
                          </span>
                        ) : drpimg ? (
                          <span>
                            <IoMdArrowDropup />
                          </span>
                        ) : (
                          <span>
                            {" "}
                            <IoMdArrowDropdown />
                          </span>
                        )}
                      </Button>
                    </Dropdown>
                  </Space>
                </Space>
                ,
              </div>
            </div>
            <div className="Filters" style={{ display: "flex" }}>
              <div className="search d-flex">
                <div
                  style={{ display: displaySearchGray ? "block" : "none" }}
                  onClick={() => {
                    setDisplaySearchGray(!displaySearchGray);
                  }}
                >
                  <SearchGray
                    onClick={() => {
                      setDisplaySearchGray(!displaySearchGray);
                    }}
                  />
                </div>
                <img
                  src={search}
                  style={{
                    display: displaySearchGray ? "none" : "block",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={() => {
                    setDisplaySearchGray(!displaySearchGray);
                  }}
                />
              </div>
              <div className="filt">
                <img
                  className="liness"
                  style={{ width: "23px", height: "23px", cursor: "pointer" }}
                  src={line}
                />
                <img
                  className="lines"
                  src={filter}
                  style={{
                    cursor: "pointer",
                    paddingRight: "10px",
                    width: "23px",
                    height: "23px",
                  }}
                />
              </div>
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
          {/* <div className="tables ">
                        <span className="table_span" style={{
                        }}>  Status</span>
                        <span className="table_span" style={{
                        }}>Name</span>
                        <span className="table_span" style={{
                        }}>Location</span>
                        <span className="table_span" style={{
                        }}>Room</span>
                        <span className="table_span" style={{
                        }}>Host</span>
                        <span className="table_span" style={{
                        }}>Time/Duration</span>
                        <span className="table_span" style={{
                        }}>Date</span>
                        <span className="table_span" style={{
                        }}>Type</span>
                    </div> */}
        </div>

        {/* table */}

        {/* <div className="tabless bg-info">
                    <span className="table_spans" style={{
                    }}> <BsCheck /></span>
                    <span className="table_spans" style={{
                    }}>Meeting</span>
                    <span className="table_spans" style={{
                    }}>Zoom call</span>
                    <span className="table_spans" style={{
                    }}>No specified</span>
                    <span className="table_spans" style={{
                    }}>Maud Blanc</span>
                    <span className="table_spans" style={{
                    }}>16:00 hrs (120 min)</span>
                    <span className="table_spans" style={{
 paddingLeft:'90px'
                    }}>Friday 24, April 2020</span>
                    <span className="table_spans" style={{
                       
                    }}> <BsCheck /></span>
                </div> */}

        {/* <div className="bg-info tables ">
                    <span style={{
                        flex: 1
                    }}>   <BsCheck /></span>
                    <span style={{
                        flex: 1
                    }}>Meeting</span>
                    <span style={{
                        flex: 1
                    }}>Zoom call</span>
                    <span style={{
                        flex: 1
                    }}>No specified</span>
                    <span style={{
                        flex: 1
                    }}>Maud Blac</span>
                    <span style={{
                        flex: 2
                    }}>16:00 hrs (120 min)</span>
                    <span style={{
                        flex: 2
                    }}>Friday 24, April 2020</span>
                    <span style={{
                        flex: 1
                    }}>   <BsCheck /></span>
                </div> */}

        <div className="main_table_div">
          <Table borderless responsive>
            <thead className="table_head">
              <tr>
                <th className="table_heading">Status</th>
                <th className="table_heading">Name</th>
                <th className="table_heading">Location</th>
                <th className="table_heading">Room</th>
                <th className="table_heading">Host</th>
                <th className="table_heading">Time/Duration</th>
                <th className="table_heading">Date</th>
                <th className="table_heading">Invoice</th>
                <th className="table_heading">Type</th>
              </tr>
            </thead>
            <tbody className="table_body">
              {item.map((dat, key) => (
                <tr
                  className="body_tr"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    moveroute();
                  }}
                >
                  <td className="table_bodies prof">
                    <img src={dat.img} />
                  </td>
                  <td className="table_bodies meet">{dat.name}</td>
                  <td className="table_bodies zoom">{dat.location}</td>
                  <td className="table_bodies zoom">{dat.room}</td>
                  <td className="table_bodies zoom hosting">{dat.host}</td>
                  <td className="table_bodies zoom">{dat.time}</td>
                  <td className="table_bodies zoom">{dat.date}</td>
                  <td className="table_bodies prof ">
                    <div className="download-rela">
                      <HiOutlineDownload
                        style={{ color: "#33E68D", fontSize: "20px" }}
                      />
                      <div className="downloadhover22">
                        View
                        <div>Download</div>
                      </div>
                    </div>
                  </td>
                  <td className="table_bodies prof heightea download-rela">
                    {" "}
                    <img src={dat.img2} />
                    <HiDotsVertical
                      onClick={(e) => {
                        e.stopPropagation();
                        settext1(key);
                      }}
                      style={{
                        color: "#29BDEF",
                        fontSize: "20px",
                        marginLeft: "15px",
                        cursor: "pointer",
                      }}
                    />
                    <div
                      className="firstdiv11"
                      style={{ display: text1 === key ? "block" : "none" }}
                    >
                      <div className="innerthings111">
                        <div className="content111th">Reschedulle</div>
                        <div>
                          <MdClose
                            style={{ color: "#AEBACA", fontSize: "16px" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              settext1(false);
                            }}
                          />
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="innerthings111">
                        <div className="content111th">Cancel event</div>
                      </div>
                      <div className="border"></div>
                      <div className="innerthings111">
                        <div className="content111th">Copy link</div>
                      </div>
                      <div className="border"></div>
                      <div className="innerthings111">
                        <div className="content111th">View Information</div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <CardViewInfo2 />
          </Table>
        </div>
      </div>
      {/* //mobile view */}
      <div className="reservation201">
        <TopNavbar />
        <FooterNavRouter />
        <div className="mobileviewinvoice">
          <div className="intitler ">
            My Reservations{" "}
            <span>
              <img
                src={calender}
                onClick={() => {
                  dispatch(setNavCalender(true));
                }}
              />
            </span>
          </div>
          <div className="divider232"></div>
          <div className="">
            <Searchr />
          </div>
          <div className="revdateextend">April 20 - April 24</div>
          {item.map((data, key) => (
            <div className="cardoutermain232">
              <div
                className="card232"
                style={{ marginTop: "0px", marginBottom: "10px" }}
              >
                <div className="innermain232" style={{ position: "relative" }}>
                  <div className="downloadrmbutton">
                    <div
                      className="downlaodrminner"
                      style={{ position: "relative" }}
                    >
                      <HiOutlineDownload
                        style={{ color: "#33E68D", fontSize: "20px" }}
                      />
                      <div className="downloadhover22">
                        View
                        <div>Download</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="cardinner232"
                    style={{ paddingRight: "10px" }}
                  >
                    <p className="p232">
                      {" "}
                      {data.name}{" "}
                      <span style={{ color: "#aebaca" }}>with {data.host}</span>{" "}
                    </p>{" "}
                    <p className="p232">
                      <img src={data.img} />
                      <HiDotsVertical
                        style={{
                          fontSize: "24px",
                          color: "#08A7DE",
                          marginLeft: "8px",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          settext1(key);
                        }}
                      />
                      <div
                        className="firstdiv11"
                        style={{ display: text1 === key ? "block" : "none" }}
                      >
                        <div className="innerthings111">
                          <div className="content111th">Reschedulle</div>
                          <div>
                            <MdClose
                              style={{ color: "#AEBACA", fontSize: "16px" }}
                              onClick={(e) => {
                                e.stopPropagation();
                                settext1(false);
                              }}
                            />
                          </div>
                        </div>
                        <div className="border"></div>
                        <div className="innerthings111">
                          <div className="content111th">Cancel event</div>
                        </div>
                        <div className="border"></div>
                        <div className="innerthings111">
                          <div className="content111th">Copy link</div>
                        </div>
                        <div className="border"></div>
                        <div className="innerthings111">
                          <div className="content111th">View Information</div>
                        </div>
                      </div>
                    </p>{" "}
                  </div>
                  <div className="divider2321"></div>
                  <div className="card232body">
                    <div className="innerbody232">
                      <div style={{ width: "25%" }}> Location: </div>
                      <div style={{ color: "black" }}>
                        {data.location}{" "}
                        <span className="span232" style={{ color: "#aebaca" }}>
                          {" "}
                          ({data.room}){" "}
                        </span>
                      </div>
                    </div>
                    <div className="innerbody232">
                      <div style={{ width: "25%" }}> Date: </div>
                      <div>
                        {" "}
                        <span className="span232">{data.date}</span>
                      </div>
                    </div>
                    <div className="innerbody232">
                      <div style={{ width: "25%" }}> Starts at: </div>
                      <div>
                        {" "}
                        <span className="span232">
                          {data.time}
                          {/* <span className="innerspan232">(120min)</span>{" "} */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Invoices /> */}
    </>
  );
}

export default Reservation;
{
  /* <Space wrap>
<Dropdown overlay={droped} onVisibleChange={() => setDrpimg(!drpimg)} placement="bottomCenter">
    <Button className="date_btn actbtns">
        <span style={{ fontSize: "14px" }} className={drpimg ? "activityhover" : "activity"}>
            {Object.entries(drops).length > 0 ? drops.one : "All Activity"}
        </span>
        <img alt='' src={search} style={{marginLeft:'auto'}}/>
        {Object.entries(drops).length > 0 ? <span  style={{paddingLeft:'10px'}}><img src={drops.img} /></span> : (drpimg ? <span  style={{paddingLeft:'10px'}}><IoMdArrowDropup /></span> : <span  style={{paddingLeft:'10px'}}> <IoMdArrowDropdown />
           
        </span>
        )}
    </Button>
</Dropdown>
</Space> */
}
