// import React, {Component} from "react";

// class AddPeople extends React.Component {
//     render(){
//         return(

//         )
//     }
// }
//type rcc to see emmet
import React, { Component } from "react";
import "./People.css";

class AddPeople extends Component {
  state = {
    name: null,
    age: null,
    favColor: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addPerson(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={this.handleChange} />
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" onChange={this.handleChange} />
        <label htmlFor="favColor">favColor:</label>
        <input type="text" id="favColor" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
export default AddPeople;
