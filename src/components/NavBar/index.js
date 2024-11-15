import {Nav, Navbar, Container} from 'react-bootstrap';
import {useEffect, useState} from "react";
import logo from "../../assets/img/logo.svg";
import icon1 from "../../assets/img/nav-icon1.svg";
import icon2 from "../../assets/img/nav-icon2.svg";
import icon3 from "../../assets/img/nav-icon3.svg";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, []);


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                {/* href会找到id=“home”的元素，定位到那里 */}
                <Navbar.Brand href="/banner">
                    {/* Logo图片 */}
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home" className="navbar-link" >Home</Nav.Link>
                        <Nav.Link href="#skills" className="navbar-link" >Skills</Nav.Link>
                        <Nav.Link href="#project" className="navbar-link" >Project</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={icon1} alt=""/></a>
                            <a href="#"><img src={icon2} alt=""/></a>
                            <a href="#"><img src={icon3} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => {
                            console.log("connect")
                        }}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar