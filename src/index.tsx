import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
import {BrowserRouter} from "react-router-dom";

const frbase = initializeApp({
  apiKey: "AIzaSyD0oTmjYyYz20j-u8iETi96ZkVS7T_HpiQ",
  authDomain: "fir-test-12705.firebaseapp.com",
  databaseURL: "https://fir-test-12705-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-test-12705",
  storageBucket: "fir-test-12705.appspot.com",
  messagingSenderId: "1012186864411",
  appId: "1:1012186864411:web:fea289f7b571286c5011be",
  measurementId: "G-68NRPYYJEP",
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
