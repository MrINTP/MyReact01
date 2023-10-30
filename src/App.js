// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./mymain/MyMain";
import MyTest from "./mytest/MyTest";
import Myfile01 from "./mycomponent/Myfile01";

const App = () => {
  return (
    <div className="App">
      <MyMain />
      <MyTest />
      <Myfile01 />
    </div>
  );
};

export default App;
