import React from "react";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [device,setDevice] = useState("");

  const handleAddPost = () => {
    const payload = {
      title,
      body,
      device,
    };
    console.log(payload);
    fetch("https://rich-rose-wrap.cyclic.app/posts/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>Create Post</div>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter device"
        value={device}
        onChange={(e) => setDevice(e.target.value)}
      />
      
      <button onClick={handleAddPost}>Add</button>
    </>
  );
};

export default CreatePost;
