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