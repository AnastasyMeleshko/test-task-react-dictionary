import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import InfoPage from "./components/InfoPage/InfoPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <Router>
            <Header/>
            <br/>
            <br/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/info" element={<InfoPage/>}/>
            </Routes>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </Router>
    );
};

export default App;
