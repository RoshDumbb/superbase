/** @format */

import "./App.css";
import { useState, useEffect } from "react";
import { supabase } from "./Client";
function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });

  const { title, content } = post;

  useEffect(() => {
    fetchPosts()
  },[])

  async function fetchPosts() {
    const { data } = await supabase.from('posts').select()
    setPosts(data);
  }

   async function createPost() {
     await supabase
       .from('posts')
       .insert([
        {title, content}
       ])
       .single()
     setPost({ title: "", content: "" }) // reset the form
     fetchPosts() // to update the ui with the new post
   }
  
  return (
    <div className="App">
      <input
        placeholder="Title"
        value={title}
        onChange={e => setPost({...post, title: e.target.value })}
      />
      <input
        placeholder="content"
        value={content}
        onChange={e => setPost({...post, content: e.target.value })}
      />

      <button onClick={createPost}>Create Post</button>
      {posts.map((post) => (
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
     ))}
    </div>
  );
}

export default App;
