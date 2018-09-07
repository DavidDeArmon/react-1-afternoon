import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super()
        this.state={
          number1:0,
          number2:0,
          sum:null
        }
        this.handleChange = this.handleChangeNumOne.bind(this);
        this.addNumbers = this.addNumbers.bind(this);

    }
    handleChangeNumOne(event){
        this.setState({number1:event.target.value})
    }
    handleChangeNumTwo(event){
        this.setState({number2:event.target.value})
    }
    addNumbers(){
        let numOne = +this.state.number1
        let numTwo = +this.state.number2
        let tempSum = numOne+numTwo;
        this.setState({sum:tempSum})
    }
    

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className ="inputLine" onChange ={event=>this.handleChangeNumOne(event)}/>
                <input className ="inputLine" onChange ={event=>this.handleChangeNumTwo(event)}/>
                <button className ="confirmationButton" onClick={() =>{ this.addNumbers()}}/>
                <span className="resultsBox"> {JSON.stringify(this.state.sum,null,10)}</span>
            </div>
        )
    }
}