import React, {Component} from "react";

class EvenAndOdds extends Component{
  constructor(){
    super()
    this.state = {
      evenArray : [],
      oddArray : [],
      userInput : ''
    }
  }
  handleChange(val){
    this.setState({userInput: val});
  }

  assignEvenAndOdds(userInput){
    var arr = userInput.split(',');
    var evens = []
    var odds = []
    for(let i = 0; i<arr.length;i++){
      if(arr[i]%2 === 0){
        evens.push(parseInt(arr[i],10));
      }else{
        odds.push(parseInt(arr[i],10));
      }
    }
    this.setState({oddArray: odds})
    this.setState({evenArray: evens})
  }

  render(){
    return(
      <div className = "puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)}/>
        <button className = "confirmationButton" onClick = {(e) => this.assignEvenAndOdds(this.state.userInput)}>Click</button>
        <span className = "resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className = "resultsBox">Odds : {JSON.stringify(this.state.oddArray)}</span>
      </div>
      
    )
  }
}

export default EvenAndOdds;