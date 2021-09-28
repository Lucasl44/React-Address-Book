import { useState } from "react";
import {Form} from "./components/Form.js";
import "./App.css"
//Main app build
const App = () => {
  // Initial state that will be passed the inputs from the form
  const [output, setOutput] = useState([]);
  // Function recieving the input data from form component 
  const handleForm = (data) => {
    setOutput([...output, data])
  }
  // return Div holding building blocks for webpage
  return (
    <div>
      {/* form tag imported from Form.js passed the caller for handleForm function */}
      <Form handleForm={handleForm}/>
      {/* maps the data passed back from the inputs by handleform */}
      {output.map((item, index) => (
        // the map allows for the input values in output to be mapped to corresponding variables
        <Address num={index + 1} key={index} name={item.name} number={item.number}/>))}
    </div>
  );
};

//box created to take mapped variables and output them
const Address = (props) => {
  return <h3>{props.num} {props.name} {props.number}</h3>
}
export default App;

import { useState } from "react";

// Function to export recieving the handleForm tag from App.js
export const Form = ({ handleForm }) => {
    // Two states, one for each input to hold the value
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    
    // Function triggered on submit of enter or button
    const handleSubmit = (e) => {
        // stops the page reloading
        e.preventDefault();
        // passes the data to handle form in App.js
        handleForm({name, number});
        // resets the values in input boxes to "" for next input
        setName("");
        setNumber("");
    };

    return (
        // form tag passed call to handleSubmit function
        <form onSubmit={handleSubmit}>
            {/* Input for each box assigning functions and values to execute, ensuring the data in the hook always matches the input */}
            <Input value={name} func={setName} label="Name:" name="name"/>
            <Input value={number} func={setNumber} label="Number:" name="number" />
            <button type="submit">Submit</button>
        </form>
    );
};

// component taking 4 values defined in the Input elements above
const Input = ({ value, func, label, name }) => {
    return (
        <>
        {/* label assiged the the name taken from above with the content within th Label */}
            <label htmlFor={name}>{label}</label>
            {/* on key presses within the input box, this event at e is passed to the setName function */}
            <input type="text" name={name} onChange={(e) => func(e.target.value)} value={value}></input>
        </>
    )
}