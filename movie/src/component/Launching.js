import React from "react";
import { Link } from "react-router-dom";
import '../component/Launching.css'
// import img1 from '../assets/avatar.jpg'
import Chat from '../component/chat'
const Launching = () => {
  return (
    <>
 <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Cineplex Connect</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Contents</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Latest Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Premium Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Pricing</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Cities
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              {/* <li><a className="dropdown-item" href="/">Chennai</a></li> */}
              <li><a className="dropdown-item" href="/">Banglore</a></li>
              <li><a className="dropdown-item" href="/">Indore</a></li>
              <li><a className="dropdown-item" href="/">Pune</a></li>
              <li><a className="dropdown-item" href="/">Hyderabad</a></li>
              <li><a className="dropdown-item" href="/">Chandigarh</a></li>
              <li/>
                {/* <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li> */}
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2 mx-3" type="search" placeholder="Search" aria-label="Search"/>

        </form>
        <div>
        <button className="btn btn-success d-flex justify-content- flex-start mt-3 ml-1" type="submit">Search</button>
        </div>
        <div className="d-flex justify-content- flex-start mt-3">
          <Link to="/LoginPage" className="btn btn-primary mx-1">Log In</Link>
          <Link to="/SignupPage" className="btn btn-success mx-1">Sign Up</Link>
        </div>
        {/* <div className="d-flex justify-content-end mt-3">

        </div> */}

      </div>
    </div>
  </div>
  <Chat/>
</nav>


</>
 
  );
};

export default Launching;
