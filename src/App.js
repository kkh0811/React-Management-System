import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
app.js는 실질적으로 웹사이트 화면에 대한 내용 출력을 담당하는 부분
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h2>이것은 수정되엇음</h2>
      </header>
    </div>
  );
}

export default App;
