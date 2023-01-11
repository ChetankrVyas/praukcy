import { title } from 'process'
import React from 'react'
import { Card } from 'react-bootstrap'
import Ribbon from '../assets/ribbon21.png'
import Image from 'next/image'
import WD from '../assets/wd.png'
import SD from '../assets/sd.png'
import AD from '../assets/android.jpg'
import BN from '../assets/bn.png'
import CB from '../assets/cb.png'
import SEO from '../assets/seo.png'

const Services = () => {
  return (
    <div className='s-service'>
      <div >
        <Image src={Ribbon} alt='' style={{ margin: 'auto', width: '100%' }} />
      </div>
      <section className='s-carads'>
        {/* <div id='star-five'></div> */}
        <div className='our-services'><div className='dot'></div><h3 style={{ fontFamily: '2' }}>&nbsp; Our Main Services &nbsp;</h3><div className='dot'></div></div>
        <div className='s-cards'>
          <Crds title='Web Development' imag={WD} />
          <Crds title='   Software Development' imag={SD} />
          <Crds title='Android Development' imag={AD} />
          <Crds title='Chat Bots' imag={CB} />
          <Crds title='Search Engine Optimization' imag={SEO} />
          <Crds title='Blockchain' imag={BN} />
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
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content. Some quick example text to build on the card title and make up the
          bulk of the cards content. Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default Services
