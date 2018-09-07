import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor(){
        super()
        this.state={
            unfilteredArray:[{name:"david"},{color:"red"},{size:"large"},{number:1}],
            userInput:"",
            filteredArray:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.filterObject = this.filterObject.bind(this);

    }
    handleChange(event){
        this.setState({userInput:event.target.value})
    }

    filterObject(input){
        console.log(this.state.unfilteredArray)
      let arr = this.state.unfilteredArray.slice()
      console.log(arr)
      let filteredArr= arr.filter(obj=>{
        for(let key in obj ){
            if(key===input){return true}
            else{return false}        
        }
        
      })
      console.log(filteredArr)
      this.setState({filteredArray:filteredArr})
    }
    

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray,null,10)}</span>
                <input className ="inputLine" onChange ={event=>this.handleChange(event)}/>
                <button className ="confirmationButton" onClick={() =>{ this.filterObject(this.state.userInput)}}/>
                <span className="resultsBox filterObjectRB"> {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}