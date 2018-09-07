import React, {Component} from 'react';

export default class EvenAndOdd extends Component{
    constructor(){
        super()
        this.state = {
            evensArray : [],
            oddArray : [],
            userInput : " "
        }
    }
    handleChange(event){
        this.setState({userInput:event.target.value})
    }
    separateEven(input){

        let tempArr = input.split(",");
        console.log(tempArr);
             

        let tempevensArray = tempArr.filter(e=>e%2===0)
        let tempoddArray = tempArr.filter(e=>e%2===1)
        
        this.setState({evensArray:tempevensArray, oddArray:tempoddArray})
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                {/* <p>EvenAndOdd Component</p> */}
                <h4>Evens and Odds</h4>
                <input placeholder="1, 2, 34" className="inputLine" onChange={(event)=>this.handleChange(event)}></input>
                <button className="confirmationButton" onClick={() =>{ this.separateEven(this.state.userInput)}}>Calculate!</button>
                <span className="resultsBox">Evens: {this.state.evensArray}</span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}