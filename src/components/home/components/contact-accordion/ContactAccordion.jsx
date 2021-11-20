import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { RiInformationLine } from "react-icons/ri";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import NewMessage from "../../../Inbox/NewMessage";
import { useDispatch } from "react-redux";
import { setSendMessage } from "../../../../Redux/HomeReducer";

// import images
import pic from "../../../../assets/home-page/work.png";
import space from "../../../../assets/home-page/spaces.png";
import Infomodalbox from "./Infomodalbox";

const ContactAccordion = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="accordion">
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <div className="accordion-header">
              <span>View Contact Information</span>
              <RiInformationLine size={24} />
            </div>
          </AccordionSummary>

          <AccordionDetails>
            <div className="accordion-body">
              <div className="icon-text-address">
                <div className="title">
                  <MdLocationOn className="icon" />
                  <span>Main Address:</span>
                </div>

                <div className="subtitle">
                  Street Name, District/área #3423, Paris, France{" "}
                  <span style={{ color: "#868E96" }}>
                    - Studio Corps & Forme #Pernety
                  </span>
                </div>
              </div>

              <div className="icon-text-contact">
                <div className="title">
                  <MdPhone className="icon" />
                  <span>Contact:</span>
                </div>

                <div className="subtitle">+33 123 1234, + 33 22 2343 33</div>
              </div>

              <div className="icon-text-email">
                <div className="title">
                  <MdEmail className="icon" />
                  <span>Email:</span>
                </div>

                <div className="subtitle">info@studiocorps.com</div>
              </div>

              <div className="icon-text-work">
                <div className="title">
                  <img src={pic} alt="" />
                  <span>Workspaces:</span>
                </div>

                <div className="subtitle">
                  {/* 3 locations in total.{" "}
                  <span
                    style={{
                      color: "#29bdef",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    View information.
                  </span> */}
                  <Infomodalbox />
                </div>
              </div>

              <div className="spaces-div">
                <div className="icon-text-email">
                  <div className="title">
                    <img src={space} alt="" />
                    <span>Spaces:</span>
                  </div>

                  <div className="subtitle">23 rooms in total.</div>
                </div>

                <div className="icon-text-email">
                  <div className="title">
                    <img src={space} alt="" />
                    <span>Shop</span>
                  </div>

                  <div className="subtitle">23 ítems in total.</div>
                </div>
              </div>
            </div>

            <div className="accordion-footer">
              <div className="divider"></div>
              <>
                <div
                  className="send-message"
                  onClick={() => {
                    dispatch(setSendMessage(true));
                  }}
                >
                  <span>Send A Message</span>
                  <MdEmail className="icon" size={20} />
                </div>
                <NewMessage />
              </>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default ContactAccordion;
