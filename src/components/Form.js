import { useState } from "react";
import { Input } from "./Input.js"
export const Form = ({ handleForm }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleForm({name, number});
        setName("");
        setNumber("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input value={name} func={setName} label="Name: " name="name"/>
            <Input value={number} func={setNumber} label="Number: " name="number" />
            <button type="submit">Submit</button>
        </form>
    );
};
