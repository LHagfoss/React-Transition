import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const handleRouteChange = () => {
  window.scrollTo(top);
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes onChange={handleRouteChange}>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
