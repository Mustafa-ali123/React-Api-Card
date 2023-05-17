import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import React from 'react'
import Cardshow from "./Cardshow";
import Home from "./Home";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/buy' element={<Cardshow/>} /> 
            <Route path='/' element={<Home/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter
