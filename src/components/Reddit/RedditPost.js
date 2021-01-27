import React from "react";

const RedditPost = ({ post }) => {
	const removeAmp = (string) => {
		string = string.replace("amp;s", "s");
		return string;
	};

	const imgReturn = () => {
		const imgSrc = post.data.preview
			? post.data.preview.images[0].source.url
			: "";

		return removeAmp(imgSrc);
	};

	return (
		<div className="ui card four wide column">
			<div className="image">
				<img src={imgReturn()} alt="" class="reddit-list" />
			</div>
			<div class="content">
				<a class="header">Kristy</a>
				<div class="meta">
					<span class="date">Joined in 2013</span>
				</div>
				<div class="description">
					Kristy is an art director living in New York.
				</div>
			</div>
		</div>
	);
};

export default RedditPost;
