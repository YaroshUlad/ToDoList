import React from 'react';
import ReactDOM from 'react-dom';
import App8 from './components/8week/App8';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./components/8week/redux/store";


const rerender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App8 dispatch={store.dispatch.bind(store)} state={store.getState()}/>
        </Provider>
        , document.getElementById('root')
    );
}
rerender()
store.subscribe(rerender)


/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
