import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonial.module.scss";
import { Avatar } from "@material-ui/core";
import We from '../assets/web.jpg';
import Me from '../assets/me.jpg'
import Ayush from '../assets/ayush.jpg'
import Abhay from '../assets/abhay.jpg'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Image from "next/image";

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
          <Card img={Ayush} text='Nkjanlfkjn j al njndslk kjdlskj ;lj fslak j a;lskjf; a' name='Ayush Sahu' post='Nodal Mentor' />
          <Card img={Abhay} name='Abhay Shankar' post='BLVESS' />
          <Card img={Me} name='Chetan Vyas' post='Startup Founder' />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img,text,name,post }) => {
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
      <Image
        src={img} alt=''
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,borderRadius: "50%"
        }}
      />
      <p>
       {text}
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
        {post}
      </p>
    </div>
  );
};

export default Testimonial;