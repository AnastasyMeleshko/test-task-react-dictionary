import React from "react";
import {Container} from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="text-white py-4 footer-main">
            <Container fluid="md sm">
                <p className="d-flex justify-content-center text-xs-center">
                    &copy; {new Date().getFullYear()} Anastasya Meleshko &#10084;
                </p>
                <ul className="d-flex justify-content-around list-unstyled col-lg-1 col-md-2 mx-auto">
                    <li className="d-flex justify-content-between social-icon ">
                        <a href="https://github.com/AnastasyMeleshko" target="_blank" rel="noreferrer">
                            <FaGithub/>
                        </a>
                    </li>
                    <li className="d-flex justify-content-between social-icon">
                        <a href="https://www.linkedin.com/in/anastasya-meleshko-6104a8191/" target="_blank" rel="noreferrer">
                            <FaLinkedin/>
                        </a>
                    </li>
                    <li className="d-flex justify-content-between social-icon">
                        <a href="mailto:7634907@mail.ru" target="_blank" rel="noreferrer">
                            <FaEnvelope/>
                        </a>
                    </li>
                </ul>
            </Container>
        </footer>
    );
};

export default Footer;
