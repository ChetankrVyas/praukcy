import { React, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
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
      <div className='ribbon'>
        <section className='s-carads'>
          <h1 className='our-services'>Services</h1>
          <div className='s-cards'>
            <Crds title='Web Development' imag={WD} ime={We} text="" />
            <Crds title='Software Development' imag={SD} ime={Sof} text='' />
            <Crds title='Android Development' imag={AD} ime={An} text='' />
            <Crds title='Chat Bots' imag={CB} ime={Cha} text='' />
            <Crds title='Logo Design' imag={SEO} ime={Sea} text="" />
            <Crds title='Graphics Design' imag={BN} ime={Blo} text=''  />
          </div>
        </section>
      </div>
    </>
  )
}
const Crds = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card className='s-mycards'>
      <Card.Body>
        <Card.Title><div className='s-logo'><Image width={40} height={40} src={props.imag} alt='' />{props.title}</div></Card.Title>
        <Image className='ime' src={props.ime} alt='' />
        <Card.Text>
          {props.text}
        </Card.Text>
        <Popup show={modalShow} onHide={() => setModalShow(false)} title={props.title} text1={props.text1} />
        <Button variant='transparent' onClick={() => setModalShow(true)} style={{ color: "white", margin: 'auto', display: 'block', border: '2px solid white', width: '90%' }}>More...</Button>
      </Card.Body>
    </Card>
  )
}

const Popup = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" id={props.id} centered>
      <div className='popup'>
        <Button variant='transparent' style={{ color: "white", margin: 'auto', display: 'block', border: '2px solid white', width: '40%' }} onClick={props.onHide}>Close</Button>
      </div>
    </Modal>
  );
}

export default Services;