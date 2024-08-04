import React, { useState } from 'react';
import './Panel.css';
import Port from './Port';

const Panel = ({ name, length, height, position, type }) => {
  const initialPorts = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    name: `Port ${index + 1}`,
    type: 'Square',
    row: 1,
    column: index + 1,
    portNumber: index + 1,
  }));

  const [ports] = useState(initialPorts);
  const [isEditMode, setIsEditMode] = useState(false);
  const [panelProperties, setPanelProperties] = useState({ name, length, height, type });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPanelProperties({
      ...panelProperties,
      [name]: value,
    });
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const saveChanges = () => {
    // Implement save logic if needed
    setIsEditMode(false);
  };

  return (
    <div className="panel" style={{ width: panelProperties.length, height: panelProperties.height, position: position }}>
      {isEditMode ? (
        <div className="edit-panel">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={panelProperties.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Length:
            <input
              type="number"
              name="length"
              value={panelProperties.length}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Height:
            <input
              type="number"
              name="height"
              value={panelProperties.height}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Type:
            <input
              type="text"
              name="type"
              value={panelProperties.type}
              onChange={handleInputChange}
            />
          </label>
          <button className="save-changes" onClick={saveChanges}>Save</button>
        </div>
      ) : (
        <>
          <h2>{panelProperties.name}</h2>
          <p>Type: {panelProperties.type}</p>
          <p>Length: {panelProperties.length}</p>
          <p>Height: {panelProperties.height}</p>
          <button className="toggle-edit" onClick={toggleEditMode}>
            Edit
          </button>
        </>
      )}
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
    </div>
  );
};

export default Panel;