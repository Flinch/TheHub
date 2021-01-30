import React from "react";
import RedditPost from "./RedditPost";
import "./RedditListings.css";

const RedditListings = ({ reddit_data, selectedPost }) => {
	const RedditList = reddit_data.map((post) => {
		if (post.data.preview != null && !post.data.is_video) {
			return <RedditPost post={post} selectedPost={selectedPost} />;
		}
	});

	return <div className="container reddit-list"> {RedditList} </div>;
};

export default RedditListings;
