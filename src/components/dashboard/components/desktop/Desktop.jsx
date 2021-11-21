import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setDasboard, setViewinfo } from "../../../../Redux/HomeReducer";

// components
import Home from "../../../home/Home";
import Inbox from "../../../Inbox/Inbox";
import Reservation from "../../../Reservation/Reservation";
import Invoices from "../../../home/Invoices/Invoices";
import HomeCalendar from "../../../Home Calender/HomeCalendar";
import SpacesCardDrawer from "../../../home/Mobile View Components/Home Mobile View/components/Home Body Section/Spaces Mobile Card Drawer/SpacesCardDrawer";
import ShopViewInfo from "../../../home/components/shop-component/components/shop-view-info/ShopViewInfo";
import MemberShipRightDrawer from "../../../home/components/View-Memberships/components/membershipRightDrawer";
import MemberShipRightDrawer2 from "../../../home/components/View-Memberships/components/membershipdrawer2";
import CardViewInfo from "../../../home/components/events-component/components/card-view-info/CardViewInfo";
import CalendarComponentRightDrawer from "../../../home/components/calendar-component-main/calendar-component-main";
import CheckOut from "../../../Checkout Component/CheckOut";
import MakeAppointmentMain from "../../../home/components/Make-Appointment/make-appointment-main";
import BookingConfirmation from "../../../Booking Confirmation/BookingConfirmation";
import ViewMemberships from "../../../home/components/View-Memberships/ViewMemberships";
import AppointmentCardDailog from "../../../home/components/appointments-component/appointment-card-dailog/AppointmentCardDailog";
import EventMobileCalendar from "../../../home/Mobile View Components/Home Mobile View/components/Home Body Section/Event Mobile Calendar/EventMobileCalendar";
import SpacesCardDailog from "../../../home/components/spaces-component/space-card-dailog/SpaceCardDailog";
import Profileform from "../../Profile setting/Profileform";

// style
import "./desktop.scss";
// import Sidebar from "../sidebar/Sidebar";

const Desktop = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.home.openComponent);

  // const home = new URLSearchParams(history.location.search).get("home");
  const calendar = new URLSearchParams(history.location.search).get("calendar");

  const reservation = new URLSearchParams(history.location.search).get(
    "reservation"
  );
  const invoice = new URLSearchParams(history.location.search).get("invoice");
  const chat = new URLSearchParams(history.location.search).get("chat");

  useEffect(() => { }, [history]);

  const urlprofile = new URLSearchParams(history.location.search).get(
    "profile"
  );

  useEffect(() => {
    if (urlprofile === "true") {
      setOpenSidebar(true);
    } else {
      setOpenSidebar(false);
    }
  }, [history.location.search]);

  return (
    <>
      <div className="desktop-component">
        {reservation ? (
          <Reservation />
        ) : calendar ? (
          <HomeCalendar />
        ) : chat ? (
          <Inbox />
        ) : invoice ? (
          <Invoices />
        ) : (
          <Home />
        )}

        {/* web components */}
        <ShopViewInfo />
        <CardViewInfo />
        <CheckOut />
        <MakeAppointmentMain />
        <BookingConfirmation />
        <ViewMemberships />
        <MemberShipRightDrawer />
        <MemberShipRightDrawer2 />
        <AppointmentCardDailog />
        <SpacesCardDailog />
        {openSidebar && <Profileform />}

        {/* mobile components */}
        <EventMobileCalendar />
        <SpacesCardDrawer />

        <CalendarComponentRightDrawer />
      </div>
    </>
  );
};

export default Desktop;
