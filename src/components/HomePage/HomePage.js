import React from "react";
import { Image } from "react-bootstrap";
import imagePath from "../../assets/img/reading.gif";
import { Container } from "react-bootstrap";
import Form from "../Header/Form/Form";

const HomePage = () => {

    return (
        <main>
            <Container fluid="md d-flex justify-content-center flex-column">
                <Form/>
                <div className="d-flex justify-content-center">
                    <Image src={imagePath} height="200" style={{ maxWidth: "100%" }} alt="main-picture"/>
                </div>
            </Container>
        </main>
    );
};

export default HomePage;
