import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import "semantic-ui-css/semantic.min.css";
import Reddit from "./components/Reddit/RedditPage";

TimeAgo.addDefaultLocale(en);
ReactDOM.render(<App />, document.querySelector("#root"));
