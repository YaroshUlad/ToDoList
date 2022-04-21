import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App4Week from "./components/Components4week/App4Week";
import App5ThWeek from "./components/5thWeekToDoList/App5ThWeek";

ReactDOM.render(
    <React.StrictMode>
        <App5ThWeek/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
