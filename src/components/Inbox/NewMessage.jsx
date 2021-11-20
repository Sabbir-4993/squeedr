import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiOutlineMail } from "react-icons/ai";
import "./Newmessage.scss";
import { MdClose } from "react-icons/md";
import { GrDocumentUpload } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { setSendMessage } from "../../Redux/HomeReducer";
import { VscCloudUpload, VscSmiley } from "react-icons/vsc";
import Basic from "./dragfile";
import { InputBase } from "@mui/material";
import { BiChevronsDown } from "react-icons/bi";
import { Drawer } from "antd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: "-3px 0px 9px #0000001A",
  borderRadius: "10px",
};

export default function NewMessage() {
  const [state, setState] = React.useState({ visible: false });
  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setSendMessage(false));
  };

  return (
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={store.home.openSendMessage}
          // onClose={() => {
          //   dispatch(setSendMessage(false));
          // }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          className="webmessage"
        >
          <Fade in={store.home.openSendMessage}>
            <Box sx={style}>
              <div className="mess">
                <p>
                  <MdClose
                    style={{ fontSize: "24px", marginRight: "10px" }}
                    onClick={() => {
                      dispatch(setSendMessage(false));
                    }}
                  />
                  Send new Message
                </p>
              </div>
              <div className="minput1">
                <div>
                  {" "}
                  <label className="mlabelsub">Subject</label>
                </div>
                <div>
                  {" "}
                  <input
                    className="minputsub"
                    placeholder="Enter subject of the message"
                  ></input>
                </div>
              </div>
              <div className="minput1">
                <div>
                  {" "}
                  <label className="mlabelsub">Description</label>
                </div>
                <div className="minputsub2">
                  {" "}
                  {/* <InputBase
                  className="minputsub2"
                  placeholder="Enter subject of the message"
                ></input> */}
                  <InputBase
                    className="minputsub3"
                    multiline
                    sx={{ ml: 0, color: "#AEBACA" }}
                    placeholder="500 characters"
                    inputProps={{ "aria-label": "500 characters" }}
                  />
                  <VscSmiley
                    style={{ height: "21px", width: "21px", color: "#29BDEF" }}
                  />
                </div>
              </div>
              <div>
                <Basic />
              </div>
              <div className="buttonmsend-wrapper">
                <div className="buttonmsend">Send Message</div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
      <div>
        <Drawer
          width="100%"
          height="100%"
          placement="bottom"
          closable={false}
          onClose={onClose}
          visible={store.home.openSendMessage}
          className="mobilemeesage"
        >
          {/* Close Drawer */}
          <div className="close-btn112" onClick={onClose}>
            <BiChevronsDown size={40} />
          </div>
          <div className="Message112">
            <div className="mess">
              <p>
                <MdClose
                  style={{ fontSize: "24px", marginRight: "10px" }}
                  onClick={() => {
                    dispatch(setSendMessage(false));
                  }}
                />
                Send new Message
              </p>
            </div>
            <div className="minput1">
              <div>
                {" "}
                <label className="mlabelsub">Subject</label>
              </div>
              <div>
                {" "}
                <input
                  className="minputsub"
                  placeholder="Enter subject of the message"
                ></input>
              </div>
            </div>
            <div className="minput1">
              <div>
                {" "}
                <label className="mlabelsub">Description</label>
              </div>
              <div className="minputsub2">
                {" "}
                {/* <InputBase
                  className="minputsub2"
                  placeholder="Enter subject of the message"
                ></input> */}
                <InputBase
                  className="minputsub3"
                  multiline
                  sx={{ ml: 0, color: "#AEBACA" }}
                  placeholder="500 characters"
                  inputProps={{ "aria-label": "500 characters" }}
                />
                <VscSmiley
                  style={{ height: "21px", width: "21px", color: "#29BDEF" }}
                />
              </div>
            </div>
            <div>
              <Basic />
            </div>
            <div className="buttonmsend-wrapper">
              <div className="buttonmsend">Send Message</div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}
