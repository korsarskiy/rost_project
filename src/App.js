import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/app.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ХЕллоу', body: 'dikfhijifs'},
    { id: 12, title: 'ХЕлasdлоу', body: 'dikfhijifs'},
    { id: 14, title: 'ХЕлasdasdasdлоу', body: 'dikfhijifs'},
    { id: 14, title: 'ХЕлasdasdasdлоу', body: 'dikfhijifs'}

  ])


  

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <form>
        <MyInput type="text" placeholder="Название поста"/>
        <MyInput type="text" placeholder="Название поста"/>
        <MyButton disabled> Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
