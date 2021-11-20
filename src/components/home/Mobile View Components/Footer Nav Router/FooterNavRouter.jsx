import React from "react";
import { Link, useHistory } from "react-router-dom";

// icons
import { AiOutlineBars } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { BsStar, BsThreeDots } from "react-icons/bs";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  setMobileSideBar,
  setOpenMembership,
  setMobileFooterActive,
} from "../../../../Redux/HomeReducer";

// style
import "./footerNavRouter.scss";

import eventLogo from "../../../../assets/iconEvent.png";
import eventLogo1 from "../../../../assets/Group 5681.png";

const FooterNavRouter = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // url params
  const urlmembership = new URLSearchParams(history.location.search).get(
    "shop"
  );

  return (
    <>
      <div className="footer-nav-router-component">
        <Link
          to="/dashboard?events=true"
          className={
            store.home.openMobileFooterActive.home
              ? "display-center- active"
              : "display-center-"
          }
          onClick={() => {
            dispatch(setOpenMembership(false));
            dispatch(setMobileSideBar(false));
            dispatch(
              setMobileFooterActive({
                home: true,
                reservation: false,
                membership: false,
              })
            );
          }}
        >
          {/* <img src={home} className="icon" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="icon"
          >
            <path
              id="Tracé_1592"
              data-name="Tracé 1592"
              d="M16.869,15.668V8.25a1.326,1.326,0,0,0-.46-1L10.583,2.114l-.9-.8a1.043,1.043,0,0,0-1.368,0l-.9.8L1.59,7.25a1.326,1.326,0,0,0-.46,1v7.425a1.3,1.3,0,0,0,1.342,1.264H15.524A1.309,1.309,0,0,0,16.869,15.668Zm.671-8.88a1.326,1.326,0,0,1,.46,1v7.883A2.407,2.407,0,0,1,15.524,18H2.476A2.407,2.407,0,0,1,0,15.668V7.786a1.326,1.326,0,0,1,.46-1L1.131,6.2,5.759,2.114,6.965,1.049,7.541.542a2.234,2.234,0,0,1,2.917,0l.577.508,1.206,1.065L16.869,6.2ZM7.315,8.815v-1a.4.4,0,0,0-.407-.383h-1.5A.4.4,0,0,0,5,7.814v1a.394.394,0,0,0,.407.383h1.5A.394.394,0,0,0,7.315,8.815ZM6.908,6.366A1.5,1.5,0,0,1,8.446,7.814v1a1.5,1.5,0,0,1-1.538,1.448h-1.5A1.5,1.5,0,0,1,3.87,8.815v-1A1.5,1.5,0,0,1,5.408,6.366ZM13,8.815v-1a.4.4,0,0,0-.407-.383H11.1a.4.4,0,0,0-.407.383v1A.394.394,0,0,0,11.1,9.2h1.5A.394.394,0,0,0,13,8.815ZM12.6,6.366a1.5,1.5,0,0,1,1.538,1.448v1A1.5,1.5,0,0,1,12.6,10.263H11.1A1.5,1.5,0,0,1,9.558,8.815v-1A1.5,1.5,0,0,1,11.1,6.366ZM7.308,13.777v-1a.4.4,0,0,0-.407-.383H5.4a.4.4,0,0,0-.407.383v1a.4.4,0,0,0,.407.383H6.9A.394.394,0,0,0,7.308,13.777ZM6.9,11.328a1.5,1.5,0,0,1,1.538,1.448v1A1.5,1.5,0,0,1,6.9,15.225H5.4a1.5,1.5,0,0,1-1.537-1.448v-1A1.5,1.5,0,0,1,5.4,11.328ZM13,13.777v-1a.4.4,0,0,0-.407-.383h-1.5a.4.4,0,0,0-.407.383v1a.4.4,0,0,0,.407.383h1.5A.4.4,0,0,0,13,13.777Zm-.407-2.449a1.5,1.5,0,0,1,1.538,1.448v1a1.5,1.5,0,0,1-1.538,1.448h-1.5A1.5,1.5,0,0,1,9.55,13.777v-1a1.5,1.5,0,0,1,1.538-1.448Z"
              fill="currentcolor"
            />
          </svg>
          Home
        </Link>

        <div
          className={
            store.home.openMobileFooterActive.reservation
              ? "display-center- active"
              : "display-center-"
          }
          onClick={() => {
            dispatch(setMobileSideBar(false));
            dispatch(setOpenMembership(false));
            dispatch(
              setMobileFooterActive({
                home: false,
                reservation: true,
                membership: false,
              })
            );
            history.push("/dashboard?reservation=true");
          }}
        >
          {/* <AiOutlineBars size={18} className="icon" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon "
            style={{ marginTop: "-10px" }}
            width="43.842"
            height="42.75"
            viewBox="0 0 43.842 42.75"
          >
            <path
              id="Union_91"
              data-name="Union 91"
              d="M12.072,13.246a1.434,1.434,0,1,1,1.435,1.5A1.47,1.47,0,0,1,12.072,13.246Zm-5.692,0a1.432,1.432,0,1,1,1.431,1.5A1.467,1.467,0,0,1,6.38,13.246Zm-5.7,0a1.469,1.469,0,0,1,1.435-1.5,1.5,1.5,0,0,1,0,3A1.471,1.471,0,0,1,.683,13.246ZM12.05,6.94a1.433,1.433,0,1,1,2.863,0,1.433,1.433,0,1,1-2.863,0Zm-5.688,0a1.433,1.433,0,1,1,2.863,0,1.433,1.433,0,1,1-2.863,0Zm-5.689,0A1.464,1.464,0,0,1,2.1,5.441a1.5,1.5,0,0,1,0,3A1.467,1.467,0,0,1,.673,6.94ZM1.36,2.72A1.36,1.36,0,1,1,1.36,0H14.482a1.36,1.36,0,1,1,0,2.72Z"
              transform="translate(14 14)"
              fill="currentcolor"
            />
          </svg>
          <span style={{ marginTop: "-10px" }}> Reservations </span>
        </div>

        <div
          className={
            store.home.openMobileFooterActive.membership
              ? "display-center- active"
              : "display-center-"
          }
          onClick={() => {
            dispatch(setOpenMembership(true));
            dispatch(setMobileSideBar(false));
            dispatch(
              setMobileFooterActive({
                home: false,
                reservation: false,
                membership: true,
              })
            );
            history.push("/dashboard?events=true&membership=true");
          }}
        >
          <BsStar size={18} className="icon" />
          Memberships
        </div>

        <div
          className="display-center-"
          onClick={() => {
            dispatch(setOpenMembership(false));
            dispatch(setMobileSideBar(true));
            // history.push("/dashboard?events=true");
          }}
        >
          <BsThreeDots size={18} className="icon" />
          More
        </div>
      </div>
    </>
  );
};

export default FooterNavRouter;
