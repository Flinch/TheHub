import React from "react";
import "./VideoItem.css";
import LastSeen from "./LastSeen";
import Truncate from "react-truncate";
import decode from "decode-html";

const VideoItem = ({ video, onSelectedVideo }) => {
	const truncate = (str) => {
		return str.length > 40 ? str.substring(0, 50) + "..." : str;
	};

	const convertDate = () => {
		const newDate = new Date(video.snippet.publishTime);
		return newDate;
	};

	return (
		<div onClick={() => onSelectedVideo(video)} className="video item">
			<img
				class="ui image thumbnail"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div class="content">
				<div className="header">
					<h5> {decode(truncate(video.snippet.title))} </h5>
				</div>

				<div className="description summary">
					<small>
						{video.snippet.channelTitle}
						<LastSeen date={convertDate()} />
					</small>
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
