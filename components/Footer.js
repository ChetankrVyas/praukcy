import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import logo from '../assets/logo.png'
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {

  return (
    <div>
      <footer
        className="text-center text-lg-start text-white myfooter"
      >
        <div className="container p-4 pb-0">
          <section className="">
            <Row>
              < Col >
               <Image src={logo} height={100} />
              </Col>
              <hr className="w-100 clearfix d-md-none" />
              <Col>
                <Row>
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Important Links
                  </h6>
                  <Col>
                    <p>
                      <a href="#" className="text-white ulstyle">Home</a>
                    </p>
                    <p>
                      <Link href="/services" className="text-white ulstyle">Services</Link>
                    </p>
                    <p>
                      <a href="/customerreview" className="text-white ulstyle">Customer Review</a>
                    </p>
                    <p>
                      <a href="/customer" className="text-white ulstyle">Customers</a>
                    </p>
                  </Col>

                  <hr className="w-100 clearfix d-md-none" />
                  <Col>
                    <p>
                      <a href="/portfolio" className="text-white ulstyle">Portfolio</a>
                    </p>
                    <p>
                      <a href="/team" className="text-white ulstyle">Team</a>
                    </p>
                    <p>
                      <a href="/about" className="text-white ulstyle">About</a>
                    </p>
                    <p>
                      <a href="/help" className="text-white ulstyle">Help</a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <hr className="w-100 clearfix d-md-none" />
              <Col className="footer-items">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
                <address style={{lineHeight:'2.2'}}>
                  Contact at: <a href="tel:8209181991">+91-8209181991<br/></a>
                  Mail On: <a href="mailto:info@praukcy.com">praukcy@gmail.com</a><br/>
                  Head Office: Room No.- 242,<br />Dhanrajgiri Hostel, IIT Varanasi (BHU)
                </address>
              </Col>
            </Row>
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  Praukcy
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a>
                  <FaInstagram className="social-icons"></FaInstagram>
                </a>
                <a>
                  <FaFacebook className="social-icons"></FaFacebook>
                </a>
                <a >
                  <FaLinkedin className="social-icons"></FaLinkedin>
                </a>
                <a>
                  <FaTwitter className="social-icons"></FaTwitter>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
