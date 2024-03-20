import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import PageOne from "./components/PageOne";

//import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, RouteProps } from "react-router-dom"; // Import RouteProps
function App() {
  return (
    <div className="Wrapper">
      {/* <Route path="/" component={LoginForm} />  */}
      {/* <Route path="/pageOne" component={PageOne} /> */}
      <PageOne />
      {/*<LoginForm />*/}
    </div>
  );
}

export default App;
