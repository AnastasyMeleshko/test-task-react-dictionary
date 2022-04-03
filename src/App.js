import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ResultPage from "./components/ResultPage/ResultPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchPage from "./components/SearchPage/SearchPage";

const App = () => {
    return (
        <Router>
            <Header/>
            <br/>
            <br/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/:wordToSearch" element={<ResultPage/>}/>
            </Routes>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </Router>
    );
};

export default App;
