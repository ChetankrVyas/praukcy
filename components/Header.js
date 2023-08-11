import React from 'react';
import Image from 'next/image';
import PC from '../assets/pc.png';
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
    <div className='s-header'>
      <Navbar />
      <div
        style={{ backgroundColor: "#ffffff"}}>
        <div className={styles.maincontainer}>
          <Contactus />
          <div className={styles.submaincontainer}>
            <header className={styles.header}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      {/* <div className={styles.row}>
                  <div className={styles.column}> */}
                      {`Praukcy for`}
                      <br />
                      {/* <span> digital &nbsp; </span> */}
                      {/* <br/> */}
                      <span ref={el} />
                      {/* <span> */}
                        {/* <b className={styles.diffText}>credibility</b>
                        <b className={styles.diffText}>quality</b>
                        <b className={styles.diffText}>identity</b> */}
                      {/* </span> */}

                      <main>
                        <p className={styles.para}>
                          {/* <hr/> */}
                          Praukcy will present rays of hope so dazzling that
                          they penetrate even the darkness that veils our eyes.
                        </p>
                        <button className={styles.button1}>
                          <Link href='/page/services'> Explore Services </Link>
                        </button>
                        {/* </div> */}
                      </main>

                      <div className={styles.footer}>
                        Contact Our Work Team Now
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.column}>
                  <div className="portcontainer">
                    <div className="portwomen">
                      <Tilt>
                        <Image
                          src={PC} alt='' style={{maxWidth:'100%', height:'auto'}}
                          width={600}
                          className={styles.womening}
                        />
                      </Tilt>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;