import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import { Container } from "react-bootstrap";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultPage = () => {
    const [data, setData] = useState("");
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
            setData(newData.data);

        } catch (e) {
            console.dir(e);
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
    ) : (
        <main>
            <Container>
                <p>RESULT --- </p>
            </Container>
        </main>
    );
};

export default ResultPage;
