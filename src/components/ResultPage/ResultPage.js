import React, {Fragment, useEffect, useState} from "react";
import {useParams , useNavigate} from "react-router-dom";
import { Container, Spinner, Badge } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import "./ResultPage.css";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultPage = () => {
    const [data, setData] = useState([]);
    const { wordToSearch } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const fetchData = async (url) => {
        try {
            const response = await axios.get(`${url}/${wordToSearch}`);
            setData(response.data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (e) {
            console.dir(e);
            setTimeout(() => {
                setLoading(false);
                navigate("/notfound");
            }, 1500);
        }
    };

    useEffect(() => {
        fetchData(url);
    },[]);

    if (loading) return <main>
        <Container fluid="md sm d-flex justify-content-center flex-column" className="spinner-container">
            <Spinner animation="border" role="status" className="spinner-element">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    </main>;

    return (data.length > 0) ? (
        <main>
            <Container fluid="md sm d-flex justify-content-center flex-column">
                <div className="mt-lg-4 mt-md-4 mt-sm-2 mt-2 d-flex justify-content-center">
                    <span className="badge bg-info text-dark m-3 p-3 word-text">{data[0].word.toUpperCase()}</span>
                </div>
                {data[0].phonetic ?
                    <p className="d-flex justify-content-center"><b>Phonetic: </b><span>{data[0].phonetic ? data[0].phonetic : ""}</span></p> :
                    <p className="d-flex justify-content-center"><b>Phonetic: </b><span><i>Transcription not found</i></span></p>}
                {(data[0].phonetics[0]) ?
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <ReactAudioPlayer
                            src={
                                data[0].phonetics[0].audio ? data[0].phonetics[0].audio : data[0].phonetics[1].audio ?
                                    data[0].phonetics[1].audio : data[0].phonetics[2].audio ? data[0].phonetics[2].audio : " "
                            }
                            controls
                        />
                    </div> : ""}

                <div className="scroll-results mt-lg-4 mt-md-4 mt-sm-2 mt-2">
                    <Container fluid="md sm d-flex justify-content-center flex-column" className="search-wrap">
                        {data.map((elem,index) =>
                            <Fragment key={index}>
                                {elem.meanings.map((meaning, index) =>
                                    <Fragment key={index}>
                                        <h5 className="part-of-speech-text">{meaning.partOfSpeech}</h5>
                                        {meaning.definitions.map((definition,ind) =>
                                            <Fragment key={ind}>
                                                <p><b>Definition {ind+1}:</b> {definition.definition}</p>
                                                {definition.example ? <p><b>Example:</b> <i>{definition.example}</i></p> : ""}
                                            </Fragment>
                                        )}
                                        {meaning.synonyms[0] ? <p><b><i><Badge bg="success mr-4">Synonyms:</Badge></i></b><i>  {meaning.synonyms.join(", ")}</i></p>
                                            : <p><b><i><Badge bg="danger mr-2">Synonyms:</Badge></i></b><i>  Not found</i></p>}
                                        {meaning.antonyms[0] ? <p><b><i><Badge bg="success mr-4">Antonyms:</Badge></i></b><i>  {meaning.antonyms.join(", ")}</i></p>
                                            : <p><b><i><Badge bg="danger mr-2">Antonyms:</Badge></i></b><i>  Not found</i></p>}
                                    </Fragment>
                                )}
                            </Fragment>
                        )}
                    </Container>
                </div>

            </Container>
        </main>
    ) : "";
};

export default ResultPage;
