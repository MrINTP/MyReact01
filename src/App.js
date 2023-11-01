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

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./mymain/MyMain";
import MyNotFound from "./mynotfound/MyNotFound";
import Myfile01 from "./mycomponent/Myfile01";
import MyHeader from "./myheader/MyHeader";
import "./App.css";
import MyTest from "./mytest/MyTest";
import MyToDo from "./mycomponent/MyToDo";

const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
      <MyHeader />
        <Routes>
          <Route path="/" element={<MyMain />}/>
          <Route path="file" element={<Myfile01/>}/>
          <Route path="test" element={<MyTest/>}/>
          {/* 여기서 URL에 todo만 입력하면 404로 가게 된다 맨 */}
          {/* todo/3 이렇게 입력만 해도 todo로 간다. 3 아닌 다른 키 값 넣어도 된다 */}
          <Route path="todo/:todoID" element={<MyToDo />} />
          {/*Other routes are not found*/}
          <Route path="*" element={<MyNotFound />}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}
export default App;

// import React from "react";

// const App = () => {

//   const isToggled = true;

//   return(
//     <div>
//       {/* 스타일 style (변수 사용을 위함){(스타일 객체) {}객체} => 암튼 중괄호를 두번 써야함*/}
//       {/* 자바스크립트의 변수값으로만 DOM을 제어할 수 있음. 이에 접근 최소화를 할 수 있다. 리엑트에서는 지양한다. */}
//       style={{
//         //?화살표에서 true면 red, false면 blue
//         color: isToggled ? "red" : "blue"
//       }}안녕하세요 안녕하세요
//     </div>
//   );

// }
// export default App;
