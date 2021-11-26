import React, { useState } from "react";
import AdminInfo from "../hoc/AdminInfo";
import BookingInfoResult from "./components/BookingInfoResult";
import EditBookingItinerary from "./components/EditBookingItinerary";
import EditPassengerDetails from "./components/EditPassengerDetails";
import BookingPaymentInfo from "./components/BookingPaymentInfo";
import EditChargePayment from "./components/EditChargePayment";
import MyButton from "../utilities/Button";
import "./EditBookings.css";

const EditBookings = () => {
  const [checkBox, setCheckBox] = useState(false);
  var bookingid = "143789688";
  var PRNno = "14378769";
  var ticketNo = "187964";
  var bookingdate = "29 Aug 2021";
  var bookingTime = "18:33 hrs";
  var timeLeft = " 05:20:45";
  var custFirstname = "John";
  var custLastName = "Doe";
  var nameOnCard = "John Doe";
  var cardNo = "****-****-****-4579";
  return (
    <>
      <div className="editBookingsWrapper">
        <div className="adminInfoWrapper">
          <AdminInfo />
        </div>

        <div className="editBookingsBlock">
          <div className="editBookingsContainer">
            <BookingInfoResult
              bookingid={bookingid}
              PRNno={PRNno}
              ticketNo={ticketNo}
              bookingdate={bookingdate}
              bookingTime={bookingTime}
              custFirstname={custFirstname}
              custLastName={custLastName}
              cardNo={cardNo}
              nameOnCard={nameOnCard}
            />

            <EditBookingItinerary />

            <EditPassengerDetails />

            <BookingPaymentInfo />

            <EditChargePayment />

            <div className="confirmChangesContainer">
              <MyButton
                type="green"
                label="Generate Payment Link for - $230"
                padding="0.5% 1.2% 0.5% 1.2%"
                fontsize="1.5rem"
                runAction={() => {}}
              />

              <div className="changesCheckBoxContainer">
                <div
                  className={`changesCheckBox ${checkBox ? "checked" : null}`}
                  onClick={() => {
                    setCheckBox((prev) => !prev);
                  }}
                ></div>
                <div>Payment Confirmed! Proceed for changes in the GDS </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBookings;
