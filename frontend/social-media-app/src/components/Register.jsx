import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = () => {
        const payload = {
            name,email,gender,password
        }
        console.log(payload)
        fetch("https://rich-rose-wrap.cyclic.app/users/register", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    }
    return (
      <>
        <div>Register</div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
      </>
    );
}

export default Register