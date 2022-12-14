import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import "./index.css";

var contents = [
  { id: 1, title: "HTML", description: "HTML is ..." },
  { id: 2, title: "JS", description: "JS is ..." },
  { id: 3, title: "React", description: "React is ..." },
];

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}
function Topic() {
  return (
    <div>
      <h3>Topic</h3>
      Topic...
    </div>
  );
}
function Topics() {
  var lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Route path="/topics/:topic_id">
        <Topic />
      </Route>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink end to="/topics">
            Topics
          </NavLink>
        </li>
        <li>
          <NavLink end to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

let A = ReactDOM.createRoot(document.getElementById("root"));

A.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
