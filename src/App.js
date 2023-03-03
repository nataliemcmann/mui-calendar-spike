import './App.css';
import React from 'react';
//import components
import DatePickers from './DatePickers/DatePickers';
import DateRender from './DateRender/DateRender';

function App() {


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <DatePickers/>
      <DateRender/>
    </div>
  );
}

export default App;
