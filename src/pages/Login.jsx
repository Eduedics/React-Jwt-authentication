import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'



const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loginUser } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await loginUser(username, password)
    if (success) window.location.href = '/'
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-links">
          <Link to="/register" className="login-link">Register</Link>
          <a href="/forgot-password" className="login-emphasis">Forgot Password?</a>
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  )
}

export default Login

