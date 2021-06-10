import { React, Component } from "react";
import List from "./components/List";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header heading="Hello Tasks" />
        <List
          tasks={[
            "take the trash",
            "take the trash",
            "shovel the drive way",
            "walk the dog"
          ]}
        />
        <List tasks={["abc", "def", "ghi"]} />
      </div>
    );
  }
}

export default App;
