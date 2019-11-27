//Statistics page
import React from "react";
import Theme from "./Theme";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount() {
    //ajax call
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <p>Loading ...</p>;
    }

    //const {animal, breed, location, name} = this.state;
    return (
      <div>
        <Theme.Consumer>
          {value => <div style={{ backgroundColor: value.bc }}>Stats Page</div>}
        </Theme.Consumer>
      </div>
    );
  }
}

export default Stats;
