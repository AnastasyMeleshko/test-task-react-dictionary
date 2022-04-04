import React, {Fragment, useEffect, useState} from "react";
import {useParams , useNavigate} from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultPage = () => {
    const [data, setData] = useState([]);
    const { wordToSearch } = useParams();
    const navigate = useNavigate();

    const fetchData = async (url) => {
        try {
            const response = await axios.get(`${url}/${wordToSearch}`);
            setData(response.data);
            console.log(response.data);
        } catch (e) {
            console.dir(e);
            navigate("/notfound");
        }
    };

    useEffect(() => {
        fetchData(url);
    },[]);

    console.log(data);

    return (data.length > 0) ? (
        <main>
            <Container fluid="md d-flex justify-content-center flex-column">
                <p className="mt-lg-5 mt-md-5 mt-sm-5 mt-5">{data[0].word}</p>
                <p>Phonetic: <span>{data[0].phonetic ? data[0].phonetic : ""}</span></p>
                <ReactAudioPlayer
                    src={
                        data[0].phonetics[0].audio ? data[0].phonetics[0].audio : data[0].phonetics[1].audio ?
                            data[0].phonetics[1].audio : data[0].phonetics[2].audio ? data[0].phonetics[2].audio : " "
                    }
                    controls
                />
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
