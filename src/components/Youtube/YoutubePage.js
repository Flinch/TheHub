import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import YoutubeLogo from "./images/youtube.svg";
import "./YoutubePage.css";
import Loader from "../Loader";

class YoutubePage extends React.Component {
	state = {
		videos: [],
		selectedVideo: null,
		onFirstLoad: false,
	};

	componentDidMount() {
		this.setState({ onFirstLoad: true });
	}

	onTermSubmit = async (term) => {
		this.setState({ onFirstLoad: false });
		const response = await youtube.get("/search", {
			params: { q: term },
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onSelectedVideo = (video) => {
		this.setState({ selectedVideo: video });
	};

	YoutubeLogo = () => {
		if (this.state.onFirstLoad) {
			return (
				<div className="container" style={{ textAlign: "center" }}>
					<img src={YoutubeLogo} class="youtube-logo" />
				</div>
			);
		}
	};

	setLoader = () => {
		if (!this.state.onFirstLoad && this.state.videos.length == 0) {
			return <Loader />;
		}
	};

	render() {
		return (
			<div>
				<div className="ui container">
					{this.setLoader()}
					{this.YoutubeLogo()}
					<SearchBar onTermSubmit={this.onTermSubmit} />
					<div className="ui grid">
						<div className="ui row">
							<div className="eleven wide column">
								<VideoDetail video={this.state.selectedVideo} />
							</div>
							<div className="five wide column">
								<VideoList
									onSelectedVideo={this.onSelectedVideo}
									videos={this.state.videos}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default YoutubePage;
