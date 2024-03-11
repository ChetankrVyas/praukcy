import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonial.module.scss";
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
    <div className="testimonial">
      <div style={{ width: "50%", textAlign: "center" }}>
        <div className="one">
        <h1 >Testimonials</h1>
        </div>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img={Abhay} name='Abhay Shankar' post='BLVESS' text ='Praukcy gave recognition to our organization in digital world. They not only delivered a beautiful site but also 
empowered us to manage it independently.'/>
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
        color: "wheat",
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
      <p style={{color:"black"}}>
       {text}
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 ,color:"blue", fontWeight:'bold'}}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
        {post}
      </p>
    </div>
  );
};

export default Testimonial;