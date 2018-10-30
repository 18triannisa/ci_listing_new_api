import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top bg-dark">
                <a className="navbar-brand btn btn-dark" href="/">BeritaKita</a>
                <div className="input-group search-bar">
                    <input type="text" className="form-control" placeholder="Search News" aria-label="Search News" aria-describedby="basic-addon2"></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link btn btn-dark login1" href="#">Log In</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link btn btn-dark signup1" href="#">Sign Up</a>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-fixed-top2 bg-dark nav2">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link btn btn-dark" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-dark" href="#">Finance</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-dark" href="#">Hot</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle btn btn-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Sport</a>
                        <a className="dropdown-item" href="#">Health</a>
                        <a className="dropdown-item" href="#">Travel</a>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
        </div>
        )    
}

export default Navbar;