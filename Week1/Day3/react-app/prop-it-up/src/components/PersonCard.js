import React, { useState } from 'react';

const Person = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  const [personState, setPersonState] = useState(props);

  const incrementAge = () => {
    setPersonState({ ...personState, age: personState.age + 1 });
  };

  return (
    <div>
      <h1>{lastName}, {firstName}</h1>
      <p>Age: {personState.age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={incrementAge}>Birthday Button for {firstName} {lastName}</button>
    </div>
  );
};

export default Person;