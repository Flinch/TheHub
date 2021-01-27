import React from "react";
import axios from "axios";

export default axios.create({
	baseURL: "https://www.reddit.com/r/",
	responseType: "json",
});
