import React, { useEffect } from "react";
import { Modal, Box } from "@mui/material/";

import { useDispatch, useSelector } from "react-redux";
import { setBookingConfirmation } from "../../Redux/HomeReducer";

import { GoCheck } from "react-icons/go";

import "./bookingConfirmation.scss";

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
    borderRadius: "10px",
    width: "95%",
    height: "50%",
    margin: "auto",
  },
};

const BookingConfirmation = () => {
  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(function () {
      dispatch(setBookingConfirmation(false));
    }, 2000);
  }, [store.home.openBookingConfirmation]);

  return (
    <Modal
      open={store.home.openBookingConfirmation}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="bookingConfirmation">
          <div className="icon">
            <GoCheck />
          </div>
          <div className="title">Booking Confirmation</div>

          <div className="para">
            <span>You have booked for</span>

            <span className="cutomer">Kundalini Yoga with Carl Johnson</span>

            <span> You can see your bookings in the Reservations page.</span>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default BookingConfirmation;
