import React, { useState, useEffect } from "react";
import {Drawer, TimePicker} from "antd";
import { Menu, Dropdown, Button, Radio, Space } from "antd";
import { GrFormClose } from "react-icons/gr";
import { Modal, Box } from "@mui/material/";


import { BiLink } from "react-icons/bi";

import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import Switch from "@mui/material/Switch";

import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

import { GoPrimitiveDot } from "react-icons/go";
import { MdEventAvailable } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";
import { Button as MButton } from "@mui/material";
import "./calendar-component-main.scss";
import {
  setCalender,
  setCheckOut,
  setselecttime,
} from "../../../../Redux/HomeReducer";
import { AiOutlineClockCircle, AiOutlineCheckCircle } from "react-icons/ai";
import Selecttime from "./selecttime";
// import Selecttime from "./selecttime";
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
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const drop = [
  {
    id: 1,
    start: "16:00",
    end: "16:45 hrs",
    pick: "1",
  },
  {
    id: 2,
    start: "15:00",
    end: "15:45 hrs",
    pick: "FULL",
  },
  {
    id: 3,
    start: "12:00",
    end: "12:45 hrs",
    pick: "Now",
  },
  {
    id: 1,
    start: "16:00",
    end: "16:45 hrs",
    pick: "1",
  },
  {
    id: 2,
    start: "15:00",
    end: "15:45 hrs",
    pick: "FULL",
  },
  {
    id: 3,
    start: "12:00",
    end: "12:45 hrs",
    pick: "Now",
  },
  {
    id: 1,
    start: "16:00",
    end: "16:45 hrs",
    pick: "1",
  },
];

const item = [1, 2];

const CalendarComponentRightDrawer = () => {
  const history = useHistory();
  const [act, setact] = useState(1);
  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [newDateSelected, setNewSelectedDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [working, setWworking] = useState(false);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
    current: selectedDate.getFullYear(),
  });
  const [data, setData] = useState([
    { timetext: "19:00 - 19:45 hrs", time: 19 },
    { timetext: "18:00 - 18:45 hrs", time: 18 },
    { timetext: "17:00 - 17:45 hrs", time: 17 },
    { timetext: "16:00 - 16:45 hrs", time: 16 },
    { timetext: "15:00 - 15:45 hrs", time: 15 },
    { timetext: "14:00 - 14:45 hrs", time: 14 },
    { timetext: "13:00 - 13:45 hrs", time: 13 },
    { timetext: "12:00 - 12:45 hrs", time: 12 },
  ]);
  const [Mainevents, setMainevents] = useState([]);
  const [currentDateEvents, setCurrentDateEvents] = useState([]);
  const [currentslot, setCurrentslot] = useState("11:00 - 11:45 hrs");
  const [eventstobeMap, setevettobemap] = useState([]);
  const [currentaddedEvent, setcurrentAddedEvent] = useState({});
  const [state, setState] = useState({ visible: false, placement: "right" });
  const [openDrop, setDrop] = useState(false);
  const [checked, setChecked] = useState(false);
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

  const checkSatSun = (date) => {
    let date1 = new Date(date.year, date.month, date.date);
    let day = date1.getDay();
    return day;
  };
  const addevent = async (index, ite) => {
    console.log(ite, "ite....");
    if (moment(new Date()).isAfter(selectedDate, "day")) {
      //prev date check
      alert("Select current date or next");
      return;
    }
    for (let checkdupli = 0; checkdupli < Mainevents.length; checkdupli++) {
      for (
        let checkdupli2 = 0;
        checkdupli2 < Mainevents[checkdupli].events.length;
        checkdupli2++
      ) {
        if (
          Mainevents[checkdupli].events[checkdupli2].time == ite.time &&
          Mainevents[checkdupli].events[checkdupli2].date ==
            selectedDate.toDateString()
        ) {
          alert("already added");
          return;
        }
      }
    }
    setCurrentslot(ite.timetext);
    console.log(
      "in addevent",
      data[index],
      selectedDate.getDate(),
      selectedDate.toDateString()
    );
    let foundkey = false;
    for (let checkmain = 0; checkmain < Mainevents.length; checkmain++) {
      if (Mainevents[checkmain].keyDate == selectedDate.toDateString()) {
        let cloneMaineve = Mainevents;
        cloneMaineve[checkmain].events.push({
          time: ite.time,
          date: selectedDate.toDateString(),
        });
        setMainevents(cloneMaineve);
        updateStatus(cloneMaineve, {
          time: ite.time,
          date: selectedDate.toDateString(),
        });
        foundkey = true;
      }
    }
    if (foundkey == false) {
      let cloneMaineve = Mainevents;
      cloneMaineve.push({
        keyDate: selectedDate.toDateString(),
        events: [{ time: ite.time, date: selectedDate.toDateString() }],
      });
      setMainevents(cloneMaineve);
      updateStatus(cloneMaineve, {
        time: ite.time,
        date: selectedDate.toDateString(),
      });
    }

    setcurrentAddedEvent({ time: ite.time, date: selectedDate.toDateString() });
    console.log(dates, "dates");
    let clonedate = dates;
    setDates(null);
    setDates(clonedate);
    let clonedata = data;
    //setData(null)
    //setData(clonedata)
  };

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

  const onSelectDate = (date) => {
    setNewSelectedDate(new Date(date.year, date.month, date.date));
    setSelectedDate(new Date(date.year, date.month, date.date));
    let founmye = false;
    console.log(new Date(date.year, date.month, date.date), "date selected");
    for (let findmyeve = 0; findmyeve < currentDateEvents.length; findmyeve++) {
      console.log("ll");
      if (
        currentDateEvents[findmyeve].keyDate ==
        new Date(date.year, date.month, date.date).toDateString()
      ) {
        console.log(
          currentDateEvents[findmyeve].keyDate,
          new Date(date.year, date.month, date.date).toDateString(),
          "dddddddddddddd"
        );
        setevettobemap(currentDateEvents[findmyeve].events);
        founmye = true;
      }
    }
    if (founmye == false) {
      console.log("in false onSelketv");
      setevettobemap([]);
    }
    // let date1 = new Date(date.year, date.month, date.date)
    // let day = date1.getDay()
    // console.log("clicked", date, day)
  };

  const setmyEvents = () => {
    console.log(selectedDate);
    let date1 = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );
    let day = date1.getDay();
    if (day == 0 || day == 6) {
      //sat sunday
      alert("Select working hours");
      setWworking(false);
      return;
    }
    setWworking(true);
    let founmye = false;
    for (let findmyeve = 0; findmyeve < currentDateEvents.length; findmyeve++) {
      console.log("ll");
      if (currentDateEvents[findmyeve].keyDate == selectedDate.toDateString()) {
        console.log(currentDateEvents[findmyeve].events, "xxx");
        setevettobemap(currentDateEvents[findmyeve].events);
        founmye = true;
      }
    }
    if (founmye == false) {
      console.log("in false onSelketv");
      setevettobemap([]);
    }
  };

  const updateStatus = (eventarr, cdevent) => {
    //console.log(eventarr, '')

    let Mymaineve = [];

    for (let findarr = 0; findarr < eventarr.length; findarr++) {
      if (eventarr[findarr].keyDate == selectedDate.toDateString()) {
        Mymaineve = eventarr[findarr].events;
      }
    }

    let newarr = [];
    //console.log("updateStatus'''''''", Mymaineve)
    if (Mymaineve.length > 0) {
      for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < Mymaineve.length; i++) {
          let Currenthour = moment(new Date().toLocaleTimeString(), [
            "h:mm A",
          ]).format("HH");
          console.log(Currenthour, Mymaineve[i].time, "Currenthour");
          if (
            moment(new Date()).isAfter(selectedDate, "day") ||
            (new Date().toDateString() == selectedDate.toDateString() &&
              Currenthour > Mymaineve[i].time &&
              data[j].time == Mymaineve[i].time)
          ) {
            console.log("pass");
            newarr.push({
              ...data[j],
              currStat: "pass",
              date: Mymaineve[i].date,
            });
          } else if (
            Currenthour == Mymaineve[i].time &&
            new Date().toDateString() == selectedDate.toDateString() &&
            data[j].time == Mymaineve[i].time
          ) {
            console.log("now", i, j, data[j]);
            newarr.push({
              ...data[j],
              currStat: "now",
              date: Mymaineve[i].date,
            });
          } else if (
            (moment(selectedDate).isAfter(new Date(), "day") ||
              (new Date().toDateString() == selectedDate.toDateString() &&
                Currenthour < Mymaineve[i].time)) &&
            data[j].time == Mymaineve[i].time
          ) {
            console.log("full", i, j, data[j]);
            newarr.push({
              ...data[j],
              currStat: "full",
              date: Mymaineve[i].date,
            });
          } else {
            console.log("dd");
          }
          // else {
          // 	if (Mymaineve.length == 1) {
          // 		newarr.push({ ...data[j], currStat: "1", date: Mymaineve[i].date })
          // 	}
          // 	else {
          // 		for (let removB = 0; removB < newarr.length; removB++) {
          // 			console.log("in con222", data[j].time, data[j], newarr[removB].currStat)
          // 			if (newarr[removB].currStat != 'full' && newarr[removB].currStat != 'now' && newarr[removB].currStat != 'pass') {
          // 				console.log("NEED")
          // 				newarr.push({ ...data[j], currStat: "1", date: Mymaineve[i].date })
          // 			}
          // 		}
          // 	}
          // }
        } //loop1
      } //loop2
    } else {
      console.log("issue 1");
    }
    console.log(newarr, "newArr");
    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    }
    const arr1 = getUniqueListBy(newarr, "time");
    console.log(newarr, arr1, "Our newArr xxx");
    newarr = arr1;
    if (newarr.length < 8) {
      console.log("xxx");
      let helper = [];
      for (let h = 0; h < newarr.length; h++) {
        helper.push(newarr[h].time);
      }

      // let intersection = newarr.filter(x => helper.includes(x.time));
      let difference = data.filter((x) => !helper.includes(x.time));
      for (let di = 0; di < difference.length; di++) {
        newarr.push({
          ...difference[di],
          currStat: "1",
          date: currentaddedEvent.date,
        });
      }
    }

    let findincurrentDateEvents = false;
    for (let final = 0; final < currentDateEvents.length; final++) {
      if (currentDateEvents[final].keyDate == selectedDate.toDateString()) {
        let clonecurrentDateEvents = currentDateEvents;
        clonecurrentDateEvents[final].events = newarr;

        setCurrentDateEvents(clonecurrentDateEvents);
        console.log("in found", clonecurrentDateEvents);
        findincurrentDateEvents = true;
        newarr = [];
      }
    }
    if (findincurrentDateEvents == false) {
      let clonecurrentDateEvents2 = currentDateEvents;
      clonecurrentDateEvents2.push({
        keyDate: selectedDate.toDateString(),
        events: newarr,
      });
      console.log("in found false xxx", clonecurrentDateEvents2);
      setCurrentDateEvents(clonecurrentDateEvents2);
      newarr = [];
    }
    setmyEvents();
  };

  const checkevents = (date) => {
    let date1 = new Date(date.year, date.month, date.date);
    let events = 10;
    let curr = null;
    for (let i = 0; i < Mainevents.length; i++) {
      if (Mainevents[i].keyDate == date1.toDateString()) {
        events = events - Mainevents[i].events.length;
      }
    }

    return events;
  };

  // url params
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");

  const urlShop = new URLSearchParams(history.location.search).get("shop");

  const onClose = () => {
    if (urlEvents === "true") {
      dispatch(setCalender(false));
      history.push("/dashboard?events=true");
    } else if (urlAppointments === "true") {
      dispatch(setCalender(false));
      history.push("/dashboard?appointments=true");
    } else if (urlSpaces === "true") {
      dispatch(setCalender(false));
      history.push("/dashboard?spaces=true");
    } else if (urlShop === "true") {
      dispatch(setCalender(false));
      history.push("/dashboard?shop=true");
    } else if (urlPernety === "true") {
      dispatch(setCalender(false));
      history.push("/dashboard?pernety=true");
    }
  };

  const continueCheckout = () => {
    if (urlEvents === "true") {
      history.push("/dashboard?events=true&checkout=true");
      dispatch(setCalender(false));
      dispatch(setCheckOut(true));
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true&checkout=true");
      dispatch(setCalender(false));
      dispatch(setCheckOut(true));
    } else if (urlSpaces === "true") {
      history.push("/dashboard?spaces=true&checkout=true");
      dispatch(setCalender(false));
      dispatch(setCheckOut(true));
    } else if (urlShop === "true") {
      history.push("/dashboard?shop=true&checkout=true");
      dispatch(setCalender(false));
      dispatch(setCheckOut(true));
    } else if (urlPernety === "true") {
      history.push("/dashboard?pernety=true&checkout=true");
      dispatch(setCalender(false));
      dispatch(setCheckOut(true));
    }
  };
  console.log("llllllll", newDateSelected.getDate());

  return (
    <>
      {/* web calendar */}
      <Drawer
        width="570px"
        placement={state.placement}
        closable={false}
        onClose={onClose}
        visible={store.home.openCalender}
        key={state.placement}
        className="web-calendar-11"
      >
        <>
          <div className="mainContainerCalendar">
            <div className="mainCalendarDialog">
              {/* Header title */}
              <div className="header">
                <MdClose
                  className="md-icon"
                  style={{ color: "#000" }}
                  onClick={onClose}
                />

                <div className="title">Kundalini Yoga with Carl Johnson</div>

                <div className="copy-link-div">
                  <div className="copy-link">
                    <BiLink size={16} />
                  </div>

                  <span>copy link</span>
                </div>
              </div>

              {/* Controler */}
              <div className="informationMonthCalendar">
                <div className="monthNameCalendar">
                  {/* back */}
                  <div className="leftIconDiv" onClick={onClickPrevious}>
                    <AiOutlineLeft />
                  </div>

                  <div className="monthYearNameCalendar">
                    <div className="month">
                      {months[calendar.month]}, <span>{calendar.current}</span>
                    </div>
                  </div>

                  {/* forward */}
                  <div className="rightIconDiv" onClick={onClickNext}>
                    <AiOutlineRight />
                  </div>
                </div>

                <div className="informationShowingCalendar">
                  {/* available */}
                  <div className="availableDatesInfoDiv">
                    <GoPrimitiveDot
                      style={{
                        color: "#29BDEF",
                      }}
                    />
                    <p
                      style={{
                        marginBottom: "0rem",
                        color: "#AEBACA",
                      }}
                    >
                      Available Dates
                    </p>
                  </div>

                  {/* full dates */}
                  <div className="offFullDatesInfoDiv">
                    <GoPrimitiveDot
                      style={{
                        color: "#AEBACA",
                      }}
                    />
                    <p
                      style={{
                        marginBottom: "0rem",
                        color: "#AEBACA",
                      }}
                    >
                      Off / Full Dates
                    </p>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="mainCalendarComponent">
                <table
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRight: "1px solid #aebaca",
                    cursor: "pointer",
                  }}
                >
                  <thead
                    style={{
                      // borderBottom: "#AEBACA 1px solid",
                      background: "#F4F4F4 0% 0% no-repeat padding-box",
                      border: "1px solid #AEBACA",
                      borderRadius: "10px 10px 0px 0px",
                      height: "40px",
                    }}
                  >
                    <tr>
                      {days.map((day) => (
                        <td key={day}>
                          <div className="table-head">{day}</div>
                        </td>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {/* <tr
                      style={{
                        // borderBottom: "#AEBACA 1px solid",
                        background: "#F4F4F4 0% 0% no-repeat padding-box",
                        border: "1px solid #AEBACA",
                        borderRadius: "10px 10px 0px 0px",
                        height: "40px",
                      }}
                    >
                      {days.map((day) => (
                        <td key={day}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <p
                              style={{
                                marginBottom: "0rem",
                              }}
                            >
                              {day}
                            </p>
                          </div>
                        </td>
                      ))}
                    </tr> */}
                    {console.log("kdkd", selectedDate.toDateString())}
                    {dates.length > 0 &&
                      dates.map((week) => (
                        <tr key={JSON.stringify(week[0])}>
                          {week.map((each) => (
                            <td
                              className={
                                selectedDate.toDateString() ==
                                new Date(
                                  each.year,
                                  each.month,
                                  each.date
                                ).toDateString()
                                  ? "select_date"
                                  : null
                              }
                              style={{
                                borderBottom: "1px solid #aebaca",
                                borderLeft: "1px solid #aebaca",
                              }}
                              key={JSON.stringify(each)}
                            >
                              <div
                                onClick={() => onSelectDate(each)}
                                className="dates-div"
                              >
                                <div
                                  className={
                                    selectedDate.toDateString() ==
                                    new Date(
                                      each.year,
                                      each.month,
                                      each.date
                                    ).toDateString()
                                      ? "date-white"
                                      : "date"
                                  }
                                >
                                  {each.date}
                                </div>
                                {checkSatSun(each) != 0 &&
                                  checkSatSun(each) != 6 && (
                                    <div className="round_p">
                                      {selectedDate.toDateString() ==
                                      new Date(
                                        each.year,
                                        each.month,
                                        each.date
                                      ).toDateString()
                                        ? checkevents(each) + "/10"
                                        : checkevents(each)}
                                    </div>
                                  )}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* text */}
              <div className="oneLineTextCalendar">
                Starts from: <span className="hour">16:00 - 16:45 hrs</span>{" "}
                <span className="day">on Tuesday 1st, April 2020.</span>
              </div>

              {/* View 1 */}
              <div
                className={
                  urlAppointments || urlPernety
                    ? "selectMAinDiv"
                    : "display-none"
                }
              >
                <div className="selectMAinPDiv">
                  <div>Start time:</div>

                  <div>(next)</div>
                </div>

                {/* <div className="selectMainComponentDiv">
                  <Dropdown
                    trigger={["click"]}
                    onClick={setmyEvents}
                    overlay={menu}
                  >
                    <Button className="date_btn">dd</Button>
                  </Dropdown>
                </div> */}

                <div
                  className="select-time-pass-full"
                  onMouseOver={() => setmyEvents()}
                >
                  <div className="text">{currentslot}</div>

                  <div className={working ? "drop-down" : "display-none"}>
                    {/* {drop.map((data, index) => {
                      return (
                        <>
                          <div className="option-wrapper">
                            <div className="option-text">
                              {data.start} <span>-{data.end}</span>
                            </div>

                            <div
                              className="full"
                              style={{ backgroundColor: "#29BDEF" }}
                            >
                              {data.pick}
                            </div>
                          </div>
                        </>
                      );
                    })} */}

                    {eventstobeMap.length > 0
                      ? eventstobeMap.map((ite, index) => (
                          <>
                            <div
                              className="option-wrapper"
                              onClick={() => addevent(index, ite)}
                            >
                              <div className="option-text">{ite.timetext}</div>
                              <div
                                className="full"
                                style={{ backgroundColor: "#29BDEF" }}
                              >
                                {ite.currStat}
                              </div>
                            </div>
                          </>
                        ))
                      : working &&
                        [
                          {
                            timetext: "19:00 - 19:45 hrs",
                            time: 19,
                            currStat: "1",
                          },
                          {
                            timetext: "18:00 - 18:45 hrs",
                            time: 18,
                            currStat: "1",
                          },
                          {
                            timetext: "17:00 - 17:45 hrs",
                            time: 17,
                            currStat: "1",
                          },
                          {
                            timetext: "16:00 - 16:45 hrs",
                            time: 16,
                            currStat: "1",
                          },
                          {
                            timetext: "15:00 - 15:45 hrs",
                            time: 15,
                            currStat: "1",
                          },
                          {
                            timetext: "14:00 - 14:45 hrs",
                            time: 14,
                            currStat: "1",
                          },
                          {
                            timetext: "13:00 - 13:45 hrs",
                            time: 13,
                            currStat: "1",
                          },
                          {
                            timetext: "12:00 - 12:45 hrs",
                            time: 12,
                            currStat: "1",
                          },
                        ].map((ite, index) => (
                          <div
                            className="option-wrapper"
                            onClick={() => addevent(index, ite)}
                          >
                            <div className="option-text">{ite.timetext}</div>
                            <div
                              className="full"
                              style={{ backgroundColor: "#29BDEF" }}
                            >
                              {ite.currStat}
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              </div>

              {/* View 2 */}
              <div
                className={
                  urlEvents ? "select-time-btn-wrapper" : "display-none"
                }
              >
                <div className="btn active">14:00 hrs</div>
                <div className="btn">15:00 hrs</div>
                <div className="btn">16:00 hrs</div>
                <div className="btn">17:00 hrs</div>
                <div className="btn">18:00 hrs</div>
                <div className="btn">19:00 hrs</div>
                <div className="btn">20:00 hrs</div>
                <div className="btn">21:00 hrs</div>
                <div className="btn">22:00 hrs</div>
                <div className="btn inactive">23:00 hrs</div>
              </div>

              {/* View 3 */}
              <div className={urlShop || urlSpaces ? "" : "display-none"}>
                <div className="view3 ">
                  <div className="view__start">
                    <div className="start__para">Start time</div>
                    <div className="start__box">
                      <div className="start__text">11:00 hrs</div>
                      <div className="start__icon">
                        <div className="icon1">
                          <TiArrowSortedUp />
                        </div>
                        <div className="icon2">
                          <TiArrowSortedDown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginLeft: "1rem" }} className="view__start">
                    <div className="start__para">End time</div>
                    <div className="start__box">
                      <div className="start__text">4:00 hrs</div>
                      <div className="start__icon">
                        <div className="icon1">
                          <TiArrowSortedUp />
                        </div>
                        <div className="icon2">
                          <TiArrowSortedDown />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="view__switch ">
                  <div className="switch">
                    <label
                      className="toggle_switch"
                      style={
                        checked
                          ? null
                          : {
                              backgroundColor: "#E6E6E6",
                              borderColor: "#E6E6E6",
                            }
                      }
                    >
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          setChecked(e.target.checked);
                        }}
                        className="toggle_checkbox"
                      />
                      <div className="toggle_circle"></div>
                    </label>
                  </div>
                  <div className="switch__para">
                    Lease Space All Day (4 Total)
                  </div>
                </div>
              </div>
              {/* View 3 End */}

              {/* footer */}
              <div className="selectDateAndTimeMaimDiv">
                <div className="select-date-and-time-main-heading-text">
                  Select A Date and Time
                </div>
                <div className="select-date-time-description">
                  Select a time slot from the list. You can select one or
                  more...
                </div>

                <div className="select-date-time-main-btns-div">
                  <div className="select-go-back-btn" onClick={onClose}>
                    Go back
                  </div>
                  <div
                    className="select-continue-btn"
                    onClick={continueCheckout}
                  >
                    Continue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Drawer>

      {/* mobile calendar */}
      <Modal
        open={store.home.openCalender}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mobile-calendar-11"
      >
        <>
          <div className="mainContainerCalendar">
            <div className="mainCalendarDialog">
              {/* Header title */}
              <div className="header">
                <MdClose className="md-icon" onClick={onClose} />

                <div className="title">
                  Studio Corps Pernety Installations (Only Weekend)
                </div>
              </div>

              {/* Select one or More */}
              <div className="select-one-or-more">
                <div className="title">Select One Or More Dates</div>

                <div className="para">
                  Select a time slot from the list. The blue ones are still
                  available:
                </div>
              </div>
              <div className={urlSpaces ? "period" : "display-none"}>
                <div className="mainperiod0">
                  <div
                    className={act === 1 ? "one1 active" : "one1"}
                    onClick={() => {
                      setSelectedDate(new Date());
                      setact(1);
                      setNewSelectedDate(new Date());
                    }}
                  >
                    Today
                  </div>
                  <div
                    className={act === 2 ? "one1 active" : "one1"}
                    onClick={() => {
                      const today = new Date();
                      const tomorrow = new Date(today);

                      setSelectedDate(
                        new Date(tomorrow.setDate(tomorrow.getDate() + 1))
                      );
                      setact(2);
                      setNewSelectedDate(
                        new Date(tomorrow.setDate(tomorrow.getDate()))
                      );
                    }}
                  >
                    Tomorrow
                  </div>
                  <div
                    className={act === 3 ? "one0 active" : "one0"}
                    onClick={() => {
                      var date = new Date(selectedDate);
                      console.log("check---------------", selectedDate);
                      setNewSelectedDate(
                        new Date(date.setDate(date.getDate() + 6))
                      );

                      setact(3);
                    }}
                  >
                    7 Days
                  </div>
                </div>
                <div className="mainperiod1">
                  <div
                    className={act === 4 ? "one1 active" : "one1"}
                    onClick={() => {
                      var date = new Date(selectedDate);
                      console.log("check---------------", selectedDate);
                      setNewSelectedDate(
                        new Date(date.setDate(date.getDate() + 13))
                      );
                      setact(4);
                    }}
                  >
                    14 Days
                  </div>
                  <div
                    className={act === 5 ? "one1 active" : "one1"}
                    onClick={() => {
                      var date = new Date(selectedDate);
                      console.log("check---------------", selectedDate);
                      setNewSelectedDate(
                        new Date(date.setDate(date.getDate() + 29))
                      );
                      setact(5);
                    }}
                  >
                    30 Days
                  </div>
                  <div
                    className={act === 6 ? "one0 active" : "one0"}
                    onClick={() => setact(6)}
                  >
                    Custom
                  </div>
                </div>
              </div>
              {/* Controler */}
              <div className="monthNameCalendar">
                {/* back */}
                <div
                  className="leftIconDiv"
                  onClick={() => {
                    onClickPrevious();
                  }}
                >
                  <AiOutlineLeft />
                </div>

                <div className="monthYearNameCalendar">
                  <div className="month">
                    {months[calendar.month]}, <span>{calendar.current}</span>
                  </div>
                </div>

                {/* forward */}
                <div
                  className="rightIconDiv"
                  onClick={() => {
                    onClickNext();
                  }}
                >
                  <AiOutlineRight />
                </div>
              </div>

              {/* Calendar */}
              <div className="mainCalendarComponent">
                <table
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <thead
                    style={{
                      borderBottom: "1px solid #AEBACA",
                      height: "40px",
                    }}
                  >
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
                      dates.map((week) => (
                        <tr key={JSON.stringify(week[0])}>
                          {week.map((each) => (
                            <td
                              className={
                                selectedDate.toDateString() ===
                                  new Date(
                                    each.year,
                                    each.month,
                                    each.date
                                  ).toDateString() ||
                                (each.date >= selectedDate.getDate() &&
                                  each.month === selectedDate.getMonth() &&
                                  each.year === selectedDate.getFullYear() &&
                                  each.date <= newDateSelected.getDate() &&
                                  each.month === newDateSelected.getMonth() &&
                                  each.year === newDateSelected.getFullYear())
                                  ? "select_date"
                                  : null
                              }
                              style={{
                                borderBottom: "1px solid #aebaca",
                                borderLeft: "1px solid #aebaca",
                              }}
                              key={JSON.stringify(each)}
                            >
                              <div
                                onClick={() => onSelectDate(each)}
                                className="dates-div"
                              >
                                <div
                                  className={
                                    selectedDate.toDateString() ==
                                      new Date(
                                        each.year,
                                        each.month,
                                        each.date
                                      ).toDateString() ||
                                    (each.date >= selectedDate.getDate() &&
                                      each.date <= newDateSelected.getDate())
                                      ? "date-white"
                                      : "date"
                                  }
                                >
                                  {each.date}
                                </div>
                                {checkSatSun(each) != 0 &&
                                  checkSatSun(each) != 6 && (
                                    <div className="round_p">
                                      {selectedDate.toDateString() ==
                                      new Date(
                                        each.year,
                                        each.month,
                                        each.date
                                      ).toDateString()
                                        ? checkevents(each) + "/10"
                                        : checkevents(each)}
                                    </div>
                                  )}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {/* // VIEW 3 */}
              <div
                className="view3 "
                style={{ display: urlSpaces ? "flex" : "none" }}
              >
                <div className="view__start">
                  <div className="start__para">Start time</div>

                  <div className="start__box">
                    <div className="start__text">
                     11.00 hrs
                    </div>
                    <div className="start__icon">
                      <div className="icon1">
                        <TiArrowSortedUp />
                      </div>
                      <div className="icon2">
                        <TiArrowSortedDown />
                      </div>
                    </div>
                  </div>


                </div>

                <div className="view__start mar-t">
                  <div className="start__para">End time</div>
                  <div className="start__box">
                    <div className="start__text">4:00 hrs</div>
                    <div className="start__icon">
                      <div className="icon1">
                        <TiArrowSortedUp />
                      </div>
                      <div className="icon2">
                        <TiArrowSortedDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={urlSpaces ? "view__switch" : "display-none"}>
                <div className="switch">
                  <label
                    className="toggle_switch"
                    style={
                      checked
                        ? null
                        : { backgroundColor: "#E6E6E6", borderColor: "#E6E6E6" }
                    }
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setChecked(e.target.checked);
                      }}
                      className="toggle_checkbox"
                    />
                    <div className="toggle_circle"></div>
                  </label>
                </div>
                <div className="switch__para">
                  Lease Space All Day (4 Total)
                </div>
              </div>

              <div className={urlSpaces ? "divider-mob" : "display-none"}>
                <div className="divider"></div>
              </div>

              <div
                className={
                  urlEvents || urlAppointments || urlShop
                    ? "mbuttons"
                    : "display-none"
                }
              >
                <div className="selected">
                  <AiOutlineCheckCircle
                    style={{ marginRight: "7px", color: "white" }}
                  />
                  Selected
                </div>
                <div
                  className="selected"
                  onClick={() => {
                    dispatch(setselecttime(true));
                    dispatch(setCalender(false));
                  }}
                >
                  <AiOutlineClockCircle
                    style={{ marginRight: "7px", color: "white" }}
                  />
                  Other time
                </div>
              </div>

              <div className="oneLineTextCalendar">
                Starts from: <span className="hour">16:00 - 16:45 hrs</span>{" "}
                <span className="day">on Tuesday 1st, April 2020.</span>
              </div>

              {/* footer */}
              <div className="btns-div">
                <div
                  className="select-go-back-btn"
                  onClick={() => {
                    if (urlEvents === "true") {
                      dispatch(setCalender(false));
                      history.push("/dashboard?events=true");
                    } else if (urlAppointments === "true") {
                      dispatch(setCalender(false));
                      history.push("/dashboard?appointments=true");
                    } else if (urlSpaces === "true") {
                      dispatch(setCalender(false));
                      history.push("/dashboard?spaces=true");
                    } else if (urlShop === "true") {
                      dispatch(setCalender(false));
                      history.push("/dashboard?shop=true&shop-info=true");
                    }
                  }}
                >
                  Go back
                </div>
                <div
                  className="select-continue-btn"
                  onClick={() => {
                    if (urlEvents === "true") {
                      dispatch(setCalender(false));
                      dispatch(setCheckOut(true));

                      history.push("/dashboard?events=true&checkout=true");
                    } else if (urlAppointments === "true") {
                      dispatch(setCalender(false));
                      dispatch(setCheckOut(true));

                      history.push(
                        "/dashboard?appointments=true&checkout=true"
                      );
                    } else if (urlSpaces === "true") {
                      dispatch(setCalender(false));
                      dispatch(setCheckOut(true));

                      history.push("/dashboard?spaces=true&checkout=true");
                    } else if (urlShop === "true") {
                      dispatch(setCalender(false));
                      dispatch(setCheckOut(true));
                      history.push("/dashboard?shop=true&checkout=true");
                    }
                  }}
                >
                  Continue
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
      <Selecttime />
    </>
  );
};

export default CalendarComponentRightDrawer;
