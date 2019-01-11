import React, {Component} from 'react';

class FilterObject extends Component {
  constructor(){
    super();
    this.state = {
      videoGames :[
        {
          name:"Red Dead",
          price:45,
          ageRating: "M",
        },

        {
          name: "FIFA 19",
          price:55,
          ageRating: "3+",
        },
        {
          name:"Battle Field 1",
          price: 35,
          ageRating: "M",
        },
        {
          name: "Assassin's creed origins",
          price:60,
          ageRating: "M",
        }
      ],

      userInput : "",
      filteredVideoGames: []
    }
  }


  handleChange(val){
    this.setState({userInput: val});
  }

  updater(prop){
    var videoGames = this.state.videoGames.map;
    var filteredGames = [];

    for(var i = 0; i<videoGames.length;i++){
      if(videoGames[i].hasOwnProperty(prop)){
        filteredGames.push(videoGames[i]);
      }
    }
    this.setState({filteredVideoGames:filteredGames})
  }

  
  render(){
    
  
    return(
      <div className = "puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className = "puzzleText">Original: {JSON.stringify(this.state.videoGames,null,10)}</span>
        <input className = "inputLine" onChange = {(e)=> this.handleChange(e.target.value)}></input>
        <button className = "confirmationButton" onClick = {() => this.updater(this.state.userInput) }>Filter </button>
        <span className = "resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredVideoGames,null,10)}</span>
      </div>
      
    )
  }
}

export default FilterObject;