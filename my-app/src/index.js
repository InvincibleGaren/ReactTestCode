import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
import Counter from "./chapter_07/Counter";
import MeasureExample from "./chapter_07/MeasureExample";
import Accommodate from "./chapter_07/Accommodate";
import UseEffectTest from "./chapter_07/UseEffectTest";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SignUp";
import Calculator from "./chapter_12/Calculator";
import WelcomeDialog from "./chapter_13/SignUpDialog";
import ProfileCard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DarkOrLight />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
