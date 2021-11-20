import React, { useEffect } from "react";
import { Modal, Box } from "@mui/material/";

import { useDispatch, useSelector } from "react-redux";
import { setsurebox, setTextCopied } from "../../Redux/HomeReducer";

import { GoCheck } from "react-icons/go";

import "./textcopied.scss";
import { useHistory } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "576px",
  height: "265px",
  bgcolor: "#FFFFFF",
  boxShadow: "-3px 3px 6px #0000001F",
  borderRadius: "10px",
  p: 3,

  "@media (max-width: 1200px)": {
    width: "700px",
  },

  "@media (max-width: 850px)": {
    borderRadius: "0px",
    width: "100%",
    height: "100%",
    p: 0,
  },
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "576px",
  height: "265px",
  bgcolor: "#FFFFFF",
  boxShadow: "-3px 3px 6px #0000001F",
  borderRadius: "10px",
  p: 3,

  "@media (max-width: 1200px)": {
    width: "700px",
  },

  "@media (max-width: 850px)": {
    borderRadius: "10px",
    width: "250px",
    height: "200px",

    p: 1,
  },
};

const TextCopied = () => {
  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  // useEffect(() => {
  //   setTimeout(function () {
  //     dispatch(setTextCopied(false));
  //   }, 1000);
  // }, [store.home.openTextCopied]);

  return (
    <>
      <Modal
        open={store.home.openTextCopied}
        // onClose={() => {
        //   dispatch(setBookingConfirmation(false));
        // }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="textcopied">
            <div className="icon">
              <GoCheck />
            </div>
            <div className="title">Text copied</div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={store.home.opensurebox}
        // onClose={() => {
        //   dispatch(setBookingConfirmation(false));
        // }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <div className="text5">
            <div className="title1">Are you sure?</div>

            <div className="button0121">
              <div
                className="button1"
                onClick={() => {
                  dispatch(setsurebox(false));
                }}
              >
                {" "}
                No
              </div>
              <div
                className="button2"
                onClick={() => {
                  dispatch(setsurebox(false));
                  history.push("/login");
                }}
              >
                {" "}
                Yes
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TextCopied;
