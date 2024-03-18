import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here such as sending a request to a server to authenticate the user
  };
  return (
    <div className="Wrapper">
      <form onSubmit={handleSubmit}>
        <img
          src="/ExamGuardLogo3.PNG"
          className="logo"
          alt="ExamGuard logo"
          width="200"
          height="50"
        />

        <div className="input-box">
          <input
            type="text"
            id="username"
            value={username}
            placeholder="User name"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <button type="submit" className="LoginBtn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
