import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const searchData = location.state.data;
    console.log(searchData);

    // console.log({location});
    // console.log(props);
    // console.log(location.state.data);

    return (typeof searchData.title !== "undefined") ? (
        <main>
            <p>{searchData.title}</p>
            <p>{searchData.message}</p>
            <p>{searchData.resolution}</p>
        </main>
    ) : (
        <main>
            <p>{searchData[0].word}</p>
        </main>
    );
};

export default ResultPage;
