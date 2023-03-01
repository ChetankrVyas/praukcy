import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Dropdown } from 'react-bootstrap';
import logo from '../assets/logo.png'
import Image from 'next/image';

function Nav_bar() {
    return(
        <Navbar variant='light' expand="lg">
            <Container>
                <Navbar.Brand href="/"><Image src={logo} alt=''/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-list">
                        <Nav.Link href="/"><span className='nav-item ulstyle'>Home</span></Nav.Link>
                        <Nav.Link href="/page/services"><span className='nav-item ulstyle'>Services</span></Nav.Link>
                        <Nav.Link href="/page/portfolio"><span className='nav-item ulstyle'>Portfolio</span></Nav.Link>
                        <Nav.Link href="/page/customer"><span className='nav-item ulstyle'>Clients</span></Nav.Link>
                        <Nav.Link href="/page/contact"><span className='nav-item ulstyle'>Contact Us</span></Nav.Link>
                        <Nav.Link href="/page/about"><span className='nav-item ulstyle'>About</span></Nav.Link>
                    </Nav>
                        <Button href='/page/form' target='_blank' className='cbtn'>Credential</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav_bar;