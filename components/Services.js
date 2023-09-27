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
      {/* <div className='ribbon'> */}
      <div className='ser'>
        <section className='s-carads'>
          <div className='one'><h1>SERVICES</h1></div>
          <section className="service-grid pb-5 pt-5">
            <div className='container'>
              <div className='row'>
                <Crds />
                <Crds />
                <Crds />
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
        <h4>Web Application</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p>
        <a href="#">Read More</a>
      </div>
    </div>
  )
}

export default Services;