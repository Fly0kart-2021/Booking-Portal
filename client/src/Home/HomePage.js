import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/index";
import SearchFlightBlock from "./components/SearchFlightBlock";
import MyButton from "../Utilities/Button";
import { useSelector, useDispatch } from "react-redux";
import "./homePage.css";
import Footer from "../Footer/Footer";
import Faq from "react-faq-component";
///REDUX
import { setError } from "../actions/HomePageActions";
// <<<<<<< task8
import Offers from "../Offers/Offers";
// =======
const data = {
  rows: [
      {
          title: "1)	How far in advance can your flight be booked?",
          content: `You can easily book your flight two hours prior to the time of departure. Also, you can book your flight 330 days early.`,
      },
      {
          title: "2)	How can I obtain the information about my flight?",
          content:
              "You can contact our customer service which is available 24*7.",
      },
      {
          title: "3)	Can I cancel my flight booking?",
          content: `Yes, you can do that. `,
      },
      {
          title: "4)	Can I book a private jet flight?",
          content: "Yes, you can do that.",
      },
      {
        title: "5)	How can I save more on my flight bookings?",
        content: "Look for offers and book accordingly. ",
    },
  ],
};

const styles = {
  rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
        rowContentPaddingLeft: '50px',
        rowContentPaddingRight: '150px',
  titleTextColor: "black",
  rowTitleColor: "black",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
   animate: true,
  arrowIcon: "",
  tabFocus: true
};
// >>>>>>> main
const HomePage = () => {
  const dispatch = useDispatch();
  const departure = useSelector((state) => state.Home.departure);
  const destination = useSelector((state) => state.Home.destination);
  const radio = useSelector((state) => state.Home.radio);
  const error = useSelector((state) => state.Home.errorMessage);
  const departureDate = useSelector((state) => state.Home.departureDate);
  const returnDate = useSelector((state) => state.Home.returnDate);
  const adultCount = useSelector((state) => state.Home.adultCount);
  const childrenCount = useSelector((state) => state.Home.childrenCount);
  const infantCount = useSelector((state) => state.Home.infantCount);

  const cabinClass = useSelector((state) => state.Home.travelClass);
  const validation = () => {
    if (departure && destination) {
      if (departure.code === destination.code) {
        dispatch(setError("From & to airports cannot be same"));
      } else {
        dispatch(setError(""));
      }
    }
    if (departure === null && destination === null) {
      dispatch(setError("please select departure & destination to proceed"));
    }
    if (radio === "twoway" && returnDate === "") {
      dispatch(setError("Please select a return date to proceed"));
    }
  };
  const handleSearchBtn = () => {
    validation();
  };

  const handleLinks = () => {
    if (error === "") {
      var trip = "";
      var query = "";

      var depOne = departure ? departure.code : "";
      var desOne = destination ? destination.code : "";

      var depDateOneDay = departureDate.day.toString();
      var depDateOnemonth = departureDate.month.toString();
      var depDateOneyear = departureDate.year.toString();

      if (radio === "oneway") {
        trip = "OneWay";
        query = `tripType=${trip}&itinerary=${depOne}-${desOne}_${depDateOneDay}-${depDateOnemonth}-${depDateOneyear}&A-${adultCount}_C-${childrenCount}_I-${infantCount}&cabinClass-${cabinClass}`;
      } else if (radio === "twoway") {
        if (returnDate) {
          trip = "TwoWay";
          var deptwo = destination ? destination.code : "";
          var destwo = departure ? departure.code : "";
          var depDatetwoDay = returnDate.day.toString();
          var depDatetwomonth = returnDate.month.toString();
          var depDatetwoyear = returnDate.year.toString();
          query = `tripType=${trip}&itinerary=${depOne}-${desOne}_${depDateOneDay}-${depDateOnemonth}-${depDateOneyear}&${deptwo}-${destwo}_${depDatetwoDay}-${depDatetwomonth}-${depDatetwoyear}&A-${adultCount}_C-${childrenCount}_I-${infantCount}&cabinClass-${cabinClass}`;
        } else {
        }
      }

      const usp = new URLSearchParams(query);
      var searchParams = usp.toString();

      return `search/${searchParams}`;
    }
  };
  return (
    <>
      <Header />
      <div className="searchFlightWrapper">
        <SearchFlightBlock />
      </div>
      <div className="btnSearch">
        <MyButton
          type="default"
          label="Search"
          padding=" 6px 60px 6px 60px"
          fontsize="28px"
          runAction={() => {
            handleSearchBtn();
          }}
          linkTo={handleLinks()}
        />
      </div>
// <<<<<<< task8
      <Offers/>
// =======
      <div className="container">
        <h3 className="text-center fw-bold mt-5 mb-5">
          What Travelers Are Asking? 
        </h3>
        <div className="bg-light">
        <Faq
                data={data}
                styles={styles}
                config={config}
            />
          <div className="row mx-auto justify-content-center my-auto">
            <input className="queryinp col-6 my-auto"placeholder="Ask your query Here" type="text"/>
            <button className="askbtn col-6"type="submit">Ask now</button>
          </div>
        </div>
        </div>
      <div class="container text-center mt-5">
        <h4>
          <b>About us</b>
        </h4>
        <div className="shadow-lg Aboutus rounded mx-auto">
          <p className="text-center">
            FLY0KART is a Global Technology Company with the Heart of a Startup.
            Fly0kart we keep our customers at HEART.
          </p>
        </div>
      </div>
      <div class="container mt-5">
        <h4 className="text-center">
          <b>Services</b>
        </h4>
        <div className="row Service">
          <div class="col-lg-6 shadow-lg servicestyling rounded pt-3 pl-3 pr-3">
            <ul>
              <li>24*7 Customer Service</li>
            </ul>
          </div>
          <div class="col-lg-6 shadow-lg servicestyling rounded pt-3 pl-3 pr-3">
            <ul>
              <li>Best Customer services</li>
            </ul>
          </div>
          <div class="col-lg-6 shadow-lg servicestyling rounded pt-3 pl-3 pr-3">
            <ul>
              <li>Guaranteed Production in 10 minute</li>
            </ul>
          </div>
          <div class="col-lg-6 shadow-lg servicestyling rounded pt-3 pl-3 pr-3">
            <ul>
              <li>Partenership with more than 500 airlines</li>
            </ul>
          </div>
          <div class="col-lg-6 shadow-lg servicestyling rounded pt-3 pl-3 pr-3">
            <ul>
              <li>Serving 187 Countries and currencies</li>
            </ul>
          </div>
          <div class="col-lg-6 shadow-lg servicestyling rounded pt-3 pl-3 pr-3">
            <ul>
              <li>Quick Payments</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <h4 class="mb-2 ">
          <b>Contact</b>
        </h4>
        <div className="row mt-5">
          <div className="col-lg-4 shadow-lg round">
            <div class="contact-head">
              <i class="fas fa-map-marker-alt fa-2x f-top-icon pt-3 mt-1"></i>
              <h3 class="p-3">Find Us</h3>
            </div>
            <a
              href="https://goo.gl/maps/cvw8UPbr4Vukp4mYA"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <p>
                Flat no - 8, 3rd floor, Hindustan Angan. Lane no 13/D. Tingre
                nagar. Pune - 411032
              </p>
            </a>
          </div>
          <div className="col-lg-4 shadow-lg round">
            <div class="contact-head">
              <i class="fas fa-phone fa-2x pt-3 f-top-icon mt-1"></i>
              <h3 class="p-3">Call Us</h3>
            </div>
            <a href="tel:+917057962948" style={{ textDecoration: "none" }}>
              <p>+917057962948</p>
            </a>
          </div>
          <div className="col-lg-4 shadow-lg round">
            <div class="contact-head">
              <i class="fas fa-envelope-open fa-2x f-top-icon pt-3 mt-1"></i>
              <h3 class="p-3">Mail Us</h3>
            </div>
            <a
              href="mailto:Hello@Fly0kart.com"
              style={{ textDecoration: "none" }}
            >
              <p>Hello@Fly0kart.com</p>
            </a>
          </div>
        </div>
      </div>
// >>>>>>> main
      <Footer />
    </>
  );
};

export default HomePage;
