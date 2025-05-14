import React from 'react'
import { Navigate } from 'react-router-dom'

// here children are the route on the app.jsx
const PrivateRoute = ({children}) => { 
    const authTokens = localStorage.getItem('authTokens')

// If user is authenticated, show the page; otherwise, redirect to login
  return authTokens ?children : <Navigate to='/login' />
}

export default PrivateRoute;