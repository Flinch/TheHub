import React from "react";
import ExpandedPost from "./ExpandedPost";
import Popup from "reactjs-popup";

class RedditPost extends React.Component {
	state = { spans: 10, showModal: false };

	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
		this.setState({ showModal: false });
	}

	componentDidMount = () => {
		this.imageRef.current.addEventListener("load", this.setSpans);
	};

	removeAmp = (string) => {
		string = string.replace(/amp;s/gi, "s");
		return string;
	};

	imgReturn = () => {
		const { post } = this.props;
		const imgSrc = post.data.preview
			? post.data.preview.images[0].source.url
			: "";
		return this.removeAmp(imgSrc);
	};

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 12);
		if (spans > 10 && spans < 16) {
			this.setState({ spans: 16 });
		} else {
			const adjFactor = Math.ceil(0.0322 * height - 6.2) - 1;
			this.setState({ spans: spans - adjFactor });
		}
	};

	truncate = (str) => {
		return str.length > 80 ? str.substring(0, 50) + ".." : str;
	};

	onClick = () => {
		this.setState({ showModal: true });

		if (this.state.showModal) {
			console.log("Hello");
		}
	};

	render() {
		const { post } = this.props;
		return (
			<div
				className="ui card"
				style={{ gridRowEnd: `span ${this.state.spans}` }}
				onClick={() => {
					this.onClick();
				}}
			>
				{/*
				<ExpandedPost /> */}
				<div className="image">
					<img
						ref={this.imageRef}
						src={this.imgReturn()}
						alt=""
						class="reddit-list"
					/>
				</div>
				<div class="content">
					<a class="header" style={{ fontSize: "16px" }}>
						r/{post.data.subreddit}
					</a>
					<div class="meta">
						<span class="date">
							<small>posted by: {post.data.author}</small>
						</span>
					</div>
					<div class="description">
						{this.truncate(post.data.title)}
					</div>
				</div>
				<ExpandedPost selectedPost={post} />
			</div>
		);
	}
}

export default RedditPost;
