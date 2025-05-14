import React, { useState, useContext } from 'react'
import FlashMessageContext from '../context/FlashMessageContext'

const Register = () => {
  const { showMessage } = useContext(FlashMessageContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (response.ok) {
      showMessage('Registration successful! Please log in.', 'success')
      window.location.href = '/login'
    } else {
      const data = await response.json()
      showMessage(data.error || 'Registration failed', 'error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register