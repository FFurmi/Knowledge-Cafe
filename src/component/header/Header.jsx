import React from 'react';
import './Header.css'
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='header'>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid text-light d-flex justify-content-between align-items-center px-3">
                    <h3><a className="navbar-brand text-light" href="#">Knowledge Cafe</a></h3>
                    <div >
                        <button id='btn-icon' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span id='icon' className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item text-light">
                                    <a className="nav-link text-light" aria-current="page" href="">Home</a>
                                </li>
                                <li className="nav-item text-light">
                                    <a className="nav-link text-light" href="#">Link</a>
                                </li>
                                
                                <li className="nav-item">
                                    <img src={profile} alt="" />
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;