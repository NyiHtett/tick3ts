import React from "react";
import "./BookingForm.css";
const BookingForm = ({
  formatData,
  handleFormChange,
  availableTimes,
  handleSubmit,
  updateWeekendTimes,
  updateWeekDayTimes,
}) => {
  return (
    <form>
      <div class="formFields">
        <div class="DateField">
          <label for="res-date">Current Date</label>
          {/* {!(formatData.date === "") ? (
        <></>
      ) : (
        <p
          style={{
            color: "red",
            fontSize: "10px",
            width: "80%",
            alignItems: "center",
          }}
        >
          {" "}
          select a date
        </p>
      )} */}
          <input
            type="date"
            id="res-date"
            value={formatData.date}
            onChange={(e) => {
              handleFormChange("date", e.target.value);
              var date = new Date(e.target.value);
              if (date.getDay() == 5 || date.getDay() == 6) {
                updateWeekendTimes();
              } else {
                updateWeekDayTimes();
              }
            }}
          ></input>
        </div>

        <div class="TimeField">
          <label for="res-time">Current Time</label>
          <select
            id="res-time"
            value={formatData.time}
            onChange={(e) => handleFormChange("time", e.target.value)}
          >
            {availableTimes.length > 0 ? (
              availableTimes.map((time) => <option>{time}</option>)
            ) : (
              <option> No available times </option>
            )}
          </select>
        </div>

        <div class="GuestField">
          <label for="guests"> Number of guests</label>
          {/* {!(formatData.guest <= 1) ? (
        <></>
      ) : (
        <p
          style={{
            color: "red",
            fontSize: "10px",
            width: "80%",
            alignItems: "center",
          }}
        >
          {" "}
          more than one guest is required
        </p>
      )} */}
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={formatData.guest}
            onChange={(e) => handleFormChange("guest", e.target.value)}
          />
        </div>

        <div class="OccasionField">
          <label for="occasion"> Occasion</label>
          <select
            id="occasion"
            value={formatData.occasion}
            onChange={(e) => handleFormChange("occasion", e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <div class="ButtonField">
        <button type="button" class="btn btn-light" onClick={handleSubmit}>
          Reserve a table
        </button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
