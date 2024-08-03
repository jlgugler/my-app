// src/Panel.js
import React, { useState } from 'react';
import './Panel.css';
import Port from './Port';

const Panel = ({ name, length, height, position, type }) => {
  const initialPorts = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    name: `Port ${index + 1}`,
    type: 'Square',
    row: Math.floor(index / 6) + 1,
    column: (index % 6) + 1,
    portNumber: index + 1,
  }));

  const [ports, setPorts] = useState(initialPorts);
  const [isEditMode, setIsEditMode] = useState(false);

  const updatePort = (id, property, value) => {
    setPorts(ports.map(port => 
      port.id === id ? { ...port, [property]: value } : port
    ));
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const saveChanges = () => {
    // Implement save logic if needed
    setIsEditMode(false);
  };

  return (
    <div className="panel" style={{ width: length, height: height, position: position }}>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Length: {length}</p>
      <p>Height: {height}</p>
      <button className="toggle-edit" onClick={toggleEditMode}>
        {isEditMode ? 'Cancel' : 'Edit'}
      </button>
      {isEditMode && <button className="save-changes" onClick={saveChanges}>Save</button>}
      <div className="ports-container">
        {ports.map(port => (
          <Port
            key={port.id}
            name={port.name}
            type={port.type}
            row={port.row}
            column={port.column}
            portNumber={port.portNumber}
          />
        ))}
      </div>
      {isEditMode && (
        <div className="edit-ports">
          {ports.map(port => (
            <div key={port.id} className="edit-port">
              <h3>Edit {port.name}</h3>
              <label>
                Row:
                <input
                  type="number"
                  value={port.row}
                  onChange={(e) => updatePort(port.id, 'row', parseInt(e.target.value))}
                />
              </label>
              <label>
                Column:
                <input
                  type="number"
                  value={port.column}
                  onChange={(e) => updatePort(port.id, 'column', parseInt(e.target.value))}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Panel;