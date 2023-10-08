import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png'
import PC from '../assets/pc1.png';
import Contactus from './Contactus';
import Tilt from "react-parallax-tilt";
import styles from "../styles/header.module.scss";
import Navbar from '../components/Navbar';
import Link from 'next/link';
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
      <Contactus/>
      <div className='newhead'>
        <div className="main">
          <div className="left">
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
        </div>
      </div>
    </>
  )
}

export default Header;