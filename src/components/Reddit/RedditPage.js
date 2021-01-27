import React from "react";
import reddit from "../../api/reddit";
import axios from "axios";
import SearchBar from "./SearchBar";
import RedditListings from "./RedditListings";

class RedditPage extends React.Component {
	state = { reddit_data: [], term: "" };

	onSubmitTerm = async (term) => {
		const response = await reddit.get(`${term}.json`);
		this.setState({ reddit_data: response.data.data.children });
	};

	async componentDidMount() {
		const response = await axios.get("https://api.reddit.com");
		this.setState({ reddit_data: response.data.data.children });
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmitTerm={this.onSubmitTerm} />
				<RedditListings
					reddit_data={this.state.reddit_data}
					className="listings-container"
				/>
			</div>
		);
	}
}

export default RedditPage;
