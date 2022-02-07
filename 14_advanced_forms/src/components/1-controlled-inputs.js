import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ people, setPeople ]  = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(name && email) {
      const newPerson =  { id: new Date().getTime() , name, email };
      setPeople( (oldPeople) => {
        return [...oldPeople, newPerson]
      });
      setName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  }

  return (
    <>
       <article>
         <form className='form' onSubmit={handleSubmit}>
           <div className="form-control">
             <label htmlFor="name"> FirstName : </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
           </div>
           <div className="form-control">
              <label htmlFor="email"> Email : </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
           </div>
           <button type='submit'>add person</button>
         </form>

         {/* listing people */}
         { people.map((person) => {
           const { id, name, email } = person
           return (
             <div key={id} className='item'>
               <h4>{name}</h4>
               <p>{email}</p>
             </div>
           );
         })}
       </article>
    </>
  );
};

export default ControlledInputs;
