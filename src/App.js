import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Sign from './Sign'
import firebase from 'firebase';
import NewT from './Task/NewT';
import {Contexts} from './Task/Context'

var firebaseConfig = {
  apiKey: "AIzaSyC7qIcfA0jbocN5vb8PAW_WMJ-XlSN-TYY",
  authDomain: "auth-866d7.firebaseapp.com",
  databaseURL: "https://auth-866d7.firebaseio.com",
  projectId: "auth-866d7",
  storageBucket: "auth-866d7.appspot.com",
  messagingSenderId: "777932976155",
  appId: "1:777932976155:web:23d38cba17d4c9b40708be",
  measurementId: "G-K4NBLF2TV9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();

function App() {
  const [log,setlog]=useState(false)
  const [sign,setsign]=useState(false)
  const [logged,setlogged]=useState(false)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user)
       setlogged(true)
    })
  })
  return (
    <Contexts>
      <div>{!logged?<div>
        <style>{`body{background:blueviolet;}`}</style>
        {log===false&&sign===false?
        <div className="Contain">
        <button onClick={()=> setlog(true)} className="button">Login</button>
        <button onClick={()=>setsign(true)} className="button">SignUp</button>
      </div>:<button className="button" style={{top:0,position:'absolute'}} onClick={()=>{setlog(false);setsign(false)}}>Back</button>
        }
        
        {log?<Login Slog={setlogged}/>:null}
        {sign?<Sign Slog={setlogged}/>:null}</div>:<NewT setlogged={setlogged}/>

      }
      </div>
    </Contexts>
  )
}

export default App;
