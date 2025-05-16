
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
