// import React, { useEffect } from "react";
// function Debounce(props) {
//   useEffect(() => {
//     const myInput = document.getElementById("myInput");
//     myInput.addEventListener("keyup", debounce(helloWorld, 2000));
//   }, []);

//   function debounce(callback, delay) {
//     let timeout;
//     return function () {
//       clearTimeout(timeout);
//       timeout = setTimeout(callback, delay);
//     };
//   }
//   function helloWorld() {
//     console.log("Hello World!");
//   }

//   return (
//     <>
//       <label htmlFor="myInput">Type something in!</label>
//       <input id="myInput" type="text" onKeyUp={debounce(helloWorld,2000)}/>
//     </>
//   );
// }
// export default Debounce;

// URL FOR DEBOUNCING CONCEPT
// https://dev.to/myogeshchavan97/using-debouncing-to-improve-the-performance-of-your-application-s-search-functionality-31j7
import axios from "axios";
import React from "react";

class Debounce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: [],
      errorMsg: "",
      isLoading: false,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {};
  }

  componentDidMount() {}
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  componentWillUnmount() {}
  handleChangeInput(evt) {
    let inputText = evt.target.value;
    this.setState({ input: inputText, isLoading: true });

    axios
      .get(`https://www.reddit.com/search.json?q=${inputText}`)
      .then((response) => {
        this.setState({
          result: response.data.data.children,
          isLoading: false,
          errorMsg: "",
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          errorMsg: "Something went wrong. Try again later",
        });
      });
  }

  render() {
    const { errorMsg, isLoading, input, result } = this.state;
    return (
      <>
        <input
          type="text"
          value={input}
          placeholder="Search here..."
          onChange={this.handleChangeInput}
        />
        {errorMsg && <p>{errorMsg}</p>}
        {isLoading && <p>Loading...</p>}
        <ul>
          {result.map((result, index) => {
            return <li key={index}>{result.data.title}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default Debounce;
