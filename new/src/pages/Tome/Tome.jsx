import React from 'react'
import './Tome.css'
import { Link } from 'react-router-dom'
const Tome = (props) => {
  return (
    <div className='tome'>
      
      <div>
        <button className='button-86'>
          Pattern Fusion
        </button>
        <br />
        <button className='button-86'>
          <Link to="/login">Login</Link>
        </button>
        <br />
        <button className='button-86'>
          <Link to="/signup">SignUp</Link>
        </button>
        <br />
        {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2> */}
      </div>
    </div>
  )
}

export default Tome