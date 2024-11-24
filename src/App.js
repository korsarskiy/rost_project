import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/app.css";


function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Текст в импуте')
  

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <div className="post">
        <div className="post__content">
          <strong>1. JS</strong>
          <div className=""> 
            это язык программирования
          </div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>   
    </div>
  );
}

export default App;
