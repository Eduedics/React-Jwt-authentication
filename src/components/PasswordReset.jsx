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
    <div className="forgot-container">
      <form onSubmit={handleSubmit} className="forgot-form">
        <h2 className="forgot-title">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="forgot-input"
        />
        <button type="submit" className="forgot-button">Send Reset Link</button>
      </form>
    </div>
  )
}

export default ForgotPassword