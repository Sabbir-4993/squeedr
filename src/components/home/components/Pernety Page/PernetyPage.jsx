import React from "react";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
// redux
import { useSelector } from "react-redux";

// component
import SearchSelect from "../search-select/SearchSelect";

// antdesign
import { DatePicker } from "antd";
import moment from "moment";
import e from "../../../../assets/home-page/e.png";
// image
import work1 from "../../../../assets/home-page/work1.png";
import work from "../../../../assets/home-page/work.png";
import cardpic from "../../../../assets/home-page/event.png";

// style
import "./pernetypage.scss";
import Card from "../events-component/components/card/Card";

const card = [
  {
    id: 1,
    status: "#65F8FD",
    title: "English Class",
    duration: "120 min",
    avail: "Monday, Tuesday, Wednesday",
    loca: "Zoom Meeting",
    img: e,
  },
  {
    id: 2,
    status: "#FDCF65",
    title: "English Class",
    duration: "120 min",
    avail: "Monday, Tuesday, Wednesday",
    loca: "Zoom Meeting",
    img: e,
  },
];

const PernetyPage = () => {
  // Redux
  const store = useSelector((state) => state);

  // Current Date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  return (
    <>
      <div className="pernety-page-component">
        <div className="home-pernety-tag-wrapper">
          <div className="pernety-main">
            <img src={work1} alt="" />
            <span>{store.home.openPernetyPage.title}</span>
            <AiFillCaretDown className="icon" />
          </div>

          <div className="pernety-drop">
            <div className="text">
              <img src={work} alt="" />

              <div>
                Parodi{" "}
                <span style={{ font: "normal normal 300 20px/24px Lato" }}>
                  (Paris...)
                </span>
              </div>
            </div>

            <div className="text">
              <img src={work} alt="" />

              <div>
                Plaza{" "}
                <span style={{ font: "normal normal 300 20px/24px Lato" }}>
                  (Lyon, …)
                </span>
              </div>
            </div>

            <div className="text">
              <img src={work} alt="" />

              <div>Home page</div>
            </div>
          </div>
        </div>

        <div className="head-div">
          <div className="title">Recent Events</div>
          <div className="subtitle">
            Select a Studio Corps & Forme location to book events, or tap on any
            name to see it directly.
          </div>
        </div>

        <div className="calender-search">
          <SearchSelect />

          <div className="calender-div">
            <DatePicker
              defaultValue={moment(`${today}`, "DD/MM/YYYY")}
              format="DD/MM/YYYY"
            />
          </div>
        </div>

        <div className="card-main">
          {card.map((item, index) => {
            return (
              <>
                {/* <Cardnoc
                  key={index}
                  img={item.img}
                  status={true}
                  color={item.status}
                  title={item.title}
                  duration={item.duration}
                  avail={item.avail}
                  loca={item.loca}
                  none={true}
                  viewdailog="appointment" 
                />
                  */}
                <Card
                  key={index}
                  img={item.img}
                  status={true}
                  color={item.status}
                  title={item.title}
                  duration={item.duration}
                  avail={item.avail}
                  loca={item.loca}
                  none={true}
                  viewdailog="appointment"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PernetyPage;
