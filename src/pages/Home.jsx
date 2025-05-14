import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export const Home = () => {
  const { user, logoutUser } = useContext(AuthContext)

  return (
    <div className="home-container">
      <nav className="home-nav">
        {user ? (
          <>
            <Link to="/" className="nav-link">Home</Link>
            <button onClick={logoutUser} className="nav-button">Logout</button>
            <span className="nav-user">Welcome, {user.username}!</span>
          </>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </nav>

      <h1 className="home-title">Home Page</h1>
    </div>
  )
}

export default Home
