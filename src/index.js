import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDznaWmwiBE9gWTf6md7OExSwzcDztJsn8",
  authDomain: "e-commerce-reactjs-ed4f9.firebaseapp.com",
  projectId: "e-commerce-reactjs-ed4f9",
  storageBucket: "e-commerce-reactjs-ed4f9.appspot.com",
  messagingSenderId: "94713188947",
  appId: "1:94713188947:web:51a7f1bd916d4ab842eca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);