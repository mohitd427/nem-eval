import React, { useState } from 'react'
import { useEffect } from 'react'

const AllPosts = () => {
  const [post, setPost] = useState("")
  
  useEffect(() => {
    fetch("https://rich-rose-wrap.cyclic.app/posts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPost(res);
      })
      .catch((err) => console.log(err));
  }, [])
  const handleDelete = (postId) => {
    fetch(`https://rich-rose-wrap.cyclic.app/posts/delete/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div>AllPosts</div>
      {
        post ? post.map((ele) => {
          return (
            <div>
              <h2>Title:{ele.title}</h2>
              <h2>Body:{ele.body}</h2>
              <h2>Device:{ele.device}</h2>
              <button onClick={() => handleDelete(ele._id)}>Delete </button>
              <button>Update</button>
              <hr />
            </div>
          );
        }) : <h3>No Posts Available</h3>
      }

      </>
  )
}

export default AllPosts