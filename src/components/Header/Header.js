import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Initial page
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
