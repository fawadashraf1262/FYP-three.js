import React from 'react'
import { Link } from 'react-router-dom'
const Tome = (props) => {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Loginb</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">SignUp</Link>
        </h1>
        <br />
        <h2>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
      </div>
    </div>
  )
}

export default Tome