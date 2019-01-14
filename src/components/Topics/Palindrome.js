import React, {Component} from "react"

class Palindrome extends Component{
  constructor(){
    super()
    this.state = {
      userInput : "",
      word: "",
      palindrome: false,

    }
    this.inputHandle = this.inputHandle.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  inputHandle(val){
    this.setState({userInput: val})
  }

  clickHandle(){
    this.setState({word:this.state.userInput})
    var reverse = [];
    var inputArray = [];
    for(let i = 0; i<this.state.word.length; i++){
      inputArray.push(this.state.word[i])
    }
    for(let i = inputArray.length-1; i>=0; i-- ){
      reverse.push(inputArray[i]);
    }
    var ans = reverse.join("");
    if(ans===this.state.word){
      this.setState({palindrome:"true"})
    } else{
      this.setState({palindrome:"false"})
    }
    
  }

  render(){
    return(
      <div className = "puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className = "inputLine" onChange = {(e)=>this.inputHandle(e.target.value)}></input>
        <button className = "confirmationButton" onClick = {this.clickHandle}>reverse</button>
        <span className = "resultsBox">{this.state.palindrome}</span>
      </div>
     
    )
  }
}

export default Palindrome;