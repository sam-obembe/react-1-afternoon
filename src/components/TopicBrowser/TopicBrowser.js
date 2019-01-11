import React, {Component} from "react";
import EvenAndOdds from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sums from "../Topics/Sum";

class TopicBrowser extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <EvenAndOdds />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sums />
      </div>
    )
  }
}

export default TopicBrowser;
