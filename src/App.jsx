
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
          <PrivateRoute >
            <Route element={<Home/>} path='/' />
          </PrivateRoute>
          <Route element={<Login/>} path='/login'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
