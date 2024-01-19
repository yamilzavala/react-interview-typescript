import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootswatch/dist/yeti/bootstrap.min.css'
import './indexContextApiAndUseReducer.css'
// import './indexAdvancedComponents.css'
// import './indexCourseGoal.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

