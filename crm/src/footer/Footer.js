import React from "react"
import { Row, Col } from "react-bootstrap"
import logo from "./logo.png";
import "./footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelopeOpenText, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <><footer className="mt-5 d-flex bg-light container-fluid">
      <div class="my-auto ml-5">
        <img
          src={logo}
          width="130"
          height="42"
          className="d-inline-block align-top"
          alt="" />
      </div>
        <div className="text-center d-flex my-auto ff">

          <span> <FaEnvelopeOpenText size={15} /><br/>Hello@Fly0kart.com</span>
          <span><FaMobileAlt size={15} /><br/>+91-7057962948</span>

        </div>
      <div className="my-auto text-center">
        <h3 className="p-3">Follow Us</h3>
        <Row className="d-flex m-3">
          <Col xs lg="1">
            <a href="!#" >  <FaTwitter size={25} /></a>
          </Col>
          <Col xs lg="1"><a href="!#"><FaInstagram size={25} /></a></Col>
          <Col xs lg="1"><a href="!#"><FaFacebookF size={25} /></a></Col>

          <Col xs lg="1">
            <a href="!#"> <FaWhatsapp size={25} /></a>
          </Col>
        </Row>
      </div>
    </footer></>
  )
}

export default Footer 