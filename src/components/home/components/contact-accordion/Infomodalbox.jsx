import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material/";
import { IoMdClose } from "react-icons/io";
import { makeStyles } from "@mui/styles";
import SearchSelect from "../../components/search-select/SearchSelect";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom";
// image
import per from "../../../../assets/home-page/per.png";
import homeapp from "../../../../assets/home-page/homeapp.png";
import black from "../../../../assets/home-page/interior.png";
import space from "../../../../assets/home-page/sapce111.png";
import email from "../../../../assets/home-page/email111.png";
import event from "../../../../assets/home-page/cal111.png";
import time from "../../../../assets/home-page/time111.png";

// style
import "./infomodal.scss";

import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

import { HiOutlineMail } from "react-icons/hi";
import ButtonFilter from "../button-filter/ButtonFilter";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  width: "80%",
  bgcolor: "#FFFFFF",
  // border: "2px solid #000",
  boxShadow: "-3px 3px 6px #0000001F",
  borderRadius: "10px",
  p: 3,
};

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",

    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },

  item1: {
    display: "flex",
    gap: "130px",
  },
  closeText: {
    font: "normal normal normal 20px/24px Lato",
    color: "#000000",
  },
  icon: {
    cursor: "pointer",
    color: "#868E96",
    marginRight: "5px",
  },
  loc: {
    marginTop: "5px",
    font: "normal normal normal 14px/20px Lato",
    color: "#868E96",
  },
  bodyWrapper: {
    height: "60vh",
    overflowY: "scroll",
  },
  body: {},
  card: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 1300px)": {
      flexDirection: "column",
    },
  },
  image: {
    width: "300px",
    height: "300px",

    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  data: {
    padding: "10px 0px 0px 30px",
    "@media (max-width: 1000px)": {
      padding: "10px 0px 0px 0px",
    },
  },
  title: {
    textAlign: "left",
    font: "normal normal normal 20px/24px Lato",
    letterSpacing: " 0px",
    color: "#000000",
    opacity: 1,
    fontWeight: "600",
    display: "flex",
    gap: "10px",
  },
  subtitle: {
    marginTop: "20px",
    textAlign: "left",
    font: "normal normal normal 14px/17px Lato",
    letterSpacing: "0px",
    color: "#AEBACA",
    display: "flex",

    gap: "10px",
  },
  subtitle1: {
    textAlign: "left",
    font: " normal normal normal 16px/23px Lato",
    letterSpacing: "0px",
    opacity: "1",
    padding: "10px 0px 0px 0px",

    color: "black",
  },
  subtitle2: {
    textAlign: "left",
    font: " normal normal normal 16px/23px Lato",
    letterSpacing: "0px",
    opacity: "1",
    color: "#AEBACA",
  },
  para: {
    marginTop: "20px",
    font: "normal normal normal 14px/30px Lato",
    color: "#868E96",
  },
  valid: {
    marginTop: "40px",
    font: "normal normal normal 14px/30px Lato",
    color: "#29BDEF",
    "@media (max-width: 1000px)": {
      marginTop: "20px",
    },
  },
  search: {
    background: " #FFFFFF 0% 0% no-repeat padding-Box",
    border: "1px solid #AEBACA",
    borderRadius: "50px",
    width: "300px",
    height: "40px",
    display: "flex",
  },
  button: {
    background: " #29BDEF 0% 0% no-repeat padding-box",
    boxShadow: " 0px 3px 6px #00000029",
    border: " 1px solid #29BDEF",
    borderRadius: "10px",
    opacity: 1,
    height: "50px",
    width: "290px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    font: "normal normal normal 18px/22px Lato",
    letterSpacing: "0px",
    color: "white",
    textTransform: "capitalize",
    opacity: " 1",
    marginBottom: "20px",
  },
  button2: {
    background: " #FFFFFF 0% 0% no-repeat padding-box",

    // border: " 1px solid #29BDEF",
    borderRadius: "10px",
    opacity: 1,
    height: "50px",
    width: "290px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    font: "normal normal normal 18px/22px Lato",
    letterSpacing: "0px",
    color: "#29BDEF",
    textTransform: "capitalize",
    opacity: " 1",
    padding: "0px 20px",
    marginBottom: "20px",
  },
  button3: {
    background: " #FFFFFF 0% 0% no-repeat padding-box",

    // border: " 1px solid #AEBACA",
    borderRadius: "10px",
    opacity: 1,
    height: "50px",
    width: "290px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 20px",
    alignItems: "center",
    font: "normal normal normal 18px/22px Lato",
    letterSpacing: "0px",
    color: "#AEBACA",
    textTransform: "capitalize",
    opacity: " 1",
    marginBottom: "20px",
  },
  divider: {
    margin: "30px 0px",
    background: "#AEBACA",
    width: "100%",

    height: "1px",
  },
  col1: {
    display: "flex",
    "@media (max-width: 1300px)": {
      justifyContent: "space-around",
    },
  },
  col2: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1300px)": {
      justifyContent: "center",
      alignItems: "flex-end",
      marginRight: "14%",
      marginTop: "20px",
    },
  },
});

const Card = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.body}>
        <div className={classes.divider}></div>
        <div className={classes.card}>
          <div className={classes.col1}>
            <img src={black} alt="" className={classes.image} />

            <div className={classes.data}>
              <div className={classes.title}>
                <img alt="" src={homeapp}></img> Pernety
              </div>
              <div className={classes.subtitle}>
                <MdLocationOn
                  style={{
                    color: "#AEBACA",
                    fontSize: "16px",
                    marginLeft: "-3px",
                  }}
                />{" "}
                Address
                {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
              </div>
              <div className={classes.subtitle1}>
                Street Name, District/área #3423, Paris, France
                <h6 className={classes.subtitle2}>
                  - Studio Corps & Forme #Pernety
                </h6>
                {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
              </div>
              <div className={classes.subtitle}>
                <IoMdCall
                  style={{
                    color: "#AEBACA",
                    fontSize: "16px",
                    marginLeft: "-3px",
                  }}
                />{" "}
                Contact:
                {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
              </div>
              <div className={classes.subtitle1}>
                <span style={{ paddingRight: "5px" }}>+33 123 1234,</span> + 33
                22 2343 33
                {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
              </div>
              <div className={classes.subtitle}>
                <HiOutlineMail
                  style={{
                    color: "#AEBACA",
                    fontSize: "16px",
                    marginLeft: "-3px",
                  }}
                />{" "}
                Email:
                {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
              </div>
              <div className={classes.subtitle1}>
                pernety@studiocorps.com
                {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
              </div>
              <div className={classes.item1}>
                <div className={classes.subtitle}>
                  <img alt="" src={space}></img> Spaces:
                  {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
                </div>
                <div className={classes.subtitle}>
                  <img alt="" src={space}></img> Items:
                  {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
                </div>
              </div>
              <div className={classes.item1}>
                <div className={classes.subtitle1}>
                  13 rooms
                  {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
                </div>
                <div
                  className={classes.subtitle1}
                  style={{ paddingLeft: "3px" }}
                >
                  2 items
                  {/* 12vCVR33 <span style={{ color: "#29BDEF" }}>-10%</span> */}
                </div>
              </div>
              {/* <div className={classes.subtitle}>
                <img
                  alt=""
                  src={event}
                  style={{ width: "16px", height: "16px" }}
                ></img>{" "}
                Events
              </div> */}
              {/* <div className={classes.subtitle}>
                {" "}
                <ButtonFilter
                  text={"Muscular Reinforcement"}
                  color={"#FDCF65"}
                />
                <ButtonFilter text={"Kundalini Yoga"} color={"#D5FD65"} />{" "}
              </div>{" "}
              <div className={classes.subtitle}>
                <ButtonFilter text={"Crossfit"} color={"#FD65A7"} />
                <ButtonFilter text={"Service Name"} color={"#FD65FD"} />
                <ButtonFilter text={"Spinning"} color={"#65ACFD"} />
              </div> */}
            </div>
          </div>
          <div className={classes.col2}>
            <div className={classes.button}>Visit Workspace</div>
            <div
              className={classes.button2}
              style={{ justifyContent: "flex-end" }}
            >
              {" "}
              <img alt="" src={time}></img>
            </div>
            <Link to="/dashboard?chat=true">
              <div
                className={classes.button3}
                style={{ justifyContent: "flex-end", cursor: "pointer" }}
              >
                {" "}
                <img alt="" src={email}></img>
              </div>
            </Link>
            <div className={classes.subtitle}>
              <img
                alt=""
                src={event}
                style={{ width: "16px", height: "16px" }}
              ></img>{" "}
              Events
            </div>
            <div className={classes.subtitle}>
              {" "}
              <ButtonFilter text={"Muscular Reinforcement"} color={"#FDCF65"} />
            </div>{" "}
            <div className={classes.subtitle}>
              <ButtonFilter text={"Kundalini Yoga"} color={"#D5FD65"} />{" "}
              <ButtonFilter text={"Crossfit"} color={"#FD65A7"} />
            </div>
            <div className={classes.subtitle}>
              <ButtonFilter text={"Service Name"} color={"#FD65FD"} />
              <ButtonFilter text={"Spinning"} color={"#65ACFD"} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Infomodalbox = () => {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Url Params
  const urlCompanyInfo = new URLSearchParams(history.location.search).get(
    "company-info"
  );
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );
  const onClose = () => {
    if (urlEvents === "true") {
      handleClose();
      history.push("/dashboard?events=true");
    } else if (urlAppointments === "true") {
      handleClose();
      history.push("/dashboard?appointments=true");
    } else if (urlSpaces === "true") {
      handleClose();
      history.push("/dashboard?spaces=true");
    } else if (urlShop === "true") {
      handleClose();
      history.push("/dashboard?shop=true");
    } else if (urlPernety === "true") {
      handleClose();
      history.push("/dashboard?pernety=true");
    }
  };

  useEffect(() => {
    if (urlCompanyInfo === "true") {
      handleOpen();
    }
  }, []);

  return (
    <>
      {/* <div className="view-member-component">
        <div className="view-member-carousel">
          <img src={black} alt="" />
        </div>
        <div className="view-member-footer" onClick={handleOpen}>
          <span>View all offers</span>
          <img src={per} alt="" />
        </div> */}
      <div className="subtitle">
        3 locations in total.{" "}
        <span
          style={{
            color: "#29bdef",
            fontSize: "14px",
            cursor: "pointer",
          }}
          onClick={() => {
            history.push(
              `/dashboard${history.location.search}&company-info=true`
            );
            handleOpen();
          }}
        >
          View information.
        </span>
      </div>

      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.wrapper}>
            {/* header */}
            <div className={classes.header}>
              {/* leftside */}
              <div className={classes.side1}>
                <div className={classes.closeText}>
                  <IoMdClose
                    className={classes.icon}
                    size={20}
                    onClick={onClose}
                  />
                  Studio Corps & Forme Workspaces:{" "}
                </div>

                <div className={classes.loc}>3 locations in total.</div>
              </div>
              {/* right side */}
              <div className={classes.side2}>
                <div className={classes.search}>
                  <InputBase
                    sx={{ ml: 1, p: 1, flex: 1 }}
                    placeholder="search workplaces"
                    inputProps={{ "aria-label": "search workplaces" }}
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon style={{ color: "#AEBACA" }} />
                  </IconButton>
                </div>
              </div>
            </div>

            {/* body */}
            <div className={classes.bodyWrapper}>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Infomodalbox;
{
  /* <div className={classes.subtitle}>
              <img
                alt=""
                src={event}
                style={{ width: "16px", height: "16px" }}
              ></img>{" "}
              Events
              const data = [
    {
      id: 1,
      color: "#FD65A7",
      text: "Crossfit",
    },
    {
      id: 2,
      color: "#65F8FD",
      text: "Kundalini Yoga",
    },
    {
      id: 3,
      color: "#FDCF65",
      text: "Personal Massage",
    },
    {
      id: 4,
      color: "#65F8FD",
      text: "Service Name",
    },
    {
      id: 5,
      color: "#65F8FD",
      text: "Service Name",
    },
  ];
            </div> */
}
