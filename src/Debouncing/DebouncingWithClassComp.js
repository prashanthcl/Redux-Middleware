import { Component } from 'react'
import _ from 'lodash'
import axios from 'axios';
class WithDebouncingWithClass extends Component{
    constructor(props) {
        super(props);
        this.state = {
          input: "",
          result: [],
          errorMsg: "",
          isLoading: false,
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSearchText = _.debounce(this.onSearchText,500)
    }
    onSearchText(inputText){
        this.setState({isLoading:true})
        axios.get(`https://www.reddit.com/search.json?q=${inputText}`)
        .then((response)=>{
            this.setState({
                    result:response.data.data.children,
                    errorMsg:'',
                    isLoading:false
                      })
        })
        .catch(()=>{
            this.setState({
                errorMsg:'Something went wrong. Try after sometime',
                isLoading:false,
                result:[]
            })})}
    handleChangeInput(evt){
        const inputText = evt.target.value
        this.setState({input:inputText})
        this.handleSearchText(inputText)
    }
render(){
    const { errorMsg, isLoading, input, result } = this.state;
    return(
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
    )}}
export default WithDebouncingWithClass