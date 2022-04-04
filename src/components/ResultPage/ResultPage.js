import React, {useEffect, useState} from "react";
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

    return (typeof data.title !== "undefined") ? (
        <main>
            <Container>
                <p>{data.title}</p>
                <p>{data.message}</p>
                <p>{data.resolution}</p>
            </Container>
        </main>
    ) : (data.length > 0) ? (
        <main>
            <Container>
                <p>Searching word is: <span>{data[0].word}</span></p>
                <p>Phonetic: <span>{data[0].phonetic ? data[0].phonetic : ""}</span></p>
                <ReactAudioPlayer
                    src={
                        data[0].phonetics[0].audio ? data[0].phonetics[0].audio : data[0].phonetics[1].audio ?
                            data[0].phonetics[1].audio : data[0].phonetics[2].audio
                    }
                    controls
                />
                <p>Meanings:</p>
            </Container>
        </main>
    ) : "";
};

export default ResultPage;
