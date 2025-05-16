import React from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <span>|</span>
        <Link to='/login'>Login</Link>
        
        <p>this is my home page</p>
    </div>
  )
}
export default Home;
