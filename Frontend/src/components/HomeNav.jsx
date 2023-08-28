import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo.png';
import "../styles/Homepage.css"
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";

const HomeNav = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <>
                <Navbar.Brand href="/">
                    <img className="logo-img" src={logo} alt="Logo" />
                </Navbar.Brand>
                <h4 className="header-text">Loan Management Application</h4>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <span className="navbar-text">
                    <Link to='/login/admin'>
                        <button className="vvd"><span>Login as Admin</span></button>
                    </Link>
                    </span>
                </Navbar.Collapse>
                </>
      </Navbar>
    </>
  )
};

export default HomeNav;