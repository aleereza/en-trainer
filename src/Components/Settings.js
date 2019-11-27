//Statistics page
import React from "react";
import Theme from "./Theme";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: {} };
  }

  render() {
    return (
      <div>
        <Theme.Consumer>
          {value => (
            <div style={{ backgroundColor: value.bc }}>Settings Page</div>
          )}
        </Theme.Consumer>
      </div>
    );
  }
}

export default Settings;
