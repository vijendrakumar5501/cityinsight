import React, { useState } from 'react'
import AddDetail from './component/AddDetail'
import Login from './component/Login'
import Signup from './component/Signup'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
// import Dashboard from './component/Dashboard'
import Refresh from './Refresh'
import Home from './component/Home'
import "./App.css"



const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }


  return (
    <div>
       <Refresh setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path='/' element={<Navigate to="/login"></Navigate>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/add-city' element={<AddDetail/>} />
          {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
          <Route path='/home' element={<PrivateRoute element={<Home />} />} />
         
        </Routes>

     


    </div>
  )
}


export default App