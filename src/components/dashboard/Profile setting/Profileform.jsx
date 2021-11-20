import { Drawer, Button, Radio, Space } from "antd";
import { MdClose } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import { Select } from "antd";
import "./profileform.scss";
import profile from "../../../assets/squeed images/profile pic.png";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Switch from "@mui/material/Switch";
import { BsEye } from "react-icons/bs";
import TopNavbar from "../../home/Mobile View Components/Top Navbar/TopNavbar";
import FooterNavRouter from "../../home/Mobile View Components/Footer Nav Router/FooterNavRouter";
import TimezoneSelect from "react-timezone-select";
import { useDispatch } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { Delete } from "@material-ui/icons";
import { Redirect, Link, useHistory } from "react-router-dom";
import { setsurebox } from "../../../Redux/HomeReducer";
import TextCopied from "../../Text Copied/TextCopied";

const Drawerbody = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [count, Setcount] = useState("");
  const [checked, setChecked] = useState(true);
  const [show, Setshow] = useState(false);
  const [TxtLetter, setTxtLetter] = useState("");
  const [img, setimage] = useState(null);
  const [pic, setpic] = useState(false);
  const dispatch = useDispatch();
  const imguploader = useRef(null);
  const handleChange1 = (event) => {
    const i = URL.createObjectURL(event.target.files[0]);
    setimage(i);
    setpic(true);
    console.log("agh", img);
  };

  const uploadImg = (event) => {
    imguploader.current.click();
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const decrement = () => {
    console.log(count);
    Setcount(count - 1);
  };
  const increment = () => {
    Setcount(count + 1);
  };

  return (
    <>
      <div className="drawerbody">
        {" "}
        <div className="profileimage">
          <div
            className="imagecircle"
            style={{ display: pic ? "none" : "flex" }}
          >
            <input
              type="file"
              ref={imguploader}
              accept="image/png , image/jpeg"
              id="forimg"
              style={{ display: "none" }}
              onChange={handleChange1}
            />
            <label>
              {" "}
              <div className="uploadimage">
                Drop
                <BiPlus
                  onClick={uploadImg}
                  style={{ font: "normal normal normal 26px/20px Lato" }}
                />
              </div>
            </label>
          </div>
          <div
            className="imagecircle1"
            style={{ display: pic ? "block" : "none" }}
          >
            <img alt="img" src={img} className="profileimg01" />
            <div class="deleteprofile01">
              <Delete
                style={{ color: "#AEBACA ", fontSize: "26px" }}
                onClick={() => setpic(false)}
              />
            </div>
          </div>
          <div className="field">
            First Name*
            <input type="text" className="inputf" defaultValue="Anne" />{" "}
          </div>
        </div>
        <div className="field padinput">
          Last Name*
          <input
            type="text"
            className="inputf "
            defaultValue="Lorem Ipsun"
          />{" "}
        </div>
        <div className="field padinput">
          Select your country (timezone) *
          <TimezoneSelect
            style={{ backgroundColor: "white", paddingTop: "0px" }}
            className="timeSelectForm01"
            value={selectedTimezone}
            onChange={setSelectedTimezone}
          />
        </div>
        <div className="field padinput birthday012">
          Birthday (Optional)
          <div className="dobdiv">
            {" "}
            <div className="dobdd">
              <div>
                {" "}
                <input
                  type="text"
                  className="inputdob"
                  placeholder="DD"
                  defaultValue={count}
                />
              </div>

              <div className="arrows">
                <TiArrowSortedUp
                  style={{ cursor: "pointer" }}
                  onClick={increment}
                />
                <TiArrowSortedDown
                  style={{ marginTop: "-8px", cursor: "pointer" }}
                  onClick={decrement}
                />
              </div>
            </div>
            <div className="dobdd">
              <div>
                {" "}
                <input
                  type="text"
                  className="inputdob"
                  placeholder="MM"
                  defaultValue={count}
                />
              </div>

              <div className="arrows">
                <TiArrowSortedUp
                  style={{ cursor: "pointer" }}
                  onClick={increment}
                />
                <TiArrowSortedDown
                  style={{ marginTop: "-8px", cursor: "pointer" }}
                  onClick={decrement}
                />
              </div>
            </div>
            <div className="dobdd" style={{ width: "37%" }}>
              <div>
                {" "}
                <input
                  type="text"
                  className="inputdob"
                  placeholder="YYYY"
                  defaultValue={count}
                />
              </div>

              <div className="arrows">
                <TiArrowSortedUp
                  style={{ cursor: "pointer" }}
                  onClick={increment}
                />
                <TiArrowSortedDown
                  push
                  style={{ marginTop: "-8px", cursor: "pointer" }}
                  onClick={decrement}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field padinput">
          Contact Phone 1 (optional)
          <div className="dobdd" style={{ width: "100%" }}>
            <div className="countrycode01">
              {" "}
              +33{" "}
              <input
                type="text"
                className="number01"
                defaultValue="124 123 1234"
              />
            </div>

            <div className="arrows">
              <IoMdCall style={{ fontSize: "24px", marginRight: "5px" }} />
            </div>
          </div>
        </div>
        <div className="field padinput">
          Contact Phone 2 (optional)
          <div className="dobdd" style={{ width: "100%" }}>
            <input
              type="text"
              className="inputdob"
              style={{ width: "220px" }}
              placeholder="Enter second contact phone"
            />

            <div className="arrows">
              <IoMdCall style={{ fontSize: "24px", marginRight: "5px" }} />
            </div>
          </div>
        </div>
        <hr className="divider01" />
        <div className="securitymain">
          <div className="securitymain01">
            Security
            <MdKeyboardArrowDown
              style={{
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "5px",
                display: show ? "none" : "block",
              }}
              onClick={() => Setshow(true)}
            />
            <MdKeyboardArrowUp
              style={{
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "5px",
                display: show ? "block" : "none",
              }}
              onClick={() => Setshow(false)}
            />
          </div>
          <div
            className="securitydisplay"
            style={{ display: show ? "block" : "none" }}
          >
            <div className="reminder01">
              <div className="sms header01">
                Reminder Methods
                <div className="select01">
                  SMS and Email
                  <TiArrowSortedDown
                    style={{
                      fontSize: "16px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
              <div className="time header01" style={{ width: "100%" }}>
                Time frame
                <div className="select01" style={{ width: "100%" }}>
                  24 hours
                  <TiArrowSortedDown
                    style={{ fontSize: "16px", marginRight: "10px" }}
                  />
                </div>
              </div>
            </div>
            <div className="switch">
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                style={{ color: "white" }}
              />
              <div style={{ marginTop: "10px" }}>
                {" "}
                Send reminder about event/appointment
              </div>
            </div>
            <div className="field padinput">
              Current email
              <input
                type="text"
                className="inputf "
                placeholder="annelorem@gmaill.com"
              />{" "}
            </div>
            <div className="field padinput">
              Change Email *
              <input
                type="text"
                className="inputf "
                placeholder="Enter new email"
              />{" "}
            </div>
            <div className="field padinput">
              Confirm Email *
              <input
                type="text"
                className="inputf "
                placeholder="Confirm new email"
              />{" "}
            </div>
            <hr className="divider01" />
            <div className="field padinput" style={{ paddingTop: "10px" }}>
              Change Password
              <div className="dobdd" style={{ width: "100%" }}>
                <div className="countrycode01">
                  <input
                    type="password"
                    className="inputdob"
                    style={{ width: "220px" }}
                    placeholder="Enter your current password"
                  />
                </div>

                <div className="arrows">
                  <BsEye
                    style={{
                      fontSize: "20px",
                      color: "#AEBACA",
                      marginRight: "10px",
                      marginBotton: "0rem",
                      marginTop: "2px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="field padinput">
              New Password
              <div className="dobdd" style={{ width: "100%" }}>
                <div className="countrycode01">
                  <input
                    type="password"
                    className="inputdob"
                    style={{ width: "220px" }}
                    placeholder="Enter your current password"
                  />
                </div>

                <div className="arrows">
                  <BsEye
                    style={{
                      fontSize: "20px",
                      color: "#AEBACA",
                      marginRight: "10px",
                      marginBotton: "0rem",
                      marginTop: "2px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="field padinput">
              Confirm New Password *
              <input
                type="password"
                className="inputf "
                placeholder="Confirm new password"
              />{" "}
            </div>
          </div>
          {/* <div
            className="membershipdisplay"
            style={{ display: show ? "none" : "block" }}
          >
            <hr className="divider01" />
            <div className="securitymain01">
              My Memberships
              <MdKeyboardArrowDown
                style={{ fontSize: "20px", marginLeft: "5px" }}
              />
            </div>
          </div> */}
          <div
            className="membershipdisplay"
            style={{ display: show ? "none" : "block" }}
          >
            <hr className="divider01" />
            <div className="securitymain01">
              You are not currently login
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div style={{ marginLeft: "10px", textDecoration: "none" }}>
                  Login Here
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="button01">Save Changes</div>
        <div
          className="delete01"
          style={{ paddingBottom: show ? "10px" : "150px" }}
          onClick={() => {
            dispatch(setsurebox(true));
          }}
        >
          Delete My Account
        </div>
      </div>
    </>
  );
};

const Profileform = () => {
  const history = useHistory();
  const [state, setState] = useState({ visible: true, placement: "right" });
  const { Option } = Select;
  const urlprofile = new URLSearchParams(history.location.search).get(
    "profile"
  );

  const modalUrlHandler = (modal, isFalse) => {
    let searchString = history.location.search;

    if (searchString.search(modal + "=false") !== -1) {
      searchString = searchString.replace(`${modal}=false`, `${modal}=true`);

      return searchString;
    } else if (searchString.search(modal + "=true") !== -1) {
      searchString = searchString.replace(`${modal}=true`, ``);

      return searchString;
    } else if (searchString === "") {
      searchString = `?${modal}=${isFalse === false ? "false" : "true"}`;

      return searchString;
    } else if (isFalse === false) {
      return `${searchString}`;
    } else {
      return `${searchString}&${modal}=true`;
    }
  };

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    history.push({
      pathname: history.location.pathname,
      search: modalUrlHandler("profile", false),
    });
    // setState({
    //   visible: false,
    // });
  };
  useEffect(() => {
    setState({
      visible: urlprofile === "true" ? true : false,
    });
  }, [history.location.search]);

  const onChange = (e) => {
    setState({
      placement: e.target.value,
    });
  };
  const { placement, visible } = state;
  return (
    <>
      {/* <div
        className="profilelinkbutton01"
        onClick={showDrawer}
        style={{
          cursor: "pointer",
          fontFamily: "Lato, sans-serif",
          fontSize: "16px",
        }}
      >
        Profile setting
      </div> */}

      <Drawer
        className="web0"
        title={
          <div className="titleprofile201">
            <MdClose
              style={{ fontSize: "26px", marginRight: "10px" }}
              onClick={onClose}
            />
            Profile Settings
          </div>
        }
        width="420"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <Drawerbody />
      </Drawer>

      {/* // mobile view */}
      {/* <Drawer
        className="web0"
        title={
          <div className="titleprofile201">
            <MdClose
              style={{ fontSize: "26px", marginRight: "10px" }}
              onClick={onClose}
            />
            Profile Settings
          </div>
        }
        width="420"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      ></Drawer> */}
      <Drawer
        className="mobile0"
        width="100%"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <TopNavbar />
        <div className="mobile0">
          <div className="profileheader02">
            {" "}
            Profile Settings{" "}
            <MdClose
              style={{
                fontSize: "26px",
                marginRight: "10px",
                marginLeft: "auto",
                color: "#29bdef",
              }}
              onClick={onClose}
            />
            <hr
              style={{
                marginBottom: "5px",
                color: "#AEBACA",
                borderTop: "0.5px",
              }}
            />{" "}
          </div>
          <FooterNavRouter />

          <Drawerbody />
        </div>
      </Drawer>
      <TextCopied />
    </>
  );
};
export default Profileform;
