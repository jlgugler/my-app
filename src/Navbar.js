// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ onSelectTopic }) => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#panel" onClick={() => onSelectTopic('panel')}>Panel</a></li>
        <li><a href="#topic2" onClick={() => onSelectTopic('topic2')}>Topic 2</a></li>
        <li><a href="#topic3" onClick={() => onSelectTopic('topic3')}>Topic 3</a></li>
        <li><a href="#topic4" onClick={() => onSelectTopic('topic4')}>Topic 4</a></li>
      </ul>
    </div>
  );
};

export default Navbar;