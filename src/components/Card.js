import React, { useState } from 'react';
import People from './People';
import Button from './Button';

import data from '../data';

const Card = () => {
  const [people, setPeople] = useState(data);

  const clearHandler = () => {
    setPeople([]);
  };

  return (
    <>
      <div className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <People people={people} />
        <Button clearHandler={clearHandler} />
      </div>
    </>
  );
};

export default Card;
