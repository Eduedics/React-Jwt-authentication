import React from 'react'

export const Login = () => {
  return (
    <div>
      <form>
            <input type="text" name='username' placeholder='enter your username' />
            <input type="password" name='password' placeholder='enter your password' />
            <input type='submit'/>
      </form>
    </div>
  )
}
export default Login;
