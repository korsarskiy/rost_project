import React, { useRef, useState } from "react";
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

  const [post, setPost] = useState({title: '', body: ''})


  const addNewPost = (e) => {
    e.preventDefault()
  
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <form>

        <MyInput 
          // Управляемый компонент
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Название поста"
        />

        
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}> Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
