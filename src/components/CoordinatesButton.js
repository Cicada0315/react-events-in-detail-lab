// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component{
    handleonClick= (e)=>{
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render(){
        return(
            <button onClick={this.handleonClick}>Button</button>
        )
    }
}