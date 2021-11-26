import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./SearchBookings.css";
import MyButton from "../../utilities/Button";

const SearchBookings = () => {
  const [searchByPhoneNo, setSearchByPhoneNo] = useState();
  const [searchByBookingId, setSearchByBookingId] = useState();
  const [searchByTicketNo, setSearchByTicketNo] = useState();
  const [searchByPRNNo, setSearchByPRNNo] = useState();
  const [searchByFirstLastName, setSearchByFirstLastName] = useState();

  const redirectToResult = () => {
    console.log("in link to");
    return "/searchResult";
  };

  return (
    <>
      <div className="BookingsInfoContainer">
        <div className="serachBookingsBlock">
          <div className="searchBookingsHeader">Search Bookings By-</div>
          <div className="searchActionWrapper">
            <div className="searchCriteriaWrapper">
              <div className="serachCriteriaContainer">
                <div className="searchCriteriaInputContainer">
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="search by Phone number"
                    value={searchByPhoneNo}
                    onChange={(e) => {
                      setSearchByPhoneNo(e.target.value);
                    }}
                    className="searchByInputField"
                    name="phoneNo"
                  />
                </div>
              </div>
              <div className="serachCriteriaContainer">
                <div className="searchCriteriaInputContainer">
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="search by Booking ID"
                    value={searchByBookingId}
                    onChange={(e) => {
                      setSearchByBookingId(e.target.value);
                    }}
                    className="searchByInputField"
                    name="bookingId"
                  />
                </div>
              </div>
              <div className="serachCriteriaContainer">
                <div className="searchCriteriaInputContainer">
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="search by Ticket Number"
                    value={searchByTicketNo}
                    onChange={(e) => {
                      setSearchByTicketNo(e.target.value);
                    }}
                    className="searchByInputField"
                    name="ticketNo"
                  />
                </div>
              </div>
              <div className="serachCriteriaContainer">
                <div className="searchCriteriaInputContainer">
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="search by PNR number"
                    value={searchByPRNNo}
                    onChange={(e) => {
                      setSearchByPRNNo(e.target.value);
                    }}
                    className="searchByInputField"
                    name="prnNo"
                  />
                </div>
              </div>
              <div className="serachCriteriaContainer">
                <div className="searchCriteriaInputContainer">
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="search by Customer First & Last Name"
                    value={searchByFirstLastName}
                    onChange={(e) => {
                      setSearchByFirstLastName(e.target.value);
                    }}
                    className="searchByInputField"
                    name="firstLastName"
                  />
                </div>
              </div>
            </div>
            <div className="searchCriteriaButtonContainer">
              <MyButton
                type="default"
                label="Search"
                padding="5% 20% 5% 20%"
                fontsize="1.6rem"
                runAction={() => {}}
                linkTo={redirectToResult()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBookings;
