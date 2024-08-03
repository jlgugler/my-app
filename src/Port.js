// src/Port.js
import React, { useState } from 'react';
import './Port.css';

const Port = ({ name, type, position, portNumber }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="port"
      style={{ position: position }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <h3>{name}</h3>
          <p>Type: {type}</p>
        </>
      ) : (
        <p>{portNumber}</p>
      )}
    </div>
  );
};

export default Port;