import React from "react";
import SideBar from "./SideBar";
import YoutubePage from "./Pages/YoutubePage";

class App extends React.Component {
	state = {
		selectedSite: "",
	};

	onSelectedSite = (site) => {
		this.setState({ selectedSite: site });
		console.log(site);
	};

	render() {
		return (
			<div>
				<SideBar onSelectedSite={this.onSelectedSite} />
				<YoutubePage />
			</div>
		);
	}
}

export default App;
