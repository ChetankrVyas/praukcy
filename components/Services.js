import { React, useState } from 'react';
import Image from 'next/image';
import We from '../assets/web.jpg';
import WD from '../assets/wd.png';
import SD from '../assets/sd.png';
import AD from '../assets/android.png';
import BN from '../assets/bn.png';
import Sof from '../assets/soft.jpg';
import CB from '../assets/cb.png';
import An from '../assets/app.png';
import SEO from '../assets/seo.png';
import Sea from '../assets/sea.jpg';
import Cha from '../assets/cha.jpg';
import Blo from '../assets/blo.jpg';

const Services = () => {
  return (
    <>
      <div className='ser'>
        <section className='s-carads'>
          <div className='one'><h1>SERVICES</h1></div>
          <section className="service-grid pb-5 pt-5">
            <div className='container'>
              <div className='row'>
                <div className="col-lg-4 col-md-6 text-center mb-3">
                  <div className="service-wrap">
                    <div className="service-icon">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <h4>Web Application</h4>
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Encompassing UI design</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Server and Database Integration</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Comprehensive website management</li>
                    </ul>
                  </div>
                </div>
                <Crds title="Android Application" />
                <div className="col-lg-4 col-md-6 text-center mb-3">
                  <div className="service-wrap">
                    <div className="service-icon">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <h4>Graphic Design</h4>
                    
                      <i className="fas fa-atom"></i><span>Print Design</span><br />
                      <i className="fas fa-atom"></i><span>UI/UX Design</span><br />
                      <i className="fas fa-atom"></i><span>Web Graphics</span><br />
                      <i className="fas fa-atom"></i><span>Social Media Graphics</span><br />
                      <i className="fas fa-atom"></i><span>Branding and Logo Design</span><br />
                    
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-3">
                  <div className="service-wrap">
                    <div className="service-icon">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <h4>Chatbot Integration</h4>
                    <ul>
                      <li>Customized Chatbot Solutions</li>
                      <li>Seamless Integration</li>
                      <li>Continuous Monitoring and Optimization</li>
                      <li>Integration with Existing System</li>
                    </ul>
                  </div>
                </div>
                <Crds title="IOS Application" />
              </div>
            </  div>
          </section>
        </section>
      </div>
    </>
  )
}
const Crds = (props) => {
  return (
    <div className="col-lg-4 col-md-6 text-center mb-3">
      <div className="service-wrap">
        <div className="service-icon">
          <i className="fas fa-layer-group"></i>
        </div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Services;