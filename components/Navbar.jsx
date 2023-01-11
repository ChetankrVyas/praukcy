import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function Nav_bar() {
    return (
        <Navbar bg="transparent" variant='dark' expand="lg" style={{padding:'4px'}}>
            <Container>
                <Navbar.Brand style={{width:'20%', }} href="/"><h3>Praukcy</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-list">
                        <Nav.Link href="/home"><span className='nav-item ulstyle'>Home</span></Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle className='notoggle' variant="dark" style={{backgroundColor:'transparent',border:'none', marginLeft:'-7px'}} id="dropdown-basic">
                                <span className='nav-item ulstyle'>Services</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/action-1">Web Development</Dropdown.Item>
                                <Dropdown.Item href="/action-1">Android Development</Dropdown.Item>
                                <Dropdown.Item href="/action-1">Software Development</Dropdown.Item>
                                <Dropdown.Item href="/action-1">Chat-Bots</Dropdown.Item>
                                <Dropdown.Item href="/action-2">SEO</Dropdown.Item>
                                <Dropdown.Item href="/action-3">Blockchain</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="/"><span className='nav-item ulstyle'>Portfolio</span></Nav.Link>
                        <Nav.Link href="/"><span className='nav-item ulstyle'>Customer Review</span></Nav.Link>
                        <Nav.Link href="/"><span className='nav-item ulstyle'>Contact Us</span></Nav.Link>
                        <Nav.Link href="/"><span className='nav-item ulstyle'>About</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav_bar;