import React from "react";
import RedditPost from "./RedditPost";
import "./RedditListings.css";

const RedditListings = ({ reddit_data }) => {
	const RedditList = reddit_data.map((post) => {
		return <RedditPost post={post} />;
	});

	return <div className="reddit-list"> {RedditList} </div>;
};

export default RedditListings;
