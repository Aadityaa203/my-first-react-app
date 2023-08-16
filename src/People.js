// import React, { Component } from "react";

// class People extends Component {
//   render() {
//     console.log(this.props);// shows in console
//     const {name, age, favColor } = this.props;
//     return (
//       <div className="person">
//         <div>name: {name}</div>
//         <div>Age: {age}</div>
//         <div>Fav color: {favColor}</div>
//       </div>
//     );
//   }
// }
// export default People;

// import React, { Component } from "react";

// class People extends Component {
//   render() {
//     //console.log(this.props);// shows in console
//     const { people } = this.props;
//     const peopleList = people.map((person) => {
//       return (
//         <div className="person" key={person.id}>
//           <div> name:{person.name}</div>
//           <div>age: {person.age}</div>
//           <div>favColor: {person.favColor}</div>
//           <br />
//         </div>
//       );
//     });
//     return (
//         <div className="person-list">
//           { peopleList  }
//         </div>
//       )
//   }
// }
// export default People;

// module 13
// import React from "react";

// const people = ({people}) => {

//     //console.log(this.props);// shows in console
//     // const { people } = props;
//     const peopleList = people.map((person) => {
//       if(person.age > 21){
//       return (
//         <div className="person" key={person.id}>
//           <div> name:{person.name}</div>
//           <div>age: {person.age}</div>
//           <div>favColor: {person.favColor}</div>
//           <br />
//         </div>
//       )
//     } else{
//       return null;
//     }
//     });
//     return (
//         <div className="person-list">
//           { peopleList  }
//           <br />
//         </div>
//       )
//   }

// export default people;

// module 14
import React from "react";

const People = ({ people, deletePerson }) => {
  return (
    <div className="person-list">
      {people.map((person) => {
        return person.age > 21 ? (
          <div className="person" key={person.id}>
            <div> name:{person.name}</div>
            <div>age: {person.age}</div>
            <div>favColor: {person.favColor}</div>
            <button
              onClick={() => {
                deletePerson(person.id);
              }}
            >
              Delete Person
            </button>
            <br />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default People;
