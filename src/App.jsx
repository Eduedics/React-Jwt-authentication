
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './utils/PrivateRoute'
import Register from './pages/Register'
import FlashMessage from './components/FrashMessages'
import ForgotPassword from './components/PasswordReset'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <FlashMessage />
        <Routes>
      {/* PRIVATE ROUTE */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      {/* PUPLIC ROUTE */}
          
          <Route path="/register" element={<Register />} />
          <Route element={<Login/>} path='/login'/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
