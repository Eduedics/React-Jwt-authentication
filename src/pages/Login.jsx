// src/pages/Login.js
import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login

