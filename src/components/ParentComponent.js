import React, { Component } from 'react';
import DisplayData from './DisplayData';
import Form from './Form'

class ParentComponent extends Component{
    state = {
        firstName: "",
        lastName: ""
    }

    // handleFirstNameChange = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleLastNameChange = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    render(){
        return(
            <div>
            <Form 
                formData={this.state}
                handleChange={this.handleChange}
                // handleFirstNameChange={this.handleFirstNameChange}
                // handleLastNameChange={this.handleLastNameChange}
            />
            <DisplayData formData={this.state}/>
            </div>
        )
    }
}
export default ParentComponent;