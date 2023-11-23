import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Nhan'
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nhan
        </p>

        <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}</p>

        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}


        {isMale && (
          <div>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </React.Fragment>
        )}

        {isMale && (
          <>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li key={color} style={{ color }}>{color}</li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
