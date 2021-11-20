import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlinePoundCircle } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { GoListUnordered } from "react-icons/go";
import img1 from "../../../../assets/home-page/view-member-comp.png";
import img2 from "../../../../assets/home-page/view-member-img-2.png";
import img3 from "../../../../assets/home-page/view-member-img-3.png";
import img4 from "../../../../assets/home-page/view-member-img-4.png";
// import MembershipNameDrawer from '../../../Membership - 2/membership';
// import CardViewInfo from '../../components/events-component/components/card-view-info/CardViewInfo';
import MemberShipRightDrawer from "./components/membershipRightDrawer";
import dots1 from "../../../../assets/squeed images/dots1.png";
import dots from "../../../../assets/squeed images/dots2.png";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenMembership,
  setMemberShipRightDrawer,
  setMemberShipRightDrawer2,
} from "../../../../Redux/HomeReducer";

import { Link } from "react-router-dom";
import MemberShipRightDrawer2 from "./components/membershipdrawer2";

const CardView1 = () => {
  return (
    <>
      <div className="div-view-1">
        {/* Side 1  */}
        <div className="text-side">
          <div className="title">Membership's Name Here</div>

          <div className="subtitle">Studio Corps & Forme</div>

          <img src={img1} alt="" className="image-icon" />
        </div>

        {/* Side 2 */}
        <div className="image-div">
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
};

const CardView2 = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // Url Params
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");

  const membershipInfo = () => {
    if (urlEvents === "true") {
      history.push("/dashboard?events=true&membership-info=true");
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true&membership-info=true");
    } else if (urlSpaces === "true") {
      history.push("/dashboard?spaces=true&membership-info=true");
    } else if (urlShop === "true") {
      history.push("/dashboard?shop=true&membership-info=true");
    }
    dispatch(setMemberShipRightDrawer(true));
    dispatch(setOpenMembership(false));
  };
  return (
    <>
      <div className="div-view-2" onClick={membershipInfo}>
        <div className="content">
          {/* profile div */}
          <div className="profile-title">
            <div className="image">
              <img src={img3} alt="" />
            </div>

            <div className="text">
              <div className="title">Anne Lorem Ipsun</div>
              <div className="subtitle">Membership Name</div>
            </div>
          </div>

          {/* down */}
          <div className="down-wrapper">
            <div className="icon-text">
              <IoIosNotificationsOutline color="white" />
              <span>Special priority</span>
            </div>

            <div className="icon-text">
              <GoListUnordered color="white" />
              <span>90 bookings.</span>
            </div>

            <div className="icon-text">
              <FiClock color="white" />
              <span>All year valid.</span>
            </div>
          </div>
          <div className="qr-image">
            <img src={dots} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

const CardActiveView = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // Url Params
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");

  const ActiveCard = () => {
    if (urlEvents === "true") {
      history.push("/dashboard?events=true&active-membership=true");
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true&active-membership=true");
    } else if (urlSpaces === "true") {
      history.push("/dashboard?spaces=true&active-membership=true");
    } else if (urlShop === "true") {
      history.push("/dashboard?shop=true&active-membership=true");
    }
    dispatch(setMemberShipRightDrawer2(true));
    dispatch(setOpenMembership(false));
  };
  return (
    <>
      <div className="div-view-3" onClick={ActiveCard}>
        <div className="top">
          <div className="title">Anne Lorem Ipsun</div>
          <div className="subtitle">Membership Name</div>
        </div>

        <div className="middle">
          <div className="subtitle">ID code</div>
          <div className="title">21415 5415 51545 5454</div>
        </div>

        <div className="end">
          <div className="side1">
            <div className="subtitle">Valid Thru</div>
            <div className="title">12 / 2020</div>
          </div>

          <div className="side2">
            <div className="subtitle">Status</div>
            <div className="title">
              23 <span style={{ color: "#868E96" }}>/ 90 bookings</span>
            </div>
          </div>
        </div>

        <div className="qr-image">
          <img src={img4} style={{ width: "35px", height: "35px" }} alt="" />
          <img src={dots1} style={{ width: "44px", height: "116px" }} alt="" />
        </div>
      </div>
    </>
  );
};

const CardFooter = () => {
  return (
    <>
      <div className="card-text-div">
        <p className="para">
          Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
          vieux whisky au juge blond qui fume sur son île
        </p>

        <p className="read">Continue Reading</p>
      </div>
    </>
  );
};

const ViewMemberCard = (props) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  // Url Params
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");

  const membershipInfo = () => {
    if (urlEvents === "true") {
      history.push("/dashboard?events=true&membership-info=true");
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true&membership-info=true");
    } else if (urlSpaces === "true") {
      history.push("/dashboard?spaces=true&membership-info=true");
    } else if (urlShop === "true") {
      history.push("/dashboard?shop=true&membership-info=true");
    }
    dispatch(setMemberShipRightDrawer(true));
    dispatch(setOpenMembership(false));
  };

  return (
    <>
      {/* Card */}
      <div className="view-memberships-simple-card-wrapper">
        <div className="card-thumbnail-div">
          <div className={props.active ? "dis" : "thumbnail"}>
            <CardView1 />
            <CardView2 />
          </div>

          <div className={props.active ? "thumbnail active" : "dis"}>
            <CardView1 />
            <CardActiveView
            // onClick={() => {
            //   dispatch(setMemberShipRightDrawer2(true));
            //   dispatch(setOpenMembership(false));
            // }}
            />
          </div>

          <div className="active-price-div">
            <div className={props.active ? "dis" : "price"}>
              <AiOutlinePoundCircle className="icon" />
              199.00
            </div>

            <div className={props.active ? "active-member" : "dis"}>
              ACTIVE MEMBERSHIP
            </div>

            <div
              className="tap"
              style={{ display: props.active ? "none" : "block" }}
            >
              {" "}
              <div className="view" onClick={membershipInfo}>
                Tap to open
              </div>
            </div>
          </div>
        </div>

        <CardFooter />
      </div>
    </>
  );
};

export default ViewMemberCard;
