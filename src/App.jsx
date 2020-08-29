import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.calculatePi(4500);
  }

  calculatePi(duration) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
      // TODO(Dereck): figure out the Math problem
    }
  }

  render() {
    return <div>hello react</div>;
  }
}

export default App;
