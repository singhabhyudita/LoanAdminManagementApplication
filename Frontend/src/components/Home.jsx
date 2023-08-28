import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Homepage.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeNav from "./HomeNav";

const Home = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    
    return (
        <section className="banner" id="home">
        <HomeNav />
        <span className="home-page">
            <Row>
                <Col xs={12} md={6} xl={7}>
                    <div className="animate__animated animate__fadeIn">
                        <span className="tagline">Welcome to LAMA</span>
                        <p>Welcome to GIS Global Enterprise's premium loan management application! Designed exclusilvely for our valued employees, LAMA provides flexible loans for purchase of a range of items ranging from furniture to crokery etc. Empowering your aspirations, we're here to transform your dreaams into reality.</p>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <div className="animate__animated animate__zoomIn">
                    {/* <img src={graphic} alt="Graphic" /> */}
                    <span className="register-button">
                    <Link to='/register'>
                        <button><span>Start your Loan journey with us</span></button>
                    </Link>
                    
                    <div className="routing"><div>Already have an account ?   </div><Link to="/login/employee"> <b>Login</b></Link></div>
                    </span>
                    </div>
                </Col>
            </Row>
            {/* <Footer /> */}
        </span>
        </section>
    )
}

export default Home;