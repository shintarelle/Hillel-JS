import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './MyApp';
import Smile from './Smile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
    {/* <Smile /> */}
  </React.StrictMode>
);
