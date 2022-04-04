import React from "react";
import {Container, Image} from "react-bootstrap";
import imagePath from "../../assets/img/not-found.gif";

const ErrorPage = () => {

    return (
        <Container fluid="md">
            <div className="d-flex justify-content-center mt-lg-5 mt-md-5 mt-sm-5 mt-4">
                <Image src={imagePath} height="200" style={{ maxWidth: "100%" }} alt="not-found-image"/>
            </div>
            <p className="d-flex justify-content-center mt-lg-3 mt-md-3 mt-sm-3 mt-3">Ooops! Not Found...</p>
        </Container>
    );
};

export default ErrorPage;
