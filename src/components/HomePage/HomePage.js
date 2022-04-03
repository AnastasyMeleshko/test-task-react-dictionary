import React from "react";
import { Image } from "react-bootstrap";
import imagePath from "../../assets/img/reading.gif";
import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <main>
            <Container fluid="md d-flex justify-content-center">
                <Image src={imagePath} height="200" style={{ maxWidth: "100%" }} className="d-flex" alt="main-picture"/>
            </Container>
        </main>
    );
};

export default HomePage;
