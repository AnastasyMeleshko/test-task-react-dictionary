import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultPage = () => {
    const [data, setData] = useState("");
    const { wordToSearch } = useParams();
    const { state } = useLocation();

    // if (state.value !== null) {
    //     console.log(state.value);
    // }


    const fetchData = async (url) => {

        // setData(state.value);

        try {
            const res = await fetch(`${url}/${wordToSearch}`);
            const data = await res.json();


            setData(data);

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
            <p>{data.title}</p>
            <p>{data.message}</p>
            <p>{data.resolution}</p>
        </main>
    ) : (
        <main>
            <p>RESULT for {data.word}</p>
        </main>
    );
};

export default ResultPage;
