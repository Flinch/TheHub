import React from "react";
import Sidebar from "react-sidebar";
import { Header, Icon, Image, Menu } from "semantic-ui-react";

class SideBar extends React.Component {
  state = { sidebarOpen: false, userSite: "" };

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  };

  onSelectedSite = (site) => {
    this.props.onSelectedSite(site);
  };

  render() {
    return (
      <Sidebar
        sidebar={
          <div class="ui vertical labeled icon menu">
            <a class="item" onClick={() => this.onSelectedSite("Twitter")}>
              <i class="home icon"></i>
              Home
            </a>
            <a class="item" onClick={() => this.onSelectedSite("Youtube")}>
              <i class="block layout icon"></i>
              Topics
            </a>
            <a class="item" onClick={() => this.onSelectedSite("Reddit")}>
              <i class="smile icon"></i>
              Friends
            </a>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>Sidebar</button>
      </Sidebar>
    );
  }
}

export default SideBar;
