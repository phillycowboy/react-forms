import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
  // handleSubmit = event => {
  //   event.preventDefault()
  //   // preventing a refresh on the page, and not redirecting it to the same page 
  //   let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
  //   // putting togeter the form data using the values stored in state
  //   this.sendFormDataSomewhere(formData)
  //   // sending the data somewhere like a fetch request through another component as a prop 
  // }

  handleSubmit = event => {
    event.preventDefault()
    
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <input type="submit"/>
        </form>
      {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;