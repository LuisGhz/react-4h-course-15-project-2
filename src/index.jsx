import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createStore, applyMiddleware, compose } from 'redux';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from 'store/reducers/rootReducer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
