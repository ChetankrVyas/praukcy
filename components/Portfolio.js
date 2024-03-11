import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import angel from '../assets/portfolio/angel.png';
import blvess from '../assets/portfolio/blvess2.jpeg';
import newsapp from '../assets/portfolio/newsapp.png';
import notebook from '../assets/portfolio/notebook.png';
import chatgpt from '../assets/portfolio/chatgpt.jpeg';
import Image from 'next/image';

const Portfolio = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='portfolio'>
      <div className='one'>
        <h1 >PORTFOLIO</h1>
      </div>
      <Slider {...settings}>
        <Card title="BLVESS" imge = {blvess} link = "https://blvess.vercel.app/" content=""/>
        <Card title="Newsapp" imge = {newsapp} link = "https://github.com/ChetankrVyas/newsapp" />
        <Card title="INotebook" imge = {notebook} link ="https://github.com/ChetankrVyas/inotebook" />
        <Card title="Chatgpt Chatbot"imge = {chatgpt} content="Innovative mobile application leveraging the powerful capabilities of the OpenAI API to deliver personalized prompt suggestions directly within the intuitive app interface."/>
        <Card title="IAAN" imge={angel} link = "https://iaan.ecelliitbhu.com/#team" content="IIT BHU Alumni Angel Network is a joint initiative of institute E-Cell & Alumni for the students and alumni entrepreneurs of IIT BHU to network & access funding opportunities for their startups."/>
      </Slider>
    </div>
  )
}
const Card = (props) => {
  return (
    <div className="img-card iCard-style2">
      <div className="card-content">
        <div className="card-image">
          {/* <span className="card-caption">Image Caption</span> */}
          {/* <img alt='' src="https://www.dropbox.com/s/63v40eqeq9lgz3k/bald-eagle-2715461_640.jpg?raw=1" /> */}
          <Image src = {props.imge} height={190}/>
        </div>

        <span className="card-title">{props.title}</span>

        <div className="card-text">
          <p>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a href="https://pixabay.com/users/moonzigg-6341937/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461" style={{ textDecoration: 'none' }}>moonzigg</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461" style={{ textDecoration: 'none' }}>Pixabay</a> */}
            {props.content}
          </p>
        </div>

      </div>

      <div className="card-link">
        <a href={props.link} rel="noreferrer" target='_blank' title="Read Full"><span>View</span></a>
      </div>
    </div>
  )
}
export default Portfolio