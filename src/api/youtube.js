import axios from "axios";

const KEY = "AIzaSyDy5TgbBhInTN5bGRTBFdn1YG0ZoAMO6Vw";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 7,
		key: KEY,
	},
});
