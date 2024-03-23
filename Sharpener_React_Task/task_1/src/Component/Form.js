import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [textValue, setTextValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [value, setvalue] = useState("");

  const handleUserNameChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
  };

  const handleAgeChange = (event) => {
    const value = event.target.value;
    setAgeValue(value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    if(textValue === "" && ageValue === ""){
       setvalue("Invalid UserInput");
    }
    else{

      setvalue("");

      // Create a new object representing the submitted data
    const newSubmission = { userName: textValue, userAge: ageValue };
    // Update the submitted data array by adding the new submission
    setSubmittedData([...submittedData, newSubmission]);
    // Clear the input fields after submission
    setTextValue("");
    setAgeValue("");
    }
    
  };

  return (
    <div className="div1">
      <form onSubmit={handleSubmit} id="formid">
        <div>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="UserName"
            value={textValue}
            onChange={handleUserNameChange}
            name="userName"
          />
        </div>
        <div>
          <label htmlFor="userAge">Age:</label>
          <input
            type="number"
            id="UserAge"
            value={ageValue}
            onChange={handleAgeChange}
            name="userAge"
          />
        </div>
        <button type="submit">Add User</button>
      </form>

      {/* Render all submitted dataa */}

      <div className="div2">
        <h2>All Submitted Data:</h2>
        {submittedData.map((data, index) => (
          <div key={index}>
            <p>Username: {data.userName}</p>
            <p>Age: {data.userAge}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="h1">{value}</h1>
      </div>
    </div>
  );
};

export default Form;
