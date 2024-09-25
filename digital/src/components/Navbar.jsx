import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid nav-bar p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                        <a href="" className="navbar-brand p-0">
                            {/* <!-- <h1 className="display-5 text-secondary m-0"><img src="img/armoirie.png" className="img-fluid" alt=""></h1> --> */}
                            <img src="img/armoirie.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="index.html" className="nav-item nav-link active">Aceuil</a>
                                <a href="institution.html" className="nav-item nav-link">Institutions</a>
                                <a href="ong.html" className="nav-item nav-link">ONG</a>
                                {/* <!-- <div className="nav-item dropdown">
                            <a href="#" className="nav-link" data-bs-toggle="dropdown"><span className="dropdown-toggle">Pages</span></a>
                            <div className="dropdown-menu m-0">
                                <a href="feature.html" className="dropdown-item">Feature</a>
                                <a href="countries.html" className="dropdown-item">Countries</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="training.html" className="dropdown-item">Training</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div> --> */}
                                <a href="#" className="nav-item nav-link">Contact</a>
                            </div>
                            {/* <!-- <button className="btn btn-primary btn-md-square border-secondary mb-3 mb-md-3 mb-lg-0 me-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button> */}
                            {/* <a href="" className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">Get A Quote</a> --> */}
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}


export default Navbar;