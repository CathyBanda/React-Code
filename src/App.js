import React from "react";
import "./App.css";
import Axios from 'axios';

function App() {
  // eslint-disable-next-line
  const [name, setName] = React.useState("")
  // eslint-disable-next-line
  const [height, setHeight] = React.useState("")
// eslint-disable-next-line
  const [email, setEmail] = React.useState("")
  // eslint-disable-next-line

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.post('http://127.0.0.1:3001/height', {
          fullName: name,
          height: height,
          email: email,
        })
  }

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit}>
        <h1>Hello</h1>
        <input type="text" placeholder="First and Last Name" />
        <input type="number" placeholder="What is your height in cm?" />
        <input type="email" placeholder="Email Address" />
        <button onClick>Submit</button>
        </form>
      </header>
    </div>
  );
}
export default App;
