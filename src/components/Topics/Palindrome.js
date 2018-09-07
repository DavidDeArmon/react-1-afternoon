import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super()
        this.state={
          userInput:"",
          palindrome:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.filterPalindrome = this.filterPalindrome.bind(this);

    }
    handleChange(event){
        this.setState({userInput:event.target.value})
    }

    filterPalindrome(input){
        let str = input;
        console.log(str)
      if(str===str.split('').reverse().join('')){
          this.setState({palindrome:"true"})}
          else{this.setState({palindrome:"false"})}
    }
    

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Palindrome</h4>
                <input className ="inputLine" onChange ={event=>this.handleChange(event)}/>
                <button className ="confirmationButton" onClick={() =>{ this.filterPalindrome(this.state.userInput)}}/>
                <span className="resultsBox"> {JSON.stringify(this.state.palindrome,null,10)}</span>
            </div>
        )
    }
}