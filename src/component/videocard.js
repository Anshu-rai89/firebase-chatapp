import react from "react";

class VideoCard extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Anshu",
    };
  }

  handleClick() {
    console.log("inside handle click");
    const { count } = this.state;
    this.setState({ count: count + 3 });
    this.setState({ count: count + 1 });
    this.setState({ count: count + 2 }, () => {
      console.log("Set state fired", this.state.count);
    }); // seState is a async function
  }

  render() {
    const { count } = this.state;
    console.log("redneing videocard", count);
    return (
      <div className="container">
        <h4>Vide card</h4>
        <p>{count}</p>
        <button onClick={this.handleClick.bind(this)}>Increase Count</button>
      </div>
    );
  }
}

export default VideoCard;
