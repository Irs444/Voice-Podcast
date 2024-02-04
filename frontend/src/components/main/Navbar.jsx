import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBNavbarItem } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top" >
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Toggle button */}
                        <button
                            data-mdb-collapse-init=""
                            className="navbar-toggler"
                            type="button"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                                {/* <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height={15}
            alt="MDB Logo"
            loading="lazy"
          /> */}
                                <h4 style={{ fontFamily: "initial", fontWeight: "bold", color: "rebeccapurple" }}>PODCAST  <i class="fa fa-headphones" aria-hidden="true"></i></h4>
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold ms-3" href="#" to={"/"} >
                                        Home
                                    </Link>
                                </li>
                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link fw-bold' role='button'>
                                            Artist
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link><Link className="nav-link fw-bold" to="/main/artistlogin">
                                                Login
                                            </Link></MDBDropdownItem>
                                            <MDBDropdownItem link><Link className="nav-link fw-bold" to="/main/artistsignup">
                                                Become a Artist
                                            </Link></MDBDropdownItem>

                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold ms-3" href="#" to={"/main/browsepodcast"} >
                                        BrowsePodcast
                                    </Link>
                                </li>
                            </ul>

                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            {/* Icon */}
                            <a className="text-reset me-4" href="#">
                                <i className="fas fa-shopping-cart" />
                            </a>


                            <div className="me-3">

                                <Link type="button" className="nav-link btn btn-outline-warning rounded-pill fw-bold " href="#" to={"login"}>
                                    Login
                                </Link>

                            </div>
                            <div className="me-3">

                                <Link role="button" className="nav-link btn btn-outline-warning rounded-pill bg-warning fw-bold " href="#" to={"signup"}>
                                    Signup
                                </Link>

                            </div>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
            </>


        </div>
    )
}


export default Navbar;