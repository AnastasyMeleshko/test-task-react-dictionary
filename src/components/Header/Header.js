import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form/Form";
import {Container} from "react-bootstrap";

const Header = () => {
    const navigate = useNavigate();

    const handlePrevClick = () => {
        navigate(-1);
    };

    const handleNextClick = () => {
        navigate(+1);
    };

    return (
        <header>
            <Container fluid="md">
                <nav className="p-5">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <button onClick={handlePrevClick} type="button" className="btn btn-outline-primary">Back</button>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleNextClick} type="button" className="btn btn-outline-primary">Next</button>
                        </li>
                    </ul>
                </nav>
                <Form/>
            </Container>
        </header>
    );
};

export default Header;
