// src/App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Panel from './Panel';
import './App.css';

function App() {
  const [currentTopic, setCurrentTopic] = useState('home');

  const handleSelectTopic = (topic) => {
    setCurrentTopic(topic);
  };

  const renderContent = () => {
    switch (currentTopic) {
      case 'panel':
        return <Panel name="My Panel" length="200px" height="100px" position="relative" type="Rectangle" />;
      case 'topic2':
        return <div>Topic 2 Content</div>;
      case 'topic3':
        return <div>Topic 3 Content</div>;
      case 'topic4':
        return <div>Topic 4 Content</div>;
      default:
        return <div>Welcome to My React App</div>;
    }
  };

  return (
    <div className="App">
      <Navbar onSelectTopic={handleSelectTopic} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;