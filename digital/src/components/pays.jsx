import React, { Component } from 'react';
import PropTypes from 'prop-types';

class pays extends Component {
   
    render() {
        return (
            <div>
                <div className="container-fluid country overflow-hidden py-5">
            <div className="container">
                <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{marginbottom:" 70px;"}}>
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">Pays</h5>
                    </div>
                    </div>
                <div className="row g-4 text-center">
                    <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="country-item">
                            <div className="rounded overflow-hidden">
                                <img src="img/ouaga.jfif" className="img-fluid w-100 rounded" alt="Image"/>
                            </div>
                            <div className="country-flag">
                                <img src="img/bf.jfif" className="img-fluid rounded-circle" alt="Image"/>
                            </div>
                            <div className="country-name">
                                <a href="#" className="text-white fs-4">Burkina Faso</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        );
    }
}

pays.propTypes = {

};

export default pays;