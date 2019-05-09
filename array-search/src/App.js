import React from 'react';
import TheJSON from "./Components/TheJSON"
import arraysearch from 'arraysearch'
import './App.css';


const find = arraysearch.Finder

function App() {
  const x = find.all.in(TheJSON).having("Hashtags").with("#grandmother03")
  console.log(x)
  return (
    <div className="App">
      I ma here :)
    </div>
  );
}

export default App;
