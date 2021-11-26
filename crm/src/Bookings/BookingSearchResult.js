import React from "react";
import { useSelector } from "react-redux";
import AdminInfo from "../hoc/AdminInfo";
import MyButton from "../utilities/Button";
import BookingInfoResult from "./components/BookingInfoResult";
import BookingItinerary from "./components/BookingItineray";
import BookingPassengerDetails from "./components/BookingPassengerDetails";
import BookingPackagesInfo from "./components/BookingPackagesInfo";
import BookingPaymentInfo from "./components/BookingPaymentInfo";
import "./BookingSearchResult.css";

const BookingSearchResult = () => {
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

  const redirectToEditBookings = () => {
    console.log("in link to");
    return "/editBooking";
  };

  return (
    <>
      <div className="bookingSearchResultWrapper">
        <div className="adminInfoWrapper">
          <AdminInfo />
        </div>

        <div className="bookingResultWrapper">
          <div className="bookingQuickDetailsHeader">
            <div className="bookingHeaderIdBlock">
              Booking ID - {bookingid}{" "}
            </div>
            <div className="bookingHeaderDateTimeLeftBlock">
              <div className="bookingHeaderDate">
                Booking Date: <b>{bookingdate}</b>
              </div>
              <div className="bookingHeaderTimeLeft">
                <b>{timeLeft}</b> remaining of 24hrs
              </div>
            </div>
          </div>

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

          <BookingItinerary />

          <BookingPassengerDetails />

          <BookingPackagesInfo />

          <BookingPaymentInfo />

          <div className="bookingActionsContainer">
            <div className="bookingCancelBtn">
              <MyButton
                type="default"
                label="Cancel Booking"
                padding=" 6px 50px 6px 50px"
                fontsize="28px"
                runAction={() => {}}
              />
            </div>
            <div className="bookingCancelBtn">
              <MyButton
                type="default"
                label="Email Booking"
                padding=" 6px 50px 6px 50px"
                fontsize="28px"
                runAction={() => {}}
              />
            </div>
            <div className="bookingEditBtn">
              <MyButton
                type="default"
                label="Edit Booking"
                padding=" 6px 50px 6px 50px"
                fontsize="28px"
                runAction={() => {}}
                linkTo={redirectToEditBookings()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSearchResult;
