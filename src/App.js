

import logo from './logo.svg';
import './App.css';

//React imports
import React from 'react';

// Pages
import AddPost from './pages/AddPost';
import PageSignIn from './pages/SignIn';
import PageSignUp from './pages/SignUp';
import Logout from './pages/Logout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyAppBar from './components/AppBar.js';
import {AuthContextProvider} from './context/AuthContext'

//Imports for firebase backend 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

//Firebase hooks import
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


function App() {

  //firebase initialization
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDj0-JeuqjcV74t7TtakWnyWb1aPpRmr2w",
    authDomain: "blogpost-auth-development.firebaseapp.com",
    projectId: "blogpost-auth-development",
    storageBucket: "blogpost-auth-development.appspot.com" ,
    messagingSenderId: "221063144763" ,
    appId: "1:221063144763:web:72bf96a6ce45aa91ea031e" ,
    measurementId: "G-RGYX0K8RH1",
  })
  //firebase variables
  const auth = firebaseApp.auth();
  const firestore = firebaseApp.firestore();
  const [user] = useAuthState(auth);


  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <MyAppBar />
          <Routes>
            <Route path='/AddPost' exact element={<AddPost/>} />
            <Route path='/SignIn' exact element={<PageSignIn/>} />
            <Route path='/SignUp' exact element={<PageSignUp/>} />
            <Route path='/Logout' exact element={<Logout/>} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
