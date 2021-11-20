import React, { useState } from "react";
import "./Inbox.scss";
import { Select } from "antd";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Row, Col, Container, Form, FloatingLabel } from "react-bootstrap";
import { IoIosNotificationsOutline, IoMdClose } from "react-icons/io";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import { Drawer, Space } from "antd";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "react-date-picker";
import chat1 from "../../assets/chat1.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsPencil } from "react-icons/bs";
// import { Select, MenuItem } from "@mui/material";
import Chatcontent from "./chatcontent/chatcontent";
import inbox from "../../assets/inbox.png";
import mcircle from "../../assets/squeed images/mcircle.svg";
import Modal from "./NewMessage";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewMessage from "./NewMessage";
import { FiMessageCircle } from "react-icons/fi";
import SearchGray from "../Reservation/search2/SearchGray";
import SearchBar from "../Calendar Pop Up - 3/search";
import Notifications from "../../components/Notifications/Notifications";
import { useHistory } from "react-router-dom";
import Messagepop from "../Notifications/Messagepop";
import { useDispatch } from "react-redux";
import { setSendMessage } from "../../Redux/HomeReducer";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// function inbf() {
//   const [open, setOpen] = React.useState(true);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//             <Typography id="transition-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography>
//             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }
const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 4, 45, 6, 7,
];
const date = [1, 2];
const msg = [1, 2, 4, 5, 6, 7, 8];

const Inbox = () => {
  const [state, setState] = useState({ visible: false, placement: "right" });
  const { Option } = Select;
  const [value, onChange] = useState(new Date());
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displaySearchGray, setDisplaySearchGray] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const showDrawer = () => {
    setState({
      visible: true,
    });
  };
  const handleRoute = () => {
    history.push("/chatroom");
  };
  const handleRoute2 = () => {
    history.push("/dashboard");
  };
  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const { placement, visible } = state;
  return (
    <>
      <div className="container-fluid main_reserve">
        <Drawer
          title={
            <div className="titled">
              <div className="innertitle">
                <MdClose
                  style={{ fontSize: "30px", marginRight: "15px" }}
                  onClick={() => {
                    onClose();
                    history.push("/dashboard?chat=true");
                  }}
                />
                <img src={chat1} alt=""></img>{" "}
                <p className="p1a"> Studio Corps & Forme</p>
                <p className="p2b"> Kundalini Yoga with Maud</p>
              </div>
              <div className="innertitle">
                <RiDeleteBinLine
                  style={{ fontSize: "24px", color: "#AEBACA" }}
                />
                <p className="p3c"> 1 hr ago</p>
              </div>
            </div>
          }
          width="46%"
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
          <Chatcontent />
        </Drawer>
        <div className="top_reserve">
          <div>
            <div className="tp_reserve">
              <div className="head_reserve">
                <h2 className="reserve_h2">Inbox</h2>
              </div>
              {/* <div className="reserve_icons">
                <span className="search_icon">
                  {" "}
                  <AiOutlineSearch style={{ fontSize: "20px" }} />
                </span>
                <span className="search_icon">
                  {" "}
                  <IoIosNotificationsOutline style={{ fontSize: "20px" }} />
                </span>
              </div> */}
              <div className="reserve_icons">
                <div
                  className="icons-div"
                  style={{
                    alignItems: "center",
                    paddingRight: "15px",
                    display: "flex",
                  }}
                >
                  <div
                    className="search-wrapper"
                    style={{
                      display: displaySearch ? "block" : "none",
                    }}
                  >
                    <div
                      onClick={() => {
                        setDisplaySearch(!displaySearch);
                      }}
                    >
                      <SearchBar />
                    </div>
                  </div>
                  <AiOutlineSearch
                    className="icons"
                    style={{
                      marginRight: "10px",
                      marginRight: "10px",
                      fontSize: "30px",
                      color: "#29bdef",
                      display: displaySearch ? "none" : "block",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setDisplaySearch(!displaySearch);
                    }}
                  />
                  <Notifications />

                  {/* <IoIosNotificationsOutline
                className="icons margin-right"
                onClick={() => {
                  setDisplayNotifications(!displayNotifications);
                }}
              /> */}
                </div>
              </div>
            </div>
          </div>
          <hr className="line"></hr>
          <div className="isection2">
            <Row>
              <Col xs={12} md={3}>
                <div className="Col1">
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
                  <div onClick={() => dispatch(setSendMessage(true))}>
                    <button className="button2 bwidth">
                      Send New Message{" "}
                      <AiOutlineMail style={{ fontSize: "20px" }} />
                    </button>
                  </div>
                  <NewMessage />
                  <div>
                    <button className="button3">Add new folder</button>
                  </div>
                  <div>
                    <button className="button4">
                      Received messages{" "}
                      <span className="search_icon " style={{ float: "right" }}>
                        {" "}
                        <BiChevronRight style={{ fontSize: "20px" }} />
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="button5" disabled>
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
                  </div>
                  <div>
                    <button className="button6">
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
              </Col>
              <Col xs={12} md={9}>
                <div>
                  <div className="imain3">
                    <div>
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              label="Select all"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                              style={{ fontSize: "16px", color: "#596066" }}
                            />
                          </div>
                        ))}
                      </Form>
                    </div>
                    <div className="select-div d-flex">
                      <div className="">
                        <div
                          style={{
                            display: displaySearchGray ? "block" : "none",
                          }}
                          onClick={() => {
                            setDisplaySearchGray(!displaySearchGray);
                          }}
                        >
                          <SearchGray
                            onClick={() => {
                              setDisplaySearchGray(!displaySearchGray);
                            }}
                          />
                        </div>
                        <IoIosSearch
                          style={{
                            display: displaySearchGray ? "none" : "block",

                            color: "#596066",
                            width: "30px",
                            height: "30px",
                            marginRight: "5px",
                          }}
                          onClick={() => {
                            setDisplaySearchGray(!displaySearchGray);
                          }}
                        />
                      </div>

                      <RiDeleteBinLine
                        style={{
                          color: "#596066",
                          width: "30px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                      />

                      <span className="select-k">
                        <Select
                          defaultValue="Move to Folder"
                          // style={{ width: 120 }}
                          dropdownClassName="dropdown1"
                          dropdownStyle={{
                            borderRadius: "10px ",
                          }}
                          onChange={handleChange}
                        >
                          <Option value="custom">Custom title folder </Option>
                        </Select>
                      </span>
                    </div>
                  </div>
                  <div className="inboxwrap">
                    {data.map((user) => (
                      <div
                        className="isection3"
                        value={placement}
                        onClick={() => {
                          showDrawer();
                          history.push("/dashboard?chat=true&chat-room=true");
                        }}
                      >
                        <div>
                          <Form>
                            {["checkbox"].map((type) => (
                              <div key={`inline-${type}`}>
                                <Form.Check
                                  inline
                                  label=""
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-1`}
                                  style={{ fontSize: "16px", color: "#596066" }}
                                />
                              </div>
                            ))}
                          </Form>
                        </div>
                        <div>
                          <img className="s3img" alt="" src={inbox}></img>
                        </div>
                        <div className="h62">
                          <h6 className="h6s3">Maud Blanc</h6>
                        </div>
                        <div className="h62">
                          <h6 className="h61s3">Question about the class</h6>
                        </div>
                        <div className="h62">
                          <h6 className="h62s3">
                            Voyez ce jeu exquis wallon, de graphie en kit mais…
                          </h6>
                        </div>
                        <div className="h62">
                          <h6 className="h63s3">
                            12 March{" "}
                            <BiChevronRight style={{ fontSize: "36px" }} />
                          </h6>
                        </div>
                      </div>
                    ))}{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* // mobile view */}
      <div className="inboxmobile">
        <div className="inboxheader">
          <div className="chat">
            <IoMdClose className="icon" size={20} onClick={handleRoute2} />{" "}
            <span style={{ color: "#aebaca" }}> Chat </span>
          </div>
          <div className="circle">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.024"
              height="24"
              viewBox="0 0 25.024 24"
            >
              <g
                id="Groupe_5744"
                data-name="Groupe 5744"
                transform="translate(-0.225 2.492)"
              >
                <g
                  id="Union_88"
                  data-name="Union 88"
                  transform="translate(0.225 -2.492)"
                  fill="none"
                >
                  <path
                    d="M2.721,22l.459-4.081A9.92,9.92,0,0,1,0,10.758C0,4.817,5.6,0,12.513,0S25.024,4.817,25.024,10.758s-5.6,10.756-12.511,10.756a14.518,14.518,0,0,1-2.843-.279L5.4,23.749A1.767,1.767,0,0,1,4.5,24,1.794,1.794,0,0,1,2.721,22Z"
                    stroke="none"
                  />
                  <path
                    d="M 4.499955654144287 23 C 4.635555267333984 23 4.768265247344971 22.96229934692383 4.894525527954102 22.88788986206055 L 9.491525650024414 20.17971038818359 L 9.865935325622559 20.25444984436035 C 10.72817516326904 20.42658996582031 11.61872577667236 20.51387023925781 12.51284503936768 20.51387023925781 C 18.86022567749023 20.51387023925781 24.02419471740723 16.13726043701172 24.02419471740723 10.75767993927002 C 24.02419471740723 5.377280235290527 18.86022567749023 1 12.51284503936768 1 C 6.164645671844482 1 1.000005483627319 5.377280235290527 1.000005483627319 10.75767993927002 C 1.000005483627319 13.13129997253418 2.020325422286987 15.41991996765137 3.873025417327881 17.20195960998535 L 4.228715419769287 17.54409027099609 L 3.714295387268066 22.11520957946777 C 3.681255340576172 22.40871047973633 3.799155473709106 22.61000061035156 3.903885364532471 22.72718048095703 C 4.056585311889648 22.89801979064941 4.27940559387207 23.00000953674316 4.499945640563965 23 L 4.499955654144287 23 M 4.499985218048096 24 C 3.498155355453491 24.00004005432129 2.593515396118164 23.13187980651855 2.720575332641602 22.00333023071289 L 3.179795503616333 17.92267990112305 C 1.202185392379761 16.0204906463623 5.451354809338227e-06 13.50994968414307 5.451354809338227e-06 10.75767993927002 C 5.451354809338227e-06 4.816559791564941 5.601805686950684 2.71606435120475e-08 12.51284503936768 2.71606435120475e-08 C 19.42238616943359 2.71606435120475e-08 25.02419471740723 4.816559791564941 25.02419471740723 10.75767993927002 C 25.02419471740723 16.69881057739258 19.42238616943359 21.51387023925781 12.51284503936768 21.51387023925781 C 11.53507518768311 21.51387023925781 10.58335590362549 21.41740989685059 9.67015552520752 21.23509979248047 L 5.402115345001221 23.74949073791504 C 5.109485626220703 23.92194938659668 4.800345420837402 23.99999046325684 4.499985218048096 24 Z"
                    stroke="none"
                    fill="#29bdef"
                  />
                </g>
                <text
                  id="_2"
                  data-name="2"
                  transform="translate(8.225 13.508)"
                  fill="#29bdef"
                  font-size="14"
                  font-family="Lato-Regular, Lato"
                >
                  <tspan x="0" y="0">
                    2
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
        </div>
        <div
          className="searchbody"
          style={{ justifyContent: "flex-end", gap: "15px" }}
        >
          <div className="searchmain">
            <InputBase
              sx={{ ml: 1, p: 1, flex: 1 }}
              placeholder="Search messages "
              inputProps={{ "aria-label": "Search messages" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon style={{ color: "#AEBACA", fontSize: "30px" }} />
            </IconButton>
          </div>
          <div className="plusicon">
            <Messagepop />
          </div>
        </div>
        {/* <div className="buttonsmobile121">
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
            <button className="button2 bwidth">
              Send New Message <AiOutlineMail style={{ fontSize: "20px" }} />
            </button>
          </div>
          <div className="mbilebutton1">
            <button className="button3 bwidth">Add new folder</button>
            <button className="button4 bwidth">
              Received messages{" "}
              <span className="search_icon " style={{ float: "right" }}>
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
                <BsPencil style={{ fontSize: "16px", marginRight: "6px" }} />
                <RiDeleteBinLine
                  style={{ fontSize: "16px", marginRight: "6px" }}
                />
                <BiChevronRight style={{ fontSize: "20px" }} />
              </span>
            </button>
          </div>
        </div> */}
        {date.map((user) => (
          <div className="inboxchatmain01" onClick={handleRoute}>
            <div className="chatmaindate">
              <div className="datecontent">Monday 21st, April 2020</div>
            </div>
            {msg.map((user) => (
              <div>
                <div className="messagemain01">
                  <div>
                    <img alt="" src={inbox} className="image" />
                  </div>
                  <div className="text">
                    Kundalini Yoga with Maud
                    <h6 className="textsub">
                      Voyez ce jeu exquis wallon, de graphie en kit...
                    </h6>
                    <p className="para01"> 1 hr ago</p>
                  </div>
                  <div>
                    <BiChevronRight
                      style={{ fontSize: "36px", color: "#29BDEF" }}
                    />
                  </div>
                </div>
                <div className="divider" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default Inbox;
