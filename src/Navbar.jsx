import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="container-fluid" style={{"background":"rgb(5, 54, 123)"}}>
            <div className="row">
                <div className="col-3">
                    <p className="text-white pt-2 text-right"><i class="fa-regular fa-envelope"></i> learn@takalkarclasses.com</p>
                </div>
                <div className="col-3">
                    <p className="text-white pt-2 text-center"><i class="fa-solid fa-phone"></i> +91 98810 98308</p>
                </div>
                <div className="col-6 pr-5">
                    <p className="text-white pt-1 pb-0 mb-0 text-right" style={{"font-size":"25px"}}><i className="fa-brands fa-facebook pr-1"></i> <i className="fa-brands fa-instagram pr-1"></i> <i class="fa-brands fa-twitter pr-1"></i> <i class="fa-brands fa-youtube pr-1"></i></p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
        <div className="row" style={{borderBottom:"1px solid black"}}>
          <div className="col-md-12 p-0">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="#">
                <img
                  src="https://takalkarclasses.com/wp-content/uploads/2023/04/new-1.png"
                  height="50px"
                  alt="Logo"
                  className="pl-3"
                />
              </a>
              <a className="navbar-brand" href="#">
                <img
                  src="https://takalkarclasses.com/wp-content/uploads/2023/04/Takalkar-classes-centres-in-pune-and-pcmc.png"
                  height="50px"
                  alt="Logo"
                  className="pl-3"
                />
              </a>
              <button className="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#da">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="da">
              <ul className="navbar-nav" style={{paddingLeft:"150px"}}>
                  <li className="nav-item active">
                  <NavLink className="nav-link text-secondary pl-4 active" style={{"fontWeight":"bold"}} to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link text-secondary pl-4" style={{"fontWeight":"bold"}} to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link text-secondary pl-4" style={{"fontWeight":"bold"}} to="/cources">Courses</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link text-secondary pl-4" style={{"fontWeight":"bold"}} to="/addmissions">Addmissions</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link text-secondary pl-4" style={{"fontWeight":"bold"}} to="/gallary">Gallary</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link text-secondary pl-4" style={{"fontWeight":"bold"}} to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-danger ml-4 mt-1">Enquire Nov</button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
        </>
    )
}
export default Navbar;
