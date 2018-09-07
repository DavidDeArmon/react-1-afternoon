import React, {Component} from 'react';

export default class FilterString extends Component{
    constructor(){
        super()
        this.state={
           unfilteredArray:["red","blue","green"],
           userInput:"",
           filteredArray:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.filterString = this.filterString.bind(this);

    }
    handleChange(event){
        this.setState({userInput:event.target.value})
    }

    filterString(input){
        let arr = this.state.unfilteredArray.slice()
        console.log(arr)
        let newArr =[]
        newArr = arr.filter(e=>{
           if( e.includes(input)){return true}
           else{return false}
        })
        console.log(newArr)
        this.setState({filteredArray:newArr})
    }
    

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray,null,10)}</span>
                <input className ="inputLine" onChange ={event=>this.handleChange(event)}/>
                <button className ="confirmationButton" onClick={() =>{ this.filterString(this.state.userInput)}}/>
                <span className="resultsBox filterStringRB"> {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}