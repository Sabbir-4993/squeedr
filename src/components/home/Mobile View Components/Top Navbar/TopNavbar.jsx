import React from "react";
import { useHistory, Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setNavCalender } from "../../../../Redux/HomeReducer";

// component
import Notifications from "../../../../components/Notifications/Notifications";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

// image
import logo1 from "../../../../assets/mobileView/home/1.png";

// style
import "./topNavbar.scss";

const TopNavbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <div className="top-navbar-component">
        <div
          className="logo"
          onClick={() => {
            history.push("/dashboard?events=true");
          }}
        >
          <img src={logo1} alt="" />
        </div>

        <div className="right-icons">
          <FaRegCalendarAlt
            color="#80D0E1"
            style={{
              fontSize: "17px",
              marginRight: "10px",
            }}
            onClick={() => {
              dispatch(setNavCalender(true));
            }}
          />

          {/* <Link to="/dashboard?chat=true">
            <BsFillChatDotsFill
              style={{
                marginBottom: "3px",
                fontSize: "17px",
                marginRight: "10px",
                color: "#29bdef",
              }}
            />
          </Link>

          <AiOutlineShoppingCart
            style={{ fontSize: "20px", marginRight: "10px", color: "#29bdef" }}
          /> */}

          <Notifications />
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
