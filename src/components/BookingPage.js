import React, { useState } from "react";
import BookingForm from "./BookingForm";
import { submitAPI } from "../utils/Api";
import ConfirmedBooking from "./ConfirmedBooking";

const BookingPage = (props) => {
  const [confirm, setConfirm] = useState(false);
  const [formatData, setFormatData] = useState({
    date: "",
    time: "",
    guest: 1,
    occasion: "birthday",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formatData.date === "" || formatData.guest <= 1) {
        alert("fill out the required fields");
        return;
    }
    console.log("form submitted", formatData);
    setConfirm(submitAPI(formatData));
  };

  const handleFormChange = (field, value) => {
    setFormatData((prevFormatData) => ({ ...prevFormatData, [field]: value }));
  };

  return ( confirm ? (
    <ConfirmedBooking />
  ) : (
    <BookingForm
      formatData={formatData}
      handleFormChange={handleFormChange}
      updateWeekDayTimes={props.updateWeekDayTimes}
      updateWeekendTimes={props.updateWeekendTimes}
      availableTimes={props.availableTimes}
      handleSubmit={handleSubmit}
    />
  ));
};

export default BookingPage;
