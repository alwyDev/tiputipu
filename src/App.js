import React, { useState } from "react";
import "./App.css";
import "./Post";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Patrick",
      caption: "ngantuk cuy",
      imageUrl:
        "https://www.greenscene.co.id/wp-content/uploads/2020/08/Patrick-Stars-696x497.jpg",
    },
    {
      username: "SpongeBob",
      caption: "Saatnya bekerja!",
      imageUrl:
        "https://i.pinimg.com/originals/b4/2a/0b/b42a0bda8428f573054353009edbe61c.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
