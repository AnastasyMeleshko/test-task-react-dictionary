import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ResultPage from "./components/ResultPage/ResultPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ErrorPage from "./components/ErrorPage/ErrorPage";


const App = () => {
    return (
        <Router>
            <Header/>
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/:wordToSearch" element={<ResultPage/>}/>
                    <Route path="/notfound" element={<ErrorPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
    );
};

export default App;
