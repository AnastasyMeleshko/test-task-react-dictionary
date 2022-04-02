import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const Form = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => (setValue(e.target.value));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${url}/${value}`);
            const data = await res.json();
            navigate("/res", { state: { data }});

        } catch (e) {
            console.dir(e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={value} required="required"/>
            <button type="submit">Search</button>
        </form>
    );
};

export default Form;
