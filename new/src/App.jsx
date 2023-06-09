import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Basic.css'
import Tome from './pages/Tome/Tome';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { auth } from './firebase';
import Importer from './pages/Importer';
import HashLoader from "react-spinners/HashLoader";
const App = () => {
  const [loading, setLoading ] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])


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
    <div className='Basic'>
      {
        loading ?
      <HashLoader
           className='hashloader'
           color={"#9900ff"}
           loading={loading}
          //  cssOverride={override}     
           size={150}
           aria-label="Loading Spinner"
           data-testid="loader"
      />
        :
        <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Importer' element={<Importer/>}/>
          <Route path='/' element={<Tome />}/>
        </Routes>
      </Router>
      }

    </div>
  )
}

export default App