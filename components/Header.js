import React from 'react';
import Image from 'next/image';
import PC from '../assets/pc1.png';
import Contactus from './Contactus';
import Tilt from "react-parallax-tilt";
import styles from "../styles/header.module.scss";
import Navbar from '../components/Navbar';
import Typed from 'typed.js';

const Header = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Credibility', 'Quality', 'Identity'],
      typeSpeed: 30
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      {/* <Contactus/> */}
      <div className='newhead'>
        <div className="main">
        {/* <video autoPlay="autoplay" loop="loop" muted className='video' >
          <source src="https://www.pexels.com/video/digital-presentation-of-information-on-a-screen-monitor-3130182/" type='video/mp4'/>
        </video> */}
          <div className="left dis1">
            <h2>Praukcy for <br /><span id="element"><span ref={el} /></span></h2>
            <h6><i className="fa-solid fa-circle-radiation fa-spin"></i>Dynamic Services</h6>
            <h6><i className="fa-solid fa-circle-radiation fa-spin"></i>Easy to use UI</h6>
            <div className="info">
              <i className="fa-solid fa-circle-info"></i>
              <span>Want an awesome web app ready? A logo design? No worries. We&apos;re here for you</span>
            </div>
          </div>
          <div className="right">
            <Tilt>
              <Image
                src={PC} alt='' style={{ maxWidth: '100%', height: 'auto' }}
                width={600}
                className={styles.womening}
              />
            </Tilt>
          </div>
          <div className="left dis">
            <h2>Praukcy for <br /><span id="element"><span ref={el} /></span></h2>
            <h6><i className="fa-solid fa-circle-radiation fa-spin"></i>Dynamic Services</h6>
            <h6><i className="fa-solid fa-circle-radiation fa-spin"></i>Easy to use UI</h6>
            <div className="info">
              <i className="fa-solid fa-circle-info"></i>
              <span>Want an awesome web app ready? A logo design? No worries. We&apos;re here for you</span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header;