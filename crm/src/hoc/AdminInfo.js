import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrencyConverter from "./Currency Converter/CurrencyConverter";
import BookingNotes from "./BookingNotes";
import { adminSignOut } from "../Login/adminAuth";

import "./AdminInfo.css";

const AdminInfo = () => {
  var bookingid = "143789688";
  var bookingdate = "29 Aug 2021";
  var bookingTime = " 11:40:08";
  var custFirstname = "John";
  var custLastName = "Doe";

  const firstName = useSelector((state) =>
    state.user.userInfo ? state.user.userInfo.admin.firstName : null
  );
  const lastName = useSelector((state) =>
    state.user.userInfo ? state.user.userInfo.admin.lastName : null
  );
  var firstNameCapitalized = "";
  var lastNameCapitalized = "";
  if (firstName) {
    firstNameCapitalized =
      firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }
  if (lastName) {
    lastNameCapitalized = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  }

  const [currencyConverter, setCurrencyConverter] = useState();
  const [notes, setNotes] = useState();
  const dispatch = useDispatch();
  return (
    <>
      <div className="adminInfoContainer">
        <div className="adminInfoHeader">
          {firstNameCapitalized} &nbsp;
          {lastNameCapitalized}
        </div>
        <div>
          <div className="adminProfileContainer">Profile</div>
          <div className="BookingActionsContainer">
            <div
              className="bookingNotesContainer"
              onClick={() => {
                setNotes((prev) => !prev);
              }}
            >
              Booking Notes
              {notes ? (
                <div>
                  <BookingNotes
                    closeNotes={() => {
                      setNotes(false);
                    }}
                    bookingid={bookingid}
                    bookingdate={bookingdate}
                    bookingTime={bookingTime}
                  />
                </div>
              ) : (
                ""
              )}
            </div>

            <div
              className="currencyConverterContainer"
              onClick={() => {
                setCurrencyConverter((prev) => !prev);
              }}
            >
              Currency Converter
            </div>

            {currencyConverter ? (
              <div>
                <CurrencyConverter
                  closeCurrencyConversionModal={() => {
                    setCurrencyConverter(false);
                  }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="logOutContainer"
            onClick={() => {
              dispatch(adminSignOut());
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInfo;
