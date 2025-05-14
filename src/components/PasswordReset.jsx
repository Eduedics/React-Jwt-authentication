import React, { useState, useContext } from 'react'
import FlashMessageContext from '../context/FlashMessageContext'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const { showMessage } = useContext(FlashMessageContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/api/password-reset/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (response.ok) {
      showMessage('Reset link sent to your email!', 'success')
    } else {
      showMessage('Email not found or error occurred', 'error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Reset Link</button>
    </form>
  )
}

export default ForgotPassword