import React, { createContext, useState, useEffect } from 'react'
<<<<<<< HEAD
import {jwtDecode} from 'jwt-decode'

import FlashMessageContext from './FlashMessageContext'
import { useContext } from 'react'
=======
import jwt_decode from 'jwt-decode'
>>>>>>> 16015ae (auth info accessible globaly)

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
<<<<<<< HEAD
    const { showMessage } = useContext(FlashMessageContext)

=======
>>>>>>> 16015ae (auth info accessible globaly)
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  )

  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
<<<<<<< HEAD
      ? jwtDecode(JSON.parse(localStorage.getItem('authTokens')).access)
=======
      ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access)
>>>>>>> 16015ae (auth info accessible globaly)
      : null
  )

  // Login function
  const loginUser = async (username, password) => {
    const response = await fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
    //   data sent to db
=======
>>>>>>> 16015ae (auth info accessible globaly)
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
<<<<<<< HEAD
    showMessage('Logged out successfully', 'info')
=======
>>>>>>> 16015ae (auth info accessible globaly)
  }

  // Auto-login from localStorage
  useEffect(() => {
    if (authTokens) {
<<<<<<< HEAD
      setUser(jwtDecode(authTokens.access))
=======
      setUser(jwt_decode(authTokens.access))
>>>>>>> 16015ae (auth info accessible globaly)
    }
  }, [authTokens])

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext