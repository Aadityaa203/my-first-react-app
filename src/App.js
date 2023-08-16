// import React, { Component } from "react";
// import People from "./People";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>My First react app</h1>
//         <p>Hey happy hacking!!</p>
//         <People name="Aaditya" age=" 30" favColor= "Blue"/>
//         <People name="chandra" age=" 24" favColor= "pink"/>
//       </div>
//     );
//   }
// }

// export default App;

// react lesson 12
// import React, { Component } from "react";
// import People from "./People";

// class App extends Component {
//   state = {
//     people: [
//       {name: "Ryan", age: "34", favColor: "cyan", id: 1 },
//       {name: "Bentley", age: "35", favColor: "red", id: 2},
//       {name: "Cloud", age: "21", favColor: "pink", id: 3}
//     ]
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>My First react app</h1>
//         <p>Hey happy hacking!!</p>
//         <hr />
//         <People people={this.state.people}/>
//       </div>
//     );
//   }
// }

// export default App;

//module 13
// import React, { Component } from "react";
// import People from "./People";

// class App extends Component {
//   state = {
//     people: [
//       {name: "Ryan", age: "34", favColor: "cyan", id: 1 },
//       {name: "Bentley", age: "35", favColor: "red", id: 2},
//       {name: "Cloud", age: "21", favColor: "pink", id: 3}
//     ]
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>My First react app</h1>
//         <p>Hey happy hacking!!</p>
//         <hr />
//         <People people={this.state.people}/>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import People from "./People";
import AddPeople from "./AddPeople";

class App extends Component {
  state = {
    people: [
      { name: "Ryan", age: "34", favColor: "cyan", id: 1 },
      { name: "Bentley", age: "35", favColor: "red", id: 2 },
      { name: "Cloud", age: "21", favColor: "pink", id: 3 },
    ],
  };

  addPerson = (person) => {
    // console.log(person);
    person.id = Math.random();
    let people = [...this.state.people, person];
    this.setState({
      people: people,
    });
  };

  deletePerson = (id) => {
    // console.log(id);
    let people = this.state.people.filter((person) => {
      return person.id !== id;
    });
    this.setState({
      people: people,
    });
  };

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My First react app</h1>
        <p>Hey happy hacking!!</p>
        <hr />
        <People people={this.state.people} deletePerson={this.deletePerson} />
        <hr />
        <br />
        <AddPeople addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
