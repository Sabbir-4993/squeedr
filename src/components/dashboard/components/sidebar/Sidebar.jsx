import React, { useState, useEffect } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Drawer } from "antd";

// icons
import { FaHome, FaSearch, FaFileInvoice } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillChatDotsFill,
} from "react-icons/bs";
import { AiOutlineGlobal, AiOutlineClose } from "react-icons/ai";
import {
  IoInformation,
  IoInformationOutline,
  IoMdInformation,
} from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";

// import images
import logo from "../../../../assets/dashboard-page/logo.PNG";
import homeLogo from "../../../../assets/home-page/home-logo.png";
import img8 from "../../../../assets/mobileView/home/8.png";

import { useDispatch, useSelector } from "react-redux";
import {
  setMobileSideBar,
  setPernetyPage,
  setDasboard,
  setComponents,
} from "../../../../Redux/HomeReducer";
import { BsChatDots } from "react-icons/bs";
import { useHistory } from "react-router";

// import style
import "./sidebar.scss";
import Profileform from "../../Profile setting/Profileform";

const mobileCategory = [
  {
    id: 1,
    title: "Pernety",
    subtitle: "(Lyon, France)",
    count: true,
  },
  {
    id: 2,
    title: "Parodi",
    subtitle: " (Paris, France)",
    count: false,
  },
  {
    id: 3,
    title: "Plaza",
    subtitle: "(Lyon, France)",
    count: false,
  },
  {
    id: 4,
    title: "Pernety",
    subtitle: "(Lyon, France)",
    count: true,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [anne, setAnne] = useState(false);
  const history = useHistory();
  const [sidebarModal, setSidebarModal] = useState(true);
  const urlprofile = new URLSearchParams(history.location.search).get(
    "profile"
  );

  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setMobileSideBar(false));
  };

  // Url Params
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );

  const urlHandler = (param, isFalse) => {
    let searchString = history.location.search.replace(/true/g, "false");
    if (searchString.search(param + "=false") !== -1 && isFalse === false) {
      return "";
    } else if (searchString.search(param + "=false") !== -1) {
      searchString = searchString.replace(`${param}=false`, `${param}=true`);
      return searchString;
    } else if (searchString === "" && isFalse === false) {
      return ``;
    } else if (searchString === "") {
      return `?${param}=true`;
    } else if (isFalse === false) {
      return ``;
    } else {
      return `${param}=true`;
    }
  };
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

  useEffect(() => {
    if (urlprofile === "true") {
      setSidebarModal(true);
    } else {
      setSidebarModal(false);
    }
    console.log("checking search query:", history.location.search === "");
  }, [history.location.search]);

  useEffect(() => {
    if (urlPernety === "true") {
      dispatch(setPernetyPage({ open: true, title: "Pernety" }));
    }
  }, []);

  return (
    <>
      <div className="sidebar">
        <ProSidebar collapsed={open} collapsedWidth="50px">
          <SidebarHeader>
            <div className={open ? "dis" : "header-main"}>
              <div
                className="image"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img src={logo} alt="" className="exp" />
              </div>
              <Link
                to="/dashboard?events=true"
                onClick={() => {
                  dispatch(setPernetyPage(false));
                  dispatch(setDasboard());
                }}
              >
                <div className="title">Studio Corps & Forme</div>
              </Link>
            </div>

            <div
              className={open ? "shrink-header" : "dis"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div className="image">
                <img src={homeLogo} alt="" />
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <div className={open ? "dis" : "content"}>
              <div className="content-1">
                <div
                  className="home"
                  onClick={() => {
                    dispatch(setPernetyPage({ open: true, title: "Pernety" }));
                    history.push("/dashboard?pernety=true");
                  }}
                >
                  <FaHome size={20} className="icon" />
                  Pernety (Paris, France)
                  <div className="count">5</div>
                </div>

                <div
                  className="home"
                  onClick={() => {
                    dispatch(setPernetyPage({ open: true, title: "Parodi" }));
                    history.push("/dashboard?pernety=true");
                  }}
                >
                  <FaHome size={20} className="icon" />
                  Parodi (Paris, France)
                </div>

                <div
                  className="home"
                  onClick={() => {
                    dispatch(setPernetyPage({ open: true, title: "Plaza" }));
                    history.push("/dashboard?pernety=true");
                  }}
                >
                  <FaHome size={20} className="icon" />
                  Plaza (Lyon, France)
                </div>

                <div className="search-1">
                  <FaSearch size={16} className="icon" />
                  Search workplace
                </div>
              </div>

              <div className="content-2">
                <Link to="/dashboard?reservation=true">
                  <div className="route">
                    <FaFileInvoice size={20} className="icon" />
                    Reservation
                  </div>
                </Link>

                <Link to="/dashboard?chat=true">
                  <div className="route">
                    <BsFillChatDotsFill size={20} className="icon" />
                    Chat
                  </div>
                </Link>
                {/* <Link to="/dashboard?invoice=true">
                  <div className="route end-margin">
                    <FaFileInvoice size={20} className="icon" />
                    Invoices
                  </div>
                </Link> */}
              </div>
            </div>

            <div className={open ? "shrink-content" : "dis"}>
              <div className="content-1">
                <div className="home">
                  <FaHome size={28} className="icon" />
                </div>

                <div className="search-1">
                  <FaSearch size={22} className="icon" />
                </div>

                <div className="down">
                  <BsFillCaretDownFill earch size={20} className="icon" />
                </div>
              </div>

              <div className="content-2">
                <div className="book">
                  <FaHome size={28} className="icon" />
                </div>

                <div className="chat">
                  <BsFillChatDotsFill size={28} className="icon" />
                </div>

                <div className="invoice">
                  <FaFileInvoice size={28} className="icon" />
                </div>
              </div>
            </div>
          </SidebarContent>

          <SidebarFooter>
            <div className={open ? "dis" : "footer"}>
              <div className="help">
                <BiHelpCircle size={20} className="icon" />
                Help
              </div>

              <div
                className={anne ? "anne color" : "anne"}
                onClick={() => {
                  setAnne(!anne);
                }}
              >
                <div className="online">
                  <div className="status"></div>
                  <div className="text">Anne Lorem</div>
                </div>

                {anne ? (
                  <BsFillCaretUpFill />
                ) : (
                  <BsFillCaretDownFill color="#263043" />
                )}
              </div>

              <div className={anne ? "profile-logout-div up" : "down"}>
                <Link
                  to={{
                    pathname: history.location.pathname,
                    search: modalUrlHandler("profile"),
                  }}
                  style={{ textDecoration: "none", color: "#adadad" }}
                >
                  <div className="text"> profile setting</div>
                </Link>
                <div className="text">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#adadad" }}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>

            <div className={open ? "shrink-footer" : "dis"}>
              <div className="inner">A</div>
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>

      {/* Mobile SideBar */}
      <Drawer
        width="100%"
        height="100%"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={store.home.openMobileSideBar}
        className="mobile-sidebar"
      >
        <>
          <div className="new-mobile-sidebar-wrapper">
            <div className="wrapper">
              <Link
                to="/dashboard?chat=true"
                className="links"
                onClick={onClose}
              >
                <span> Inbox </span>

                <div className="icon-div">
                  <BsChatDots size={26} />
                </div>
              </Link>
              <Link
                to={{
                  pathname: history.location.pathname,
                  search: modalUrlHandler("profile"),
                }}
                onClick={onClose}
                className="links"
              >
                <span> My Profile </span>

                <div className="icon-div">
                  <CgProfile size={26} />
                </div>
              </Link>

              <div className="links">
                <span> Help </span>
                <div className="icon-div">
                  <IoMdInformation size={35} />
                </div>
              </div>

              <Link to="/login" className="links" onClick={onClose}>
                <span> Log Out </span>

                <div className="icon-div">
                  <BiLogOut size={26} />
                </div>
              </Link>

              <div
                className="links"
                onClick={() => {
                  onClose();
                }}
              >
                <div className="icon-div">
                  <AiOutlineClose size={26} />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* <div className="mobile-sidebar-wrapper">
            <div className="top">
              <div className="header">
                <img src={homeLogo} alt="" className="logo" />
                <div className="title">Studio Corps & Forme</div>
              </div>

              <div className="work-text">
                <span style={{ color: "#29BDEF" }}>w</span>orkspaces
              </div>

              <div className="category">
                {mobileCategory.map((data, index) => {
                  return (
                    <>
                      <div className="home">
                        <div className="logo-text">
                          <img src={img8} alt="" />

                          <div className="text">
                            {data.title} <span>{data.subtitle}</span>
                          </div>
                        </div>

                        <div className={data.count ? "count" : "display-none"}>
                          5
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="routes">
                <div className="text" onClick={handleRoute1}>
                  Company Information
                </div>

                <div className="text" onClick={handleRoute2}>
                  Profile Settings
                </div>

                <div className="text">Log out</div>
              </div>
            </div>

            <div className="footer">
              <div className="help">Help</div>

              <div className="english">
                <AiOutlineGlobal className="icon" size={20} />
                <span>English</span>
                <BsFillCaretDownFill className="down" />
              </div>
            </div>
          </div> */}
        </>
      </Drawer>
    </>
  );
};

export default Sidebar;
