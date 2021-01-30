import React from "react";
import SideBar from "./SideBar";
import YoutubePage from "./Youtube/YoutubePage";
import TwitterPage from "./Twitter/TwitterPage";
import RedditPage from "./Reddit/RedditPage";
import ExpandedPost from "./Reddit/ExpandedPost";

class App extends React.Component {
	state = {
		selectedSite: "",
	};

	onSelectedSite = (site) => {
		this.setState({ selectedSite: site });
	};

	displayContent = (content) => {
		if (content == "" || content == "youtube") {
			return <YoutubePage />;
		}

		if (content == "twitter") {
			return <TwitterPage />;
		}

		if (content == "reddit") {
			return <RedditPage />;
		}
	};

	handleClose = () => this.setState({ setOpen: false });

	render() {
		return (
			<div>
				<SideBar onSelectedSite={this.onSelectedSite} />
				{this.displayContent(this.state.selectedSite)}
			</div>
		);
	}
}

export default App;
