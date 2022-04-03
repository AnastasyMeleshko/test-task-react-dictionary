import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const Form = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => setValue(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const res = await fetch(`${url}/${value}`);
        //     const newData = await res.json();
        //     if (typeof newData["word"] !== "undefined") {
        //         setValue(value);
        //     }
        //
        // } catch (e) {
        //     console.dir(e);
        // }

        navigate(`/${value}`, { state: {value: `${value}`} });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-1">
            <label htmlFor="search" className="form-label d-grid gap-2 col-lg-6 col-md-8 col-sm-10 mx-auto">
                <input id="search" className="form-control" onChange={handleChange} type="text" value={value} autoComplete="off" required="required" placeholder="Search..."/>
            </label>
            <div className="d-grid gap-2 col-lg-3 col-md-4 col-sm-6 mx-auto">
                <button type="submit" className="btn btn-primary my-5">Search</button>
            </div>
        </form>
    );
};

export default Form;
