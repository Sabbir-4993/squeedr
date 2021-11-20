import React, { useState, useEffect } from "react";
import moment from "moment";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {
  AiOutlineSearch,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineShopping,
} from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Search from "../../components/Calendar Pop Up - 3/search";
import Notifications from "../../components/Notifications/Notifications";
import SearchComponent from "../Search Component/SearchComponent";

import "./homeCalendar.scss";

const { datesGenerator } = require("dates-generator");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const showEvents = [
  {
    date: "9/7/2021",
    data: [
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
    ],
  },

  {
    date: "10/1/2021",
    data: [
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
    ],
  },
  {
    date: "10/6/2021",
    data: [
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
    ],
  },
  {
    date: "10/10/2021",
    data: [
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
    ],
  },

  {
    date: "10/21/2021",
    data: [
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
    ],
  },
  {
    date: "10/27/2021",
    data: [
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
    ],
  },
  {
    date: "11/10/2021",
    data: [
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
      {
        time: "15:00",
        name: "Kundalini Yoga",
        room: "Room 5A",
        host: "Carl Johnson",
        statu: false,
        type: "shop",
      },
      {
        time: "14:00",
        name: "Meeting",
        room: "Zoom Call",
        host: "Maud Blanc",
        statu: true,
        type: "shop",
      },
    ],
  },
];

const HomeCalendar = () => {
  const [displaySearch, setDisplaySearch] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [currente, stCurrente] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
    current: selectedDate.getFullYear(),
  });

  const [currentDateEvents, setCurrentDateEvents] = useState([]);
  const [eventstobeMap, setevettobemap] = useState([]);

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
    };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  }, []);

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      current: body.year,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    console.log(selectedDate.getFullYear());
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      current: body.year,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  function currentDateFormat() {
    var today = new Date();
    // var dd = String(today.getDate()).padStart(2, "0");
    // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();

    today = `${mm}/${dd}/${yyyy}`;
    return today;
  }

  function nextDates() {
    var dt = new Date();

    var month = dt.getMonth() + 1;
    var year = dt.getFullYear();

    var daysInMonth = new Date(year, month, 0).getDate();
    return daysInMonth;
  }

  function findmyevents(date) {
    for (let i = 0; i < showEvents.length; i++) {
      if (date == showEvents[i].date) {
        stCurrente(showEvents[i].data);
        return;
      } else {
        stCurrente([]);
      }
    }
  }

  return (
    <>
      <div className="home-main-calendar-wrapper">
        <div className="header-calendar">
          <div className="months">
            {months[calendar.month]} {calendar.current}
            <div className="arrow">
              <TiArrowSortedUp
                size={18}
                style={{ marginBottom: "-3px", cursor: "pointer" }}
                onClick={onClickNext}
              />
              <TiArrowSortedDown
                size={18}
                style={{ marginTop: "-3px", cursor: "pointer" }}
                onClick={onClickPrevious}
              />
            </div>
          </div>

          <div className="middle">
            <div className="all-workspace" style={{ color: "#596066" }}>
              <span>All workspaces</span>
              <FaFilter />
            </div>

            <div className="team">
              <span>All team </span>{" "}
              <span>
                <AiOutlineSearch size={20} /> <TiArrowSortedDown />
              </span>
            </div>

            <div className="all-events">
              <span> All events </span>{" "}
              <span>
                <AiOutlineSearch size={20} /> <TiArrowSortedDown />
              </span>
            </div>

            <div className="montly">
              <span>Monthly</span>
              <span>
                <BsClock size={18} />
              </span>
            </div>
          </div>

          <div className="last">
            {/* <div
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
              }}
              onClick={() => {
                setDisplaySearch(!displaySearch);
              }}
            /> */}

            <SearchComponent />

            <Notifications />
          </div>
        </div>

        <div className="divider"></div>

        <div className="calendar-main">
          <table
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <thead>
              <tr>
                {days.map((day) => (
                  <td key={day}>
                    <div className="table-head">{day}</div>
                  </td>
                ))}
              </tr>
            </thead>

            <tbody>
              {dates.length > 0 &&
                dates.map((week, index) => (
                  <tr key={JSON.stringify(week[0])}>
                    {week.map((each, index2) => (
                      <td key={JSON.stringify(each)}>
                        <div
                          onMouseOver={() =>
                            findmyevents(each.jsDate.split(",")[0])
                          }
                          className={
                            each.jsDate.split(",")[0] === currentDateFormat()
                              ? "date-div datediv-currentDate"
                              : each.month === new Date().getMonth() &&
                                each.year === new Date().getFullYear()
                              ? "date-div"
                              : "date-div datediv-notCurrent"
                          }
                        >
                          {/* <div
                            className={
                              each.jsDate.split(",")[0] ===
                                currentDateFormat() &&
                              months[calendar.month] === months[each.month]
                                ? "date currentDate"
                                : each.month === new Date().getMonth() &&
                                  each.year === new Date().getFullYear() &&
                                  each.date > new Date().getDate() &&
                                  each.date <= nextDates()
                                ? "date dateNext"
                                : "date"
                            }
                          >
                            {each.date}
                          </div> */}

                          <div
                            className={
                              each.jsDate.split(",")[0] === currentDateFormat()
                                ? "date currentDate"
                                : each.month === new Date().getMonth() &&
                                  each.year === new Date().getFullYear() &&
                                  each.date > new Date().getDate() &&
                                  each.date <= nextDates()
                                ? "date dateNext"
                                : "date"
                            }
                          >
                            {each.date}
                          </div>

                          {showEvents.map((data, index) => {
                            return (
                              <>
                                <div
                                  className={
                                    data.date === each.jsDate.split(",")[0]
                                      ? each.month <= new Date().getMonth() &&
                                        each.year <= new Date().getFullYear() &&
                                        each.date < new Date().getDate()
                                        ? "text-wrapper text-opa"
                                        : "text-wrapper"
                                      : "display-none"
                                  }
                                >
                                  {data.data.map((event, index) => {
                                    return (
                                      index < 3 && (
                                        <>
                                          <div className=" events">
                                            <div
                                              className="dot"
                                              style={{ background: "#FF68F5" }}
                                            ></div>

                                            <div className="text">
                                              {event.time} - {event.name}
                                            </div>
                                          </div>
                                        </>
                                      )
                                    );
                                  })}

                                  {data.data.length > 3 ? (
                                    <div className="more">+1 more</div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </>
                            );
                          })}

                          <div
                            className={
                              index2 < 5
                                ? each.jsDate.split(",")[0] ===
                                  currentDateFormat()
                                  ? "status-wrapper status-wrapper-current-border xxxx"
                                  : "status-wrapper xxxx"
                                : each.jsDate.split(",")[0] ===
                                  currentDateFormat()
                                ? "status-wrapper status-wrapper-current-border dddd"
                                : "status-wrapper dddd"
                            }
                          >
                            <div className="date-header">
                              {console.log}
                              {each.date} of {months[each.month]},{" "}
                              {calendar.current}
                            </div>

                            {currente.length === 0 && (
                              <div
                                style={{
                                  font: "normal normal normal 16px/19px Lato",
                                  color: "#AEBACA",
                                  padding: "15px",
                                }}
                              >
                                No events or activity on this day
                              </div>
                            )}

                            {currente.length > 0 && (
                              <>
                                <div className="custom-table">
                                  <div className="head-tr">
                                    <div className="today">Today</div>
                                    <div className="name-room">Name - Room</div>
                                    <div className="host">Hosts</div>
                                    <div className="status">Status</div>
                                    <div className="type">Type</div>
                                  </div>

                                  {currente.map((data, index) => {
                                    return (
                                      <>
                                        <div
                                          className={
                                            each.jsDate.split(",")[0] ===
                                            currentDateFormat()
                                              ? "body-tr body-tr-cuurent"
                                              : "body-tr"
                                          }
                                        >
                                          <div className="today">
                                            {data.time}
                                          </div>
                                          <div className="name-room">
                                            <span style={{ color: "#000" }}>
                                              {data.name}
                                            </span>{" "}
                                            - {data.room}
                                          </div>
                                          <div className="host">
                                            {data.host}
                                          </div>
                                          <div className="status">
                                            {data.statu ? (
                                              <AiOutlineCheck
                                                color="#33E68D"
                                                size={18}
                                              />
                                            ) : (
                                              <AiOutlineClose
                                                color="#FF4B4B"
                                                size={18}
                                              />
                                            )}
                                          </div>
                                          <div className="type">
                                            <AiOutlineShopping
                                              color="#29BDEF"
                                              size={18}
                                            />
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                                <div className="no-more">No more bookings.</div>
                              </>
                            )}
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomeCalendar;
