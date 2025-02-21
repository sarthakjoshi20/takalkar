import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './AboutUs.jsx';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Cources from './Cources.jsx';
import Addmission from './Addmissions.jsx';
import Gallary from './Gallary.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/cources' element={<Cources></Cources>}></Route>
          <Route path='/addmissions' element={<Addmission></Addmission>}></Route>
          <Route path='/gallary' element={<Gallary></Gallary>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}