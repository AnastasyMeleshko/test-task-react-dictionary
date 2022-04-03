import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => (setValue(e.target.value));

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate(`/${value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={value} required="required"/>
            <button type="submit">Search</button>
        </form>
    );
};

export default Form;
