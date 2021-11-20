import React from "react";
// import './App.css';
import Login from "./components/Log In - Onboarding/mainLogin";
import Dashboard from "../src/components/dashboard/Dashboard";
import ConfirmationNotice from "./components/Notice - Onboarding/confirmationNotice";
import SignUp from "./components/Sign Up - Onboarding/mainSignUp";
import ForgotPassword from "./components/Forgot Password - Onboarding/ForgotPassword";
import Inbox from "./components/Inbox/Inbox";
import SearchBar from "./components/Calendar Pop Up - 3/search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Notifications from "./components/Notifications/Notifications";
import EmptyForm from "./components/Empty Dashboard - 6/emptyForm.js";
import CalendarComponent from "./components/calendar-component/calendarComponent";
import Invoice from "./components/home/Invoices/Invoices";
import CheckOut from "./components/Checkout Component/CheckOut";
import MembershipNameDrawer from "./components/Membership - 2/membership";
import MakeAppointment from "./components/Make Appointment 1 - 2/makeAppointment";
import EventCardDrawer from "./components/home/Mobile View Components/Home Mobile View/components/Home Body Section/Event Mobile Card Drawer/EventCardDrawer";
import Profileform from "./components/dashboard/Profile setting/Profileform";
import ChatContent from "./components/Inbox/chatcontent/chatcontent";
import Mobilechatroom from "./components/Inbox/chatcontent/Mobilechatroom";
import inbox from "./components/Inbox/Inbox";
import Companyinfomain from "./components/home/mobilemodal/Companyinfomain";
import Invoices from "./components/home/Invoices/Invoices";
import EventMobileCalendar from "./components/home/Mobile View Components/Home Mobile View/components/Home Body Section/Event Mobile Calendar/EventMobileCalendar";

// import Dashboard from "../src/components/dashboard/Dashboard";

const App = () => {
  return (
    <>
      {/* <Router> */}
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Redirect exact from="/" to="/login" component={Login} />
        {/* <Route exact path='/login' component={Login} /> */}
        {/* <Route exact path='/dashboard' component={Dashboard} /> */}
        <Route path="/chatroom" component={Mobilechatroom} />
        {/* <Route path="/makeAppointment" component={MakeAppointment} /> */}
        {/* <Route path="/membershipDrawer" component={MembershipNameDrawer} /> */}
        {/* <Route path="/checkout" component={CheckOut} /> */}

        {/* <Route path="/calendar" component={CalendarComponent} /> */}
        {/* <Route path="/search" component={SearchBar} /> */}
        {/* <Route path="/profile-settings" component={EmptyForm} /> */}
        {/* <Route path="/notificationsComponent" component={Notifications} /> */}

        <Route path="/confirmationNotice" component={ConfirmationNotice} />

        {/* <Route exact path='/' component={Login} /> */}
        {/* <Route exact path='/' component={Login} /> */}
        {/* <Route path="/drawer" component={EventCardDrawer} /> */}
        {/* <Route path="/profile_edit" component={Profileform} /> */}
        {/* <Route path="/companyinfo" component={Companyinfomain} /> */}
        {/* <Route path="/inbox" component={Inbox} /> */}
        {/* <Route path="/invoice" component={Invoices} /> */}
        {/* <Route path="/eventmobile" component={EventMobileCalendar} /> */}
      </Switch>
      {/* </Router> */}
      {/* <SignUp /> */}
    </>
  );
};

export default App;
