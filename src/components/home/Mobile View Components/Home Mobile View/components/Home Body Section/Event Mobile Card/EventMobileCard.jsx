import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setSpacesMobileCardDrawer } from "../../../../../../../Redux/HomeReducer";

// image
import img12 from "../../../../../../../assets/mobileView/home/12.png";

// style
import "./eventMobileCard.scss";

const data = [
  {
    full: true,
  },
  {
    full: false,
  },
  {
    full: true,
  },
  {
    full: false,
  },
];

const EventMobileCard = (props) => {
  const history = useHistory();

  // redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [week1, setweek1] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    var week = [];
    var d = new Date();
    var _days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 1; i <= 7; i++) {
      let first = d.getDate() - d.getDay() + i;
      let dt = new Date(d.setDate(first));
      var _day = _days[dt.getDay()];
      var _date = dt.getDate();
      if (_date < 10) {
        _date = "0" + _date;
      }
      week.push({ _day, _date });
      setweek1(week);
    }
  }, []);

  return (
    <>
      <div className="eventMobileCard">
        <div className="dates">
          <table>
            <tr>
              <td className="today">Today</td>
              {week1.map((data, index) => (
                <td key={index}>
                  <div
                    className={
                      data._date === "0" + new Date().getDate()
                        ? "day active"
                        : "day"
                    }
                  >
                    {data._day} {data._date}
                  </div>
                </td>
              ))}
            </tr>
          </table>
        </div>

        <div className="mobile-home-view-card-wrapper">
          {data.map((data, index) => {
            return (
              <>
                <div className="latest-card"
                  onClick={() => {
                    history.push("/dashboard?events=true&event-info=true");
                    dispatch(setSpacesMobileCardDrawer(true));
                  }}
                >
                  <div className="up">
                    <div className="img"></div>

                    <div className="text-wrapper">
                      <div className="title">Crossfit At #Pernety</div>

                      <div className="add">
                        #Pernety - Street Name, District #3423, City
                      </div>

                      <div className="para">
                        <div className="time">join Kerry . Tomorrow, 14.30</div>

                        <div className={props.full ? "slot" : "display-none"}>
                          <span
                            style={{
                              color: "#33E68D",
                              display: data.full ? "none" : "",
                            }}
                          >
                            2 left
                          </span>
                          <span
                            style={{
                              color: "#FF0000",
                              display: data.full ? "" : "none",
                            }}
                          >
                            Full
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottom">
                    <div
                      style={{ display: data.full ? "none" : "block" }}
                    ></div>

                    <div style={{ display: data.full ? "block" : "none" }}>
                      <div
                        className={success ? "display-none" : "waiting"}
                        onClick={() => {
                          setSuccess(true);
                        }}
                      >
                        Add To Waiting List
                      </div>

                      <div className={success ? "success" : "display-none"}>
                        <img src={img12} alt="" />
                        <span>Successfully added to waiting list</span>
                      </div>
                    </div>

                    <div
                      className={props.full ? "btn-wrapper" : "display-none"}
                      
                    >
                      € 49.00
                    </div>
                    <div
                      className={
                        props.full ? "display-none" : "btn-wrapper-available"
                      }
                      onClick={() => {
                        history.push(
                          "/dashboard?appointments=true&appointments-info=true"
                        );
                        dispatch(setSpacesMobileCardDrawer(true));
                      }}
                    >
                      <span style={{ color: "#fff" }}>Available Time: </span>
                      <span>&nbsp;14:30</span>
                    </div>
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

export default EventMobileCard;
