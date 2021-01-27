import React from "react";
import decode from "decode-html";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div> Loading... </div>;
	}

	const url = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="video player" src={url} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{decode(video.snippet.title)}</h4>
				<p> {decode(video.snippet.description)} </p>
			</div>
		</div>
	);
};

export default VideoDetail;
