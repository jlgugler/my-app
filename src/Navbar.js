// src/Navbar.js
import React from 'react';

const Navbar = ({ onSelectTopic }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => onSelectTopic('home')}>Home</li>
        <li onClick={() => onSelectTopic('panel')}>Panel</li>
        <li onClick={() => onSelectTopic('rack1')}>Rack 1</li>
        <li onClick={() => onSelectTopic('rack2')}>Rack 2</li> {/* New topic for the second rack */}
        <li onClick={() => onSelectTopic('topic3')}>Topic 3</li>
        <li onClick={() => onSelectTopic('topic4')}>Topic 4</li>
      </ul>
    </nav>
  );
};

export default Navbar;