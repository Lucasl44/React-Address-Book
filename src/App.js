import { useState } from "react";
import {Form} from "./components/Form.js";
import "./App.css"
import Address from "./components/Address.js"
const App = () => {
  const [output, setOutput] = useState([]);
  const handleForm = (data) => {
    setOutput([...output, data])
  }
  return (
    <div className="wrapper">
      <h1>Address Book</h1>
      <div className="box">
        <Form handleForm={handleForm}/>
        {output.map((item, index) => (
          <Address num={index + 1} key={index} name={item.name} number={item.number}/>))}
      </div>
    </div>
  );
};


export default App;