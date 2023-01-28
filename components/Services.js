import React from 'react';
import { Button, Card} from 'react-bootstrap';
import Ribbon from '../assets/ribbon21.png';
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
  return(
    <div className='s-service'>
      <div>
        <Image src={Ribbon} alt='' style={{ margin: 'auto', width: '100%' }} />
      </div>
      <section className='s-carads'>
        {/* <div id='star-five'></div> */}
        <div className='our-services'><div className='dot'></div><h3 style={{ fontFamily: '2' }}>&nbsp; Our Main Services &nbsp;</h3><div className='dot'></div></div>
        <div className='s-cards'>
          <Crds title='Web Development' imag={WD} ime={We} text="" />
          <Crds title='  Software Development' imag={SD} ime={Sof} text='' />
          <Crds title='Android Development' imag={AD} ime={An} text='' />
          <Crds title='Chat Bots' imag={CB} ime={Cha} text='' />
          <Crds title='SEO' imag={SEO} ime={Sea} text="" />
          <Crds title='Blockchain' imag={BN} ime={Blo} text='' />
        </div>
      </section>
    </div>
  )
}
const Crds = (props) => {
  return (
    <Card className='s-mycards'>
      <Card.Body>
        <Card.Title><div className='s-logo'><Image width={40} height={40} src={props.imag} alt='' />{props.title}</div></Card.Title>
        <Image  className='ime' src={props.ime} alt=''/>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant='transparent' style={{color:"white",margin:'auto',display:'block',border:'2px solid white',width:'90%'}}>More...</Button>
      </Card.Body>
    </Card>
  )
}
export default Services
