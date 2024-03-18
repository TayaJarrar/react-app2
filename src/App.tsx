import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

function App() {
  return (
    <div className="Wrapper">
      <LoginForm />
    </div>
  );
}

export default App;
