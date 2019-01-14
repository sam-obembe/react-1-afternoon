import React, {Component} from "react";

class FilterString extends Component{
  constructor(){
    super();
    this.state = {
      words: ["house","farm","car","money"],
      userInput: "",
      filtered: []
    }
  }
  handleChange(val){
    this.setState({userInput: val});
  }

  filterNames(userInput){
    var words = this.state.words;
    var filtered = [];
    for (var i=0; i<words.length; i++){
      if(words[i].includes(userInput)){
        filtered.push(words[i])
      }
    }
    this.setState({filtered: filtered});

  }
  render(){
    return(
      <div className = "puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className = "puzzleText">Words: {JSON.stringify(this.state.words,null,10)}</span>
        <input className = "inputLine" onChange = {(e)=> this.handleChange(e.target.value)}></input>
        <button className = "confirmationButton" onClick = {this.filterNames(this.state.userInput)}>Filter</button>
        <span className = "resultsBox filterStringRB"> Filtered words: {JSON.stringify(this.state.filtered,null,10)}</span>
      </div>
    )
  }
}

export default FilterString