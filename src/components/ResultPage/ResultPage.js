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
                <p className="mt-lg-5 mt-md-5 mt-sm-5 mt-5">Searching word is: <span>{data[0].word}</span></p>
                <p>Phonetic: <span>{data[0].phonetics.text ? data[0].phonetics.text : ""}</span></p>
                <ReactAudioPlayer
                    src={
                        data[0].phonetics[0].audio ? data[0].phonetics[0].audio : data[0].phonetics[1].audio ?
                            data[0].phonetics[1].audio : data[0].phonetics[2].audio ? data[0].phonetics[2].audio : " "
                    }
                    controls
                />
                <p>Meanings:</p>
                {data.map((elem,index) => {
                    <Fragment key={index}>
                        {elem.meanings.map((newItem, index) => {
                            <Fragment key={index}>
                                <p>{newItem.partOfSpeech}</p>
                                console.log(newItem)
                                {/*{newItem.partOfSpeech.map((elem,index) => {*/}
                                {/*    <Fragment key={index}>*/}
                                {/*        <p>{elem.definition}</p>*/}
                                {/*    </Fragment>;*/}
                                {/*})}*/}
                            </Fragment>;
                        })}
                    </Fragment>;
                })};
                {/*// <Fragment key={index}>*/}
                {/*//     <hr className="mt-2 mb-3"/>*/}
                {/*//     {elem.meanings.map((meaning) => {*/}
                {/*//         console.log(meaning[0]);*/}
                {/*//     }*/}
                {/*        // <Card bg="primary" key={idx} text="white" style={{ width: '18rem' }} className="mb-2">*/}
                {/*        //     <Card.Header>{meaning}</Card.Header>*/}
                {/*        //     <Card.Body>*/}
                {/*        //         <Card.Title>{variant} Card Title </Card.Title>*/}
                {/*        //         <Card.Text>*/}
                {/*        //             Some quick example text to build on the card title and make up the bulk*/}
                {/*        //             of the card's content.*/}
                {/*        //         </Card.Text>*/}
                {/*        //     </Card.Body>*/}
                {/*        // </Card>*/}
                {/*//     )};*/}
                {/*// </Fragment>;*/}
                {/*// })}*/}
            </Container>
        </main>
    ) : "";
};
export default ResultPage;
