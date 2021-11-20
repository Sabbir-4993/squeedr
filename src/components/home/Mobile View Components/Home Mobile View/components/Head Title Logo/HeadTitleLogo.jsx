import React, { useState } from "react";

// icons
import { FaBars } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";

// image
import img1 from "../../../../../../assets/mobileView/home/9.png";
import img2 from "../../../../../../assets/chat1.png";
import img3 from "../../../../../../assets/inbox.png";
import img4 from "../../../../../../assets/mobileView/home/3.png";

// style
import "./headTitleLogo.scss";
import Companyinfomain from "../../../../mobilemodal/Companyinfomain";

const HeadTitleLogo = (props) => {
  const [show, setShow] = useState(false);
  console.log("headtitle", props.title);
  return (
    <>
      <div className="head-title-logo-wrapper">
        <div className="text-div">
          <div className="welcome">{props.title}</div>
          <div className="studio">{props.subTitle}</div>
          <Companyinfomain view={props.view} />
          {/* <div className={props.view ? "display-none" : "view"}>
            View Information
          </div> */}
        </div>

        <div className="logo-div">
          <div className="image">
            <img src={img4} alt="" className={show ? "display-none" : ""} />

            <div
              className={show ? "display-none" : "back"}
              onClick={() => {
                setShow(true);
              }}
            >
              <FaBars style={{ fontSize: "20px" }} />
            </div>

            <div className={show ? "logo-back" : "display-none"}>
              <div className="studio__container">
                {/* left */}
                <div className="studio__left">
                  {/* header */}
                  <div className="studio__header">
                    {/* left */}
                    <div className="left">
                      <div className="title">
                        <img src={img1} alt="" className="icon" />
                        <span>Studio Corps & Forme</span>
                      </div>

                      <div className="para">St Name, area #33, Paris...</div>
                    </div>

                    {/* right */}
                    <div className="right">
                      <img src={img2} alt="" />
                    </div>
                  </div>

                  {/* body */}
                  <div className="studio__body">
                    <div className="text-wrapper">
                      {/* left */}
                      <div className="left">
                        <div className="title">Pernety</div>

                        <div className="para">St Name, area #33, Paris...</div>
                      </div>

                      {/* right */}
                      <div className="right">
                        <img src={img3} alt="" />
                      </div>
                    </div>

                    <div className="text-wrapper">
                      {/* left */}
                      <div className="left">
                        <div className="title">Pernety</div>

                        <div className="para">St Name, area #33, Paris...</div>
                      </div>

                      {/* right */}
                      <div className="right">
                        <img src={img3} alt="" />
                      </div>
                    </div>

                    <div className="text-wrapper">
                      {/* left */}
                      <div className="left">
                        <div className="title">Pernety</div>

                        <div className="para">St Name, area #33, Paris...</div>
                      </div>

                      {/* right */}
                      <div className="right">
                        <img src={img3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* right */}
                <div
                  className="studio__right"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadTitleLogo;
