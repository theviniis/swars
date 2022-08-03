import React from 'react';

const PersonCard = ({ person }) => {
  return (
    <div>
      {Object.keys(person).map((attr) => (
        <>
          <span>{attr}</span>
          <span>{person[attr]}</span>
        </>
      ))}
    </div>
  );
};

export default PersonCard;
