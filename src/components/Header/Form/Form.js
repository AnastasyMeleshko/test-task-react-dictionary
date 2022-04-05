import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => setValue(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate(`/${value}`);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-1 mt-5">
            <label htmlFor="search" className="form-label d-grid gap-2 col-lg-6 col-md-8 col-sm-10 mx-auto">
                <input id="search" className="form-control" onChange={handleChange} type="text" value={value} autoComplete="off" required="required" placeholder="Search..."/>
            </label>
            <div className="d-grid gap-1 col-lg-3 col-md-4 col-sm-6 mx-auto">
                <button type="submit" className="btn btn-primary my-4">Search</button>
            </div>
        </form>
    );
};

export default Form;
