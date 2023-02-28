import React from "react";
import "./App.css";
import Axios from 'axios';


function App() {
  const [name, setName] = React.useState("")
  const [height, setHeight] = React.useState("")
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios({
        method: "post",
        url:   'http://localhost:3001/insert',
        crossDomain: true,
        data: {
          fullName: name,
          height: height,
          email: email,
        }
        })
  }

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit}>
        <h1>Hello</h1>
        <input
        className = "Name"
        type="text"
        placeholder="First and Last Name"
        onChange={(e) => {setName(e.target.value)}}
        />

        <input
        className = "Height"
        type="number"
        placeholder="What is your height in cm?"
        onChange={(e) => {setHeight(e.target.value)}}
        />

        <input
        className = "Email"
        type="email"
        placeholder="Email Address"
        onChange={(e) => {setEmail(e.target.value)}}
        />
        <button onClick>Submit</button>
        </form>
      </header>
    </div>
  );
}
export default App;
