import { React, Component } from "react";
import Header from "./components/Header";
import PhotoWall from "./components/PhotoWall";
// import Test from "./components/Test";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.removePhoto = this.removePhoto.bind(this);
    console.log("Constuctor");
  }

  removePhoto(removePost) {
    console.log(removePost.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== removePost)
    }));
    console.log(removePost.imageLink);
  }

  componentDidMount() {
    const data = fetchFromDatabase();
    this.setState({
      posts: data
    });
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <Header heading="Photo Wall" />
        {/* <Test test={"Hello There"} /> */}
        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
      </div>
    );
  }
}

function fetchFromDatabase() {
  return [
    {
      id: "0",
      description: "beautiful landscape",
      imageLink:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
    },
    {
      id: "1",
      description: "Aliens???",
      imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    },
    {
      id: "2",
      description: "On a vacation!",
      imageLink:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }
  ];
}

export default App;
