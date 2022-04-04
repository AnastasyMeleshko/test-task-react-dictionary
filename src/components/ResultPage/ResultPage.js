import React, {Fragment, useEffect, useState} from "react";
import {useParams , useNavigate} from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
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
            console.log(response.data);
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
        <Container fluid="md d-flex justify-content-center flex-column" className="spinner-container">
            <Spinner animation="border" role="status" className="spinner-element">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    </main>;

    return (data.length > 0) ? (
        <main>
            <Container fluid="md d-flex justify-content-center flex-column">
                <p className="mt-lg-5 mt-md-5 mt-sm-5 mt-5">{data[0].word}</p>
                {data[0].phonetic ?
                    <p>Phonetic: <span>{data[0].phonetic ? data[0].phonetic : ""}</span></p> :
                    <p>Phonetic: <span><i>Transcription not found</i></span></p>}
                {(data[0].phonetics[0]) ?
                    <ReactAudioPlayer
                        src={
                            data[0].phonetics[0].audio ? data[0].phonetics[0].audio : data[0].phonetics[1].audio ?
                                data[0].phonetics[1].audio : data[0].phonetics[2].audio ? data[0].phonetics[2].audio : " "
                        }
                        controls
                    /> : ""}
                {data.map((elem,index) =>
                    <Fragment key={index}>
                        {elem.meanings.map((meaning, index) =>
                            <Fragment key={index}>
                                <hr/>
                                <h5>{meaning.partOfSpeech}</h5>
                                {meaning.definitions.map((definition,ind) =>
                                    <Fragment key={ind}>
                                        <p><b>Definition {ind+1}:</b> {definition.definition}</p>
                                        {definition.example ? <p><b>Example:</b> <i>{definition.example}</i></p> : ""}
                                    </Fragment>
                                )}
                                {meaning.synonyms[0] ? <p><b><i>Synonyms: </i></b><i>{meaning.synonyms.join(", ")}</i></p> : <p><b><i>Synonyms: </i></b><i>Not found</i></p>}
                                {meaning.antonyms[0] ? <p><b><i>Antonyms: </i></b><i>{meaning.antonyms.join(", ")}</i></p> : <p><b><i>Antonyms: </i></b><i>Not found</i></p>}
                            </Fragment>
                        )}
                    </Fragment>
                )}
            </Container>
        </main>
    ) : "";
};

export default ResultPage;
