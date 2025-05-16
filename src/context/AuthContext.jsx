import React, { createContext, useState, useEffect } from 'react'
import {jwtDecode} from 'jwt-decode'

import FlashMessageContext from './FlashMessageContext'
import { useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const { showMessage } = useContext(FlashMessageContext)

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  )

  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
      ? jwtDecode(JSON.parse(localStorage.getItem('authTokens')).access)
      : null
  )

  // Login function
  const loginUser = async (username, password) => {
    const response = await fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    //   data sent to db
      body: JSON.stringify({ username, password }),
    })

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('authTokens', JSON.stringify(data))
      setAuthTokens(data)
      setUser(jwtDecode(data.access))
      showMessage('Login successful!', 'success')
      return true
    } else {
      showMessage('Invalid credentials', 'error')
      return false
    }
  }

  // Logout function
  const logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    showMessage('Logged out successfully', 'info')
  }

  // Auto-login from localStorage
  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access))
    }
  }, [authTokens])

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext