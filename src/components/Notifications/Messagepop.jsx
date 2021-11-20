import React, { useState } from "react";
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
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsPencil } from "react-icons/bs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { setSendMessage } from "../../Redux/HomeReducer";

const Messagepop = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <>
      {" "}
      <div className="MesagepopdivDiv">
        <Popper
          className="popper-wrapper"
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className="mainPopper01" sx={{ boxShadow: 3 }}>
                <div
                  className="Messagepop"
                  style={{ overflowY: "auto", maxHeight: "400px" }}
                >
                  <div className="buttonsmobile121">
                    <div className="mbilebutton01 bwidth">
                      <div
                        className="react-date-pick bwidth1"
                        style={{ paddingRight: "0px" }}
                      >
                        <DatePicker
                          onChange={onChange}
                          value={value}
                          calendarIcon={
                            <CalendarTodayIcon style={{ color: "#AEBACA" }} />
                          }
                        />
                      </div>
                      <button
                        className="button2 bwidth"
                        onClick={() => dispatch(setSendMessage(true))}
                      >
                        Send New Message{" "}
                        <AiOutlineMail style={{ fontSize: "20px" }} />
                      </button>
                    </div>
                    <div className="mbilebutton1">
                      <button className="button3 bwidth">Add new folder</button>
                      <button className="button4 bwidth">
                        Received messages{" "}
                        <span
                          className="search_icon "
                          style={{ float: "right" }}
                        >
                          {" "}
                          <BiChevronRight style={{ fontSize: "20px" }} />
                        </span>
                      </button>
                    </div>
                    <div className="mbilebutton1">
                      <button className="button5 bwidth" disabled>
                        <BsThreeDotsVertical
                          style={{ fontSize: "24px", color: "#AEBACA" }}
                        />{" "}
                        Sent items
                        <span style={{ float: "right" }}>
                          {" "}
                          <BiChevronRight
                            style={{ fontSize: "20px", color: "#AEBACA" }}
                          />
                        </span>
                      </button>
                      <button className="button6 bwidth">
                        <BsThreeDotsVertical
                          style={{ fontSize: "24px", color: "#AEBACA" }}
                        />{" "}
                        Custom title
                        <span style={{ float: "right", color: "#AEBACA" }}>
                          {" "}
                          <BsPencil
                            style={{ fontSize: "16px", marginRight: "6px" }}
                          />
                          <RiDeleteBinLine
                            style={{ fontSize: "16px", marginRight: "6px" }}
                          />
                          <BiChevronRight style={{ fontSize: "20px" }} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>

        <Grid container justifyContent="center">
          <Grid item style={{ display: "contents" }}>
            <BsFillPlusSquareFill
              size={34}
              style={{
                color: "#29BDEF",

                cursor: "pointer",
              }}
              onClick={handleClick("bottom-end")}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Messagepop;
