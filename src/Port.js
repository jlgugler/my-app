// src/Port.js
import React from 'react';
import './Port.css';

const Port = ({ name, type, row, column, portNumber }) => {
  return (
    <div className="port">
      {name}
    </div>
  );
};

export default Port;