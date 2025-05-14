
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './utils/PrivateRoute'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
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
          <Route element={<Login/>} path='/login'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
