import React, { useState } from "react";
import "./companymodal.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { height, padding } from "@mui/system";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { IoMdClose } from "react-icons/io";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import space from "../../../assets/home-page/sapce111.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import per from "../../../assets/home-page/per.png";
import homeapp from "../../../assets/home-page/homeapp.png";
import black from "../../../assets/home-page/interior.png";

import email from "../../../assets/home-page/email111.png";
import event from "../../../assets/home-page/cal111.png";
import time from "../../../assets/home-page/time111.png";
import team from "../../../assets/squeed images/teamicon.png";
import ButtonFilter from "../components/button-filter/ButtonFilter";
import { HiOutlineMail } from "react-icons/hi";
import { ImportantDevices } from "@material-ui/icons";
import { Breadcrumbs, Link } from "@mui/material";
import Compantinfo from "./Companyinfo";

const useStyles = makeStyles({
  style: {
    backgroundColor: "#FFFFFF",

    boxShadow: "-3px 3px 6px #0000001F",
    borderRadius: "10px",
  },
  boxmain0: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    width: "80%",
  },
  mainboxP2: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    padding: "30px 0px 10px 15px",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text_header: {
    font: "normal normal normal 16px/19px Lato",
    color: "#000000",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  body: {
    padding: "0px 16px 20px 16px",
  },
  text_body: {
    paddingTop: "20px",
    textAlign: "left",
    font: "normal normal normal 14px/17px Lato",

    color: "#AEBACA",
    opacity: 1,
  },
  text_body1: {
    textAlign: "left",
    font: "normal normal normal 14px/17px Lato",

    color: "#AEBACA",
    opacity: 1,
  },

  text_body2: {
    paddingTop: "5px",
    textAlign: "left",
    font: "normal normal normal 15px/18px Lato",
    color: "#596066",
    opacity: 1,
  },
  buttonfilter: {
    margin: "0px !important",
  },
  divider: {
    border: " 0px solid #AEBACA",
  },
  text_body_button: {
    paddingTop: "20px",
    display: "flex",
    flex: "1 1 auto ",
    gap: "7px",
    flexWrap: "wrap",
  },
  text_body0: {
    paddingTop: "20px",
    display: "flex",
    gap: "10px",
  },
  breadcum: {
    textAlign: "left",

    paddingBottom: "10px",
    font: "normal normal normal 11px/13px Lato",

    color: "#FFFFFF",
    textTransform: "capitalize",
    opacity: "0.8",
  },
  button: {
    background: " #29BDEF 0% 0% no-repeat padding-box",
    boxShadow: "-3px 3px 6px #00000029",
    borderRadius: "15px 0px 15px 15px",
    opacity: " 1",
    textAlign: "right",
    marginTop: "10px",
    padding: "7px 15px",
    color: "white",
    justifyContent: "space-between",
    width: "50%",
    marginLeft: "auto",
    display: "flex",
  },
  icon: {
    cursor: "pointer",
    color: " #AEBACA",
    marginRight: "5px",
  },
  buttontext: {
    textAlign: " left",
    font: "normal normal normal 14px/22px Lato",

    color: "#FFFFFF",
    opacity: "1",
  },
});

export default function Companyinfomain(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <>
      <div
        className={props.view ? "display-none" : "view"}
        onClick={() => {
          setOpen(true);
        }}
      >
        View Information
      </div>

      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <div className={classes.boxmain0}>
            <div className={classes.style}>
              <div className={classes.mainboxP2}>
                <div className={classes.header}>
                  <div>
                    {" "}
                    <IoMdClose
                      className={classes.icon}
                      size={20}
                      onClick={handleClose}
                    />{" "}
                  </div>
                  <div className={classes.text_header}>
                    Studio Corps & Forme A.S.
                  </div>
                </div>
                <hr
                  className={classes.divider}
                  style={{ margin: "10px 0px 0px 0px" }}
                />{" "}
                <div className={classes.body}>
                  <div className={classes.text_body0}>
                    <MdLocationOn
                      style={{
                        color: "#AEBACA",
                        fontSize: "16px",
                        marginLeft: "-3px",
                      }}
                    />{" "}
                    <div className={classes.text_body1}>Main Location:</div>
                  </div>
                  <div className={classes.text_body2}>
                    Street Name, District/área #3423, Paris, France{" "}
                    <span style={{ color: "#868E96" }}>
                      - Studio Corps & Forme #Pernety{" "}
                    </span>
                  </div>
                  <div className={classes.text_body0}>
                    <IoMdCall
                      style={{
                        color: "#AEBACA",
                        fontSize: "16px",
                        marginLeft: "-3px",
                      }}
                    />
                    <div className={classes.text_body1}>Contact:</div>
                  </div>
                  <div className={classes.text_body2}>
                    <span style={{ paddingRight: "5px" }}>+33 123 1234,</span> +
                    0122 2343 33{" "}
                  </div>
                  <div className={classes.text_body0}>
                    <HiOutlineMail
                      style={{
                        color: "#AEBACA",
                        fontSize: "16px",
                        marginLeft: "-3px",
                      }}
                    />{" "}
                    <div className={classes.text_body1}>Email:</div>
                  </div>
                  <div className={classes.text_body2}>
                    pernety@studiocorps.com
                  </div>

                  <div className={classes.text_body0}>
                    <img alt="" src={space} />
                    <div className={classes.text_body1}>Spaces:</div>
                  </div>
                  <div className={classes.text_body2}>
                    3 workspaces, 23 rooms
                  </div>
                  <div>
                    <Compantinfo />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.button}>
                <div className={classes.buttontext}>Send Message </div>
                <HiOutlineMail
                  style={{
                    fontSize: "20px",
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
