import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export const Home = () => {
  const { user, logoutUser } = useContext(AuthContext)

  return (
    <div>
      <nav>
        {user && (
          <>
            <Link to="/">Home</Link>
            <span> | </span>
            <button onClick={logoutUser}>Logout</button>
            <span> | </span>
            <span>Welcome, {user.username}!</span>
          </>
        )}
        {!user && (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <h1>Home Page</h1>
    </div>
  )
}

export default Home
