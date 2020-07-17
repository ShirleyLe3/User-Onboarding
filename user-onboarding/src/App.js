import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Form from "./Form";
import Input from "./Input";
// import styled from "styled-components";

export default function App() {
  // export default function Input(props) {
  // const errorMessage = props.errors[props.name];
  // return (
  //   <label htmlFor="name">
  //     {props.label}
  //     <input {...props} />
  //     {errorMessage.length !== 0 && <p className="error">{errorMessage}</p>}
  //   </label>
  // );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign Up</h1>
        <Form />
        {/* );                          THE RELOAD PAGE FOR REACT APP
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}
