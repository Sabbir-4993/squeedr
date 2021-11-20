import React from "react";
import "./Notifications.scss";
import { IoMdNotifications } from "react-icons/io";
import { CgCalendarDates } from "react-icons/cg";
import cardLogo from "../../assets/logInHeaderLogo.png";
import Popper from "@mui/material/Popper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import notification from "../../assets/notificationIcon.png";
import { IoIosCloseCircle } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <>
      {" "}
      <div className="NotificationsDiv">
        <Popper
          className="popper-wrapper"
          style={{ zIndex: "1" }}
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className="mainPopper" sx={{ boxShadow: 3 }}>
                <div
                  className=""
                  style={{ overflowY: "auto", maxHeight: "400px" }}
                >
                  {" "}
                  <Link
                    to="/dashboard?chat=true"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="firstCard">
                      <div className="cardIconDiv">
                        <img className="cardIcon1" src={cardLogo} alt="" />
                      </div>
                      <div className="paragraphicContent">
                        <p className="firstLineFirstCard">
                          New event at #Pernety:&nbsp;
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            Spinnin with Maud
                          </span>
                          (Tues 24, Ap 2020 at 16:00 hrs)
                        </p>
                        <div className="dateAndTimeDiv">
                          <CgCalendarDates
                            style={{
                              marginTop: "4px",
                            }}
                          />
                          <p className="notificationTime"> 32 secs ago</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Divider className="dividerClass" />
                  <Link
                    to="/dashboard?chat=true"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="firstCard">
                      <div className="cardIconDiv2">
                        <img className="cardIcon2" src={cardLogo} alt="" />
                      </div>
                      <div className="paragraphicContent">
                        <p className="firstLineFirstCard">
                          Event cancelled at #Pernety:&nbsp;
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            Spinnin with Maud
                          </span>
                          (24, Ap 2020 at 16:00 hrs)
                        </p>
                        <div className="dateAndTimeDiv">
                          <CgCalendarDates
                            style={{
                              marginTop: "4px",
                            }}
                          />
                          <p className="notificationTime"> 32 secs ago</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Divider className="dividerClass" />
                  <Link
                    to="/dashboard?chat=true"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    <div className="firstCard">
                      <div className="cardIconDiv3">
                        <img className="cardIcon3" src={cardLogo} alt="" />
                      </div>
                      <div className="paragraphicContent">
                        <p className="firstLineFirstCard">
                          Event reschedulled #Pernety:&nbsp;
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            Spinnin with Maud
                          </span>
                          (Tues 24, Ap 2020 at 16:00 hrs)
                        </p>
                        <div className="dateAndTimeDiv3">
                          <CgCalendarDates
                            style={{
                              marginTop: "4px",
                            }}
                          />
                          <p className="notificationTime"> 32 secs ago</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Divider className="dividerClass" />
                  <Link
                    to="/dashboard?chat=true"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    <div className="invitationCardNotification">
                      <div className="cardIconDiv8">
                        <img className="cardIcon8" src={notification} alt="" />
                      </div>
                      <div className="paragraphicMainCardNotifications">
                        <p
                          style={{
                            marginBottom: "0rem",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            Maud Blanc
                          </span>
                          &nbsp; invited you to join
                        </p>
                        <p
                          style={{
                            marginBottom: "0rem",
                          }}
                        >
                          <span
                            style={{
                              color: "#29BDEF",
                            }}
                          >
                            English Class
                          </span>
                          &nbsp; on
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            &nbsp; Monday at 13:30
                          </span>
                        </p>

                        <p
                          style={{
                            marginBottom: "0rem",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            hours(CT)
                          </span>
                          &nbsp; at Studio Corps & Forme
                        </p>

                        <p
                          style={{
                            fontWeight: "bold",
                            marginBottom: "0rem",
                          }}
                        >
                          #Pernety - Gym (Room 12).
                        </p>

                        <div className="accept-decline">
                          <p
                            style={{
                              marginBottom: "0rem",
                              textDecoration: "underline",
                              color: "#29BDEF",
                            }}
                          >
                            Accept
                          </p>
                          <BsDot
                            style={{
                              color: "#AEBACA",
                              fontSize: "28.5px",
                            }}
                          />
                          <p
                            style={{
                              marginBottom: "0rem",
                              textDecoration: "underline",
                              color: "#AEBACA",
                            }}
                          >
                            Decline
                          </p>
                        </div>
                        <div className="dateAndTimeDiv8">
                          <BsDot
                            style={{
                              color: "#29BDEF",
                              fontSize: "40px",
                              marginTop: "-7px",
                            }}
                          />
                          <p
                            style={{
                              marginLeft: "-11px",
                            }}
                            className="pmargintime"
                          >
                            32 sec ago
                          </p>
                        </div>
                      </div>

                      <div className="closeIconDiv">
                        <IoIosCloseCircle className="closeIcon" />
                      </div>
                    </div>
                  </Link>
                  <Divider className="dividerClass" />
                  <Link
                    to="/dashboard?chat=true"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    <div className="firstCard">
                      <div className="cardIconDiv">
                        <img className="cardIcon1" src={cardLogo} alt="" />
                      </div>
                      <div className="paragraphicContent">
                        <p className="firstLineFirstCard">
                          New event at #Pernety:&nbsp;
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            Spinnin with Maud
                          </span>
                          (Tues 24, Ap 2020 at 16:00 hrs)
                        </p>
                        <div className="dateAndTimeDiv">
                          <CgCalendarDates
                            style={{
                              marginTop: "4px",
                            }}
                          />
                          <p className="notificationTime"> 32 secs ago</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Divider className="dividerClass" />
                  <Link
                    to="/dashboard?chat=true"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    <div className="firstCard">
                      <div className="cardIconDiv">
                        <img className="cardIcon1" src={cardLogo} alt="" />
                      </div>
                      <div className="paragraphicContent">
                        <p className="firstLineFirstCard">
                          New event at #Pernety:&nbsp;
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            Spinnin with Maud
                          </span>
                          (Tues 24, Ap 2020 at 16:00 hrs)
                        </p>
                        <div className="dateAndTimeDiv">
                          <CgCalendarDates
                            style={{
                              marginTop: "4px",
                            }}
                          />
                          <p className="notificationTime"> 32 secs ago</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>

        <Grid container justifyContent="center">
          <Grid item style={{ display: "contents" }}>
            <IoMdNotifications
              className="Notifications-icons"
              style={{ cursor: "pointer" }}
              onClick={handleClick("bottom-end")}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Notifications;
