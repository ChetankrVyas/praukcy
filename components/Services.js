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
          <section className="service-grid pb-4 pt-5">
            <div className='containerser'>
              <div className='rowser'>
              <div className="colser col-md-6 text-center mb-3">
                  <div className="service-wrap">
                    <div className="service-icon">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <h4>Graphic Design</h4>
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Print Design</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>UI/UX Design</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Web Graphics</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Social Media Graphics</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Branding and Logo Design</li>
                    </ul>
                  </div>
                </div>
                <div className="colser col-md-6 text-center mb-3">
                  <div className="service-wrap">
                    <div className="service-icon">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <h4>Web Application</h4>
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Encompassing UI design</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Comprehensive Website management</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Hosting and Deployment</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Server and Database Integration</li>
                    </ul>
                  </div>
                </div>
                <div className="colser col-md-6 text-center mb-3">
                  <div className="service-wrap">
                    <div className="service-icon">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <h4>Android and IOS App</h4>
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Cross-platform app dev</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Cloud Integration </li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>App maintenance </li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Testing and quality assurance</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>End-to-end services. </li>
                    </ul>
                  </div>
                </div>
                <div className="colser col-md-6 text-center mb-3">
                  <div className="service-wrap">
                    <div className="service-icon">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <h4>Chatbot Integration</h4>
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Customized Chatbot Solutions</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Seamless Integration</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Continuous Monitoring and Optimization</li>
                      <li><span className="fa-li"><i className="fas fa-atom"></i></span>Integration with Existing System </li>
                    </ul>
                  </div>
                </div>
              </div>
            </  div>
          </section>
        </section>
      </div>
    </>
  )
}

export default Services;