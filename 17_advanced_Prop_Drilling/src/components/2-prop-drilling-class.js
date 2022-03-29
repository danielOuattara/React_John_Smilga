import React, { Component } from "react";
import { data } from "../data";
// more components
// fix - context api, redux (for more complex cases)

export default class PropDrillingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    };
  }

  removePerson = (id) => {
    this.setState(() => this.state.people.filter((person) => person.id !== id));
  };

  render() {
    return (
      <section>
        <h3>prop drilling</h3>
        <List people={this.state.people} removePerson={this.removePerson} />
      </section>
    );
  }
}

class List extends Component {
  render() {
    const { people, removePerson } = this.props;
    return (
      <>
        {people.map((person) => {
          return (
            <SinglePerson
              key={person.id}
              {...person}
              removePerson={removePerson}
            />
          );
        })}
      </>
    );
  }
}

class SinglePerson extends Component {
  render() {
    const { id, name, removePerson } = this.props;
    return (
      <div className="item">
        <h4>
          {id}- {name}
        </h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    );
  }
}
