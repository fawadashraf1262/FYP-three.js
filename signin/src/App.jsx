import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tome from './pages/Tome/Tome';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { auth } from './firebase';
const App = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      }else setUserName("");
      console.log(user);
    });
  }, []);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Tome name={userName}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App