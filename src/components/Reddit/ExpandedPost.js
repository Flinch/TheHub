import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function ExpandedPost({ selectedPost }) {
	const [open, setOpen] = React.useState(false);

	function removeAmp(string) {
		string = string.replace(/amp;s/gi, "s");
		return string;
	}

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button>Expand</Button>}
			style={{ width: "450px" }}
		>
			<Image
				class="image"
				size="large"
				src={removeAmp(selectedPost.data.preview.images[0].source.url)}
				wrapped
			/>
			<div className="content">
				<Header>r/{selectedPost.data.subreddit}</Header>
				<p>{selectedPost.data.title}</p>
			</div>
			<Modal.Actions>
				<Button
					color="green"
					target="_blank"
					href={`https://reddit.com${selectedPost.data.permalink}`}
				>
					View on Reddit
				</Button>
				<Button
					content="Close"
					labelPosition="right"
					onClick={() => setOpen(false)}
				/>
			</Modal.Actions>
		</Modal>
	);
}

export default ExpandedPost;
