import React, { useState, useEffect } from "react";
import EventMobileCalendarCard from "./EventMobileCalendarCard";

// calender
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import moment from "moment";

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

const number = [1, 2, 3, 4];

const WeeklyView = () => {
  const [row, setRow] = useState(0);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
    current: selectedDate.getFullYear(),
  });

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

    if (row > dates.length - 1) {
      setRow(0);
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
    } else {
      setRow(row + 1);
    }
  };

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    console.log(selectedDate.getFullYear());
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);
    console.log("pre", dates);

    if (row > 0) {
      setRow(row - 1);
    } else {
      setRow(dates.length - 1);
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
    }
  };

  return (
    <>
      <div className="calendar-weekly-view">
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
              {/* {dates.length > 0 &&
                dates.map((week) => (
                  <tr key={JSON.stringify(week[0])}>
                    {week.map((each, index) => (
                      <td key={JSON.stringify(each)}>
                        <div className="week-dates">{each.date}</div>
                      </td>
                    ))}
                  </tr>
                ))} */}

              {dates.length > 0 &&
                dates.map((week, index) => {
                  return (
                    <>
                      {index == row && (
                        <tr key={JSON.stringify(week[0])}>
                          {week.map((each, index) => (
                            <td key={JSON.stringify(each)}>
                              <div className="week-dates">{each.date}</div>
                            </td>
                          ))}
                        </tr>
                      )}
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* date wrapper */}
      <div className="date-wrapper">
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

export default WeeklyView;
