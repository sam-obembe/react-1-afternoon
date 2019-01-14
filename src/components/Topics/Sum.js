import React, {Component} from "react";

class Sums extends Component{
  constructor(){
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
    this.updateFirstNum = this.updateFirstNum.bind(this)
    this.updateSecondNum = this.updateSecondNum.bind(this)
    this.addition = this.addition.bind(this)
  }

  updateFirstNum(val){
    this.setState({number1: parseInt(val,10)});
  }

  updateSecondNum(val){
    this.setState({number2: parseInt(val,10)});
  }

  addition(){
    let answer =this.state.number1 + this.state.number2;
    this.setState({sum:answer.toString()})
  } 

  render(){
    return(
     <div className = "puzzleBox sumPB">
       <h4>Sum</h4>
       <input className = "inputLine" type ="number" onChange = {(el) => this.updateFirstNum(el.target.value)}/> 

       <input className = "inputLine" type ="number" onChange = {(el) => this.updateSecondNum(el.target.value)}/> 

       <button className = "confirmationButton" onClick = {this.addition}>Add</button>

       <span className = "resultsBox"> Sum: {this.state.sum} </span>
     </div>
    )
  }
}

export default Sums;