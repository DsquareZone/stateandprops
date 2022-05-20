import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    name: "User",
    age: 23
  };
  render() {
    return (
      <div>
        <center>
          <h1>
            Name : {this.state.name} and Age: {this.state.age}
          </h1>
        </center>
      </div>
    );
  }
}
export default App;
