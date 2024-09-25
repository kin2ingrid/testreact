import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    
    render() {
        return (
            <div>
                <div className="container-fluid counter-facts py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="counter">
                            <div className="counter-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="counter-content">
                                <h3>Nombre de Centre</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value" data-toggle="counter-up">3</span>
                                    <h4 className="text-secondary mb-0" style={{fontweight: "600;" ,fontsize: "25px;"}}>+</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="counter">
                            <div className="counter-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="counter-content">
                                <h3>Nombre d'ONG</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value" data-toggle="counter-up">2</span>
                                    <h4 className="text-secondary mb-0" style={{fontweight: "600;" ,fontsize: "25px;"}}>+</h4>
                                </div>
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

Counter.propTypes = {

};

export default Counter;