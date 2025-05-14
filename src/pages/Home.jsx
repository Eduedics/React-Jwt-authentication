import React from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


export const Home = () => {
  const { user, logoutUser } = useContext(AuthContext)
  return (
    <div>
        <Link to='/'>Home</Link>
        <span>|</span>
        <Link to='/login'>Login</Link>
        <button onClick={logoutUser}>Logout</button>
        <h1>Welcome, {user?.username}!</h1>
      
    </div>
  )
}
export default Home;
