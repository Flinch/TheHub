import React from "react";
import reddit from "../../api/reddit";
import axios from "axios";
import SearchBar from "./SearchBar";
import RedditListings from "./RedditListings";
import ExpandedPost from "./ExpandedPost";

class RedditPage extends React.Component {
	state = { reddit_data: [], term: "", selectedPost: [] };
	limit = 50;

	onSubmitTerm = async (term) => {
		const response = await reddit.get(`${term}.json?limit=${this.limit}`);
		this.setState({ reddit_data: response.data.data.children });
	};

	async componentDidMount() {
		const response = await axios.get(
			`https://api.reddit.com?limit=${this.limit}`
		);
		this.setState({ reddit_data: response.data.data.children });
	}

	onSelectedPost = (selectedPost) => {
		this.setState((selectedPost: selectedPost));
		return;
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmitTerm={this.onSubmitTerm} />
				<RedditListings
					reddit_data={this.state.reddit_data}
					className="listings-container"
					selectedPost={this.onSelectedPost}
				/>
			</div>
		);
	}
}

export default RedditPage;
