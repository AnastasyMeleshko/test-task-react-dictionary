import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultPage = () => {
    const [data, setData] = useState([]);
    const { wordToSearch } = useParams();
    const { state } = useLocation();

    console.log({wordToSearch});

    // if (state.value !== null) {
    //     console.log(state.value);
    // }

    // console.log(`state.value - ${state.value}  `);

    const fetchData = async (url) => {

        // setData(state.value);

        try {
            const res = await fetch(`${url}/${wordToSearch}`);
            const newData = await res.json();
            setData(newData);

        } catch (e) {
            console.dir(e);
        }
    };

    useEffect(() => {
        fetchData(url);
    },[]);

    console.log(data);

    // let meanings;
    // if (data.title !== "undefined") {
    //     meanings = {};
    // } else {
    //     meanings = data[0];
    //     console.log(meanings);
    // }
    //
    // console.log(meanings);

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
                <p>Phonetic: <span>{data[0].phonetic}</span></p>
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
