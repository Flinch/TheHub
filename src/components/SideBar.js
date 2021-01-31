import React from "react";
import Sidebar from "react-sidebar";

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
          <div className="ui vertical labeled icon menu">
            <a className="item" onClick={() => this.onSelectedSite("youtube")}>
              <i className="youtube icon" style={{ color: "red" }}></i>
              YouTube
            </a>
            <a className="item" onClick={() => this.onSelectedSite("reddit")}>
              <i className="reddit icon" style={{ color: "red" }}></i>
              Reddit
            </a>
            <a className="item">
              <i className="twitter icon"></i>
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
