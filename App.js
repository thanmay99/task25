import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "alex",
      users: [],
    };
  }

  componentWillMount = () => {
    this.setState({
      firstName: "alina",
    });

    console.log("will mount");
  };

  static getDerivedStateFromProps = () => { };

  componentDidMount = () => {
    console.log("component did mount");

    let api = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClick = () => {
    this.setState({
      firstName: "harry",
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return true;
  };
  componentWillUpdate = (nextProps, nextState) => {
    console.log("component update");
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return "snapshot";
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(prevState, snapshot);
  };

  render() {
    return (
      <div>
        {this.state.firstName}
        <button onClick={this.handleClick}>Update</button>

        {this.state.users.length ? (
          this.state.users.map((user) => {
            return <p>{user.name}</p>;
          })
        ) : (
          <p>No Post yet!</p>
        )}
      </div>
    );
  }
}

export default App;