import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="item">
        <div>{this.props.icon}</div>
        <div>{this.state.count}</div>
        <button onClick={this.incrementCounter}>Click</button>
      </div>
    );
  }
}

export default Item;
