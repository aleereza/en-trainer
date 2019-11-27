import React from "react";
import { Link } from "@reach/router";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <Link to="/review">Review</Link>
        <Link to="/stats">Statistics</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    );
  }
}

export default Navigation;
