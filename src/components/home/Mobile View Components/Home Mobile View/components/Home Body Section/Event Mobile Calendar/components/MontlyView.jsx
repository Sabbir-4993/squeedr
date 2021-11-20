import React, { useState, useEffect } from "react";

// calender
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import moment from "moment";

// style
import EventMobileCalendarCard from "./EventMobileCalendarCard";

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

const eventCount = [
  {
    date: "10/7/2021",
    event: 5,
  },
  {
    date: "10/22/2021",
    event: 7,
  },
  {
    date: "10/29/2021",
    event: 3,
  },
  {
    date: "11/1/2021",
    event: 6,
  },
  {
    date: "11/10/2021",
    event: 2,
  },
  {
    date: "11/16/2021",
    event: 8,
  },
  {
    date: "11/26/2021",
    event: 3,
  },
];

const number = [1, 2, 3, 4];

const MontlyView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
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

  const onSelectDate = (date) => {
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
  };

  function currentDateFormat() {
    var today = new Date();
    // var dd = String(today.getDate()).padStart(2, "0");
    // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();

    console.log(today.getMonth());

    today = `${mm}/${dd}/${yyyy}`;
    return today;
  }

  return (
    <>
      <div className="calendar-month-view">
        {/* Controler */}
        <div className="calendar-controler">
          {/* back */}
          <div className="leftIconDiv" onClick={onClickPrevious}>
            <AiOutlineLeft />
          </div>

          <div className="monthYearName">
            {months[calendar.month]} &nbsp; <span>{calendar.current}</span>
          </div>

          {/* forward */}
          <div className="rightIconDiv" onClick={onClickNext}>
            <AiOutlineRight />
          </div>
        </div>

        {/* Calendar */}
        <div className="mainCalendarComponent">
          <table>
            <thead>
              <tr>
                {days.map((day) => (
                  <td key={day}>
                    <div className="mobile-table-head">{day}</div>
                  </td>
                ))}
              </tr>
            </thead>

            <tbody>
              {dates.length > 0 &&
                dates.map((week) => (
                  <tr key={JSON.stringify(week[0])}>
                    {week.map((each) => (
                      <td key={JSON.stringify(each)}>
                        <div className="date-cell-wrapper">
                          <div
                            onClick={() => onSelectDate(each)}
                            className={
                              each.jsDate.split(",")[0] === currentDateFormat()
                                ? "dates-div dates-div-current"
                                : "dates-div"
                            }
                          >
                            {console.log(
                              "monthly view => Each.jsDate",
                              each.jsDate.split(",")[0]
                            )}
                            <div
                              className={
                                each.jsDate.split(",")[0] ===
                                currentDateFormat()
                                  ? "date date-current"
                                  : each.month === new Date().getMonth() &&
                                    each.year === new Date().getFullYear()
                                  ? "date"
                                  : "date not-current-month"
                              }
                            >
                              {each.date}
                            </div>

                            {eventCount.map((data, index) => {
                              return (
                                <>
                                  {each.jsDate.split(",")[0] === data.date ? (
                                    <div
                                      className={
                                        (new Date().getDate() == each.date &&
                                          new Date().getMonth() == each.month &&
                                          new Date().getFullYear() ==
                                            each.year) ||
                                        moment(
                                          each.year +
                                            "-" +
                                            (each.month == 11
                                              ? 12
                                              : each.month == 0
                                              ? 1
                                              : each.month) +
                                            "-" +
                                            each.date
                                        ).isAfter(
                                          new Date().getFullYear() +
                                            "-" +
                                            new Date().getMonth() +
                                            "-" +
                                            new Date().getDate()
                                        )
                                          ? "events"
                                          : "events event-pre"
                                      }
                                    >
                                      {data.event}
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              );
                            })}
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

      <div className="calendar-bottom"></div>

      {/* date wrapper */}
      <div className="date-wrapper">
        {/* time-day div */}
        <div className="date">April 20 - April 24</div>
        {number.map(() => {
          return (
            <>
              <EventMobileCalendarCard />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MontlyView;
