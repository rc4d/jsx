// 1. Import React and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 2. Get a reference to div with id  root
const el = document.getElementById("root");
// 3. Tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4. Create a component -  (Moved to App.js)


// 5. Show the component on screen

root.render(<App />);
