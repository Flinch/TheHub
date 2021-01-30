import React from "react";
import Sidebar from "react-sidebar";
import { Header, Icon, Image, Menu } from "semantic-ui-react";

class SideBar extends React.Component {
  state = { sidebarOpen: false, userSite: "" };

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  };

  onSelectedSite = (site) => {
    this.setState({ sidebarOpen: false });
    this.props.onSelectedSite(site);
  };

  render() {
    return (
      <Sidebar
        sidebar={
          <div class="ui vertical labeled icon menu">
            <a class="item" onClick={() => this.onSelectedSite("youtube")}>
              <i class="youtube icon"></i>
              YouTube
            </a>
            <a class="item" onClick={() => this.onSelectedSite("reddit")}>
              <i class="reddit icon"></i>
              Reddit
            </a>
            <a class="item">
              <i class="twitter icon"></i>
              Twitter
            </a>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <i
          onClick={() => this.onSetSidebarOpen(true)}
          style={{ margin: "10px", cursor: "pointer" }}
          class="bars icon large"
        ></i>{" "}
      </Sidebar>
    );
  }
}

export default SideBar;
