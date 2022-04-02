import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form/Form";

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
            <nav>
                <ul>
                    <li>
                        <button onClick={handlePrevClick}>
                            Previous
                        </button>
                    </li>
                    <li>
                        <Link to="/">
                            Initial page
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleNextClick}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
            <Form/>
        </header>
    );
};

export default Header;
