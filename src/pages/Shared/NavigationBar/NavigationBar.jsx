import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import './NavigationBar.css'


const NavigationBar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary my-3">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link>
                                <Link to="/category/0">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about">About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/career">Career</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle className='fs-2 me-2' />
                            }
                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login"><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;