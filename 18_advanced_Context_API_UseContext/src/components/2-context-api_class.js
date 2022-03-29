import React, { Component, createContext } from "react";
import { data } from "../data";

// more components
// fix - context api, redux (for more complex cases)

const PerSonContext = createContext();

// 2 components: Provider & Consumer

export default class ContextAPIClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    };
  }

  removePerson = (id) => {
    const newPeople = this.state.people.filter((person) => person.id !== id);
    this.setState({ people: newPeople });
  };

  render() {
    return (
      <PerSonContext.Provider
        value={{
          removePerson: this.removePerson,
          msg: "hello",
          people: this.state.people,
        }}
      >
        <section>
          <h3>prop drilling</h3>
          <List />
        </section>
      </PerSonContext.Provider>
    );
  }
}

class List extends Component {
  render() {
    return (
      <PerSonContext.Consumer>
        {(context) => {
          const { people } = context;
          return people.map((person) => (
            <SinglePerson key={person.id} {...person} />
          ));
        }}
      </PerSonContext.Consumer>
    );
  }
}

class SinglePerson extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <PerSonContext.Consumer>
        {(context) => {
          const { removePerson, msg } = context;
          return (
            <div className="item">
              <h4>
                {id}- {name} - {msg}
              </h4>
              <button onClick={() => removePerson(id)}>remove</button>
            </div>
          );
        }}
      </PerSonContext.Consumer>
    );
  }
}
