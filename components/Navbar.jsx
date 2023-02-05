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
                        <Dropdown>
                            <Dropdown.Toggle href='/services' target='_blank' className='notoggle' variant="dark" style={{backgroundColor:'transparent',border:'none', marginLeft:'-7px'}} id="dropdown-basic">
                                <span className='nav-item ulstyle'>Services</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/action-1">Web Development</Dropdown.Item>
                                <Dropdown.Item href="/action-1">Android Development</Dropdown.Item>
                                <Dropdown.Item href="/">Software Development</Dropdown.Item>
                                <Dropdown.Item href="/action-1">Chat-Bots</Dropdown.Item>
                                <Dropdown.Item href="/action-2">SEO</Dropdown.Item>
                                <Dropdown.Item href="/action-3">Blockchain</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="/portfolio"><span className='nav-item ulstyle'>Portfolio</span></Nav.Link>
                        <Nav.Link href="/customer"><span className='nav-item ulstyle'>Clients</span></Nav.Link>
                        <Nav.Link href="/contact"><span className='nav-item ulstyle'>Contact Us</span></Nav.Link>
                        <Nav.Link href="/about"><span className='nav-item ulstyle'>About</span></Nav.Link>
                    </Nav>
                        <Button href='https://docs.google.com/forms/d/e/1FAIpQLScV6_XZcn4UBJMSf2ljp7ne3Czrfmr5ax-OumFosfbzjHU1VQ/viewform?usp=sf_link' target='_blank' className='cbtn' style={{float:'right',background:'rgb(18, 161, 104)'}}>Credential</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav_bar;