// App.js or index.js (main file)
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Blog from './Blog'; // Import your Blog component

function App() {
  return (
    <Router>
      <Blog />
    </Router>
  );
}

export default App;
