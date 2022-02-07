import React, { useState } from 'react';

const MultipleInputs = () => {

  const [person, setPerson] = useState({ firstName: "", email: "",  age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    console.log(event)
    const name = event.target.name;
    const value = event.target.value;
    setPerson({...person, [name]: value});  // gathering person data from inputs 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = {   // generating newPerson from person object
        id: new Date().getTime(),
        firstName: person.firstName, 
        email: person.email,
        age: person.age
      };

      setPeople( people => {  // adding new person to people
        return [...people, newPerson];
      });

      setPerson({ firstName: "", email: "", age: "" });  // emptying form items

    } else {
      console.log('empty values');
    }
    
  }
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit} >add person</button>
        </form>

        {/* listing people */}
        {people.map( person => {  
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
