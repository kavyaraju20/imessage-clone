import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import IMessage from './Imessage.js';
import Login from './Login.js';
import {selectUser, login, logout} from "./features/userSlice";
import {auth} from './firebase.js';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
  auth.onAuthStateChanged(authUser=>{
    if(authUser){
      dispatch(login({
        uid:authUser.uid,
        photo:authUser.photoURL,
        email:authUser.email,
        displayName:authUser.displayName
      }))
    }else{
      dispatch(logout())
    }
  })
  },[])
  return (
    <div className="App">
    {user ?  <IMessage />:<Login /> }
   
    </div>
  );
}

export default App;
