import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/app.css";
import PostItem from "./components/PostItem";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Rost', body: 'Description'},
    {id: 12, title: 'Rosdt', body: 'Description'},
    {id: 11, title: 'Rostasdasd', body: 'Description'},
  ])


  

  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <h1>Посты</h1>
      {posts.map(post =>
        <PostItem post={post} key={post.id}/>
      )}
    </div>
  );
}

export default App;
