import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <>
        { /*navbar-light bg-light---collapse navbar-collapse*/} 
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-light bg-light ml-auto">
                        <li className="nav-item active" >
                            <NavLink  className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink  className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink  className="nav-link" to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink  className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </>
    )
}

export default Navbar;