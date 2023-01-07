import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonial.module.scss";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
      <ArrowBackIos className={className} onClick={onClick} style={{ color: "gray", fontSize: "45px" }} />
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
      <ArrowForwardIos className={className} onClick={onClick} style={{ color: "gray", fontSize: "45px" }} />
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>CLIENT REVEIW</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
    </div>
  );
};

export default Testimonial;