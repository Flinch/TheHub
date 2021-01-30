import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmitTerm(this.state.term);
	};

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	render() {
		return (
			<div className="ui form">
				<form className="ui form" onSubmit={this.onSubmit}>
					<div className="field">
						<label> Type in any subreddit </label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
