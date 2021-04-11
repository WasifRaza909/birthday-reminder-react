import React from 'react';

const People = ({ people }) => {
  return people.map((person) => (
    <article className='person'>
      <img src={person.image} alt='' srcset='' />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age}</p>
      </div>
    </article>
  ));
};

export default People;
