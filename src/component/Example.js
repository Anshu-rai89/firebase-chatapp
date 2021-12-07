import React from "react";

class ExampleCompoent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      count: 0,
      dogUrl: "",
      loading: true,
    };

    console.log("Inside class component Cosntructer");
  }

  async fetchDogUrl() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await res.json();

    this.setState({ dogUrl: data.message, loading: false });
  }

  componentDidMount() {
    console.log("Inside Class Component ComponentDIDMOUNT");
    this.fetchDogUrl();
  }

  shouldComponentUpdate() {
    console.log("Inside class Component ShouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    // this functions excutes when component is about to be destroyed from dom
    // for cleanup
    // local storage cleanup
    // you can unsubcribe  listens
    // you can clear any interval
    // clear any kind of connection   -> web sockets
    // memory leak
  }

  render() {
    console.log("Inside class component render");
    const { loading, dogUrl } = this.state;
    return (
      <div>
        <h3>This is Class Component</h3>

        {loading ? <h3>Loading.......</h3> : <img src={dogUrl} alt="dog-img" />}
      </div>
    );
  }
}

export default ExampleCompoent;
