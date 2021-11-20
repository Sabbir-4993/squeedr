import React from "react";
import img1 from "../../../../../../../assets/mobileView/home/5.png";
import EventCardDrawer from "../Event Mobile Card Drawer/EventCardDrawer";
import SpacesCardDrawer from "../Spaces Mobile Card Drawer/SpacesCardDrawer";
import "../Event Mobile Card/eventMobileCard.scss";
import "../../../../../../home/components/events-component/events.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setEventMobileCardDrawer,
  setSpacesMobileCardDrawer,
} from "../../../../../../../Redux/HomeReducer";
import img12 from "../../../../../../../assets/mobileView/home/12.png";
import { SwapVerticalCircleSharp } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const data = [
  {
    full: true,
    left: false,
    wait: true,
    success: false,
  },

  {
    full: false,
    left: true,
    wait: false,
    success: true,
  },

  {
    full: false,
    left: true,
    wait: true,
    success: false,
  },
  {
    full: true,
    left: false,
    wait: false,
    success: true,
  },
];

const AppointementMobileCard = (props) => {
  const history = useHistory();
  // redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className="appointement-MobileCard">
        <div className="date">Monday 21st, April 2020</div>

        <div className="mobile-home-view-card-wrapper">
          {data.map((data, index) => {
            return (
              <>
                <div className="latest-card" 
                  onClick={() => {
                    history.push(
                    "/dashboard?appointments=true&appointments-info=true"
                    );
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

                        <div className="slot">
                          <span
                            style={{
                              color: "#33E68D",
                              display: data.left ? "" : "none",
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
                    <div className={data.wait ? "waiting" : " display-none"}>
                      Add To Waiting List
                    </div>

                    <div className={data.success ? "success" : " display-none"}>
                      <img src={img12} alt="" />
                      <span>Successfully added to waiting list</span>
                    </div>

                    <div
                      className={
                        props.full ? "display-none" : "btn-wrapper-available"
                      }
                      
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

export default AppointementMobileCard;
