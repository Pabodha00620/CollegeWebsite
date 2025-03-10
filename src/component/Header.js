import React from "react";

function Haeder(){
    return (
        <React.StrictMode>
            <div className="menubar">
                <div className="menubar-cotent">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3">
                                <div className="row">
                                    <div className="site-title">
                                        <a href="/#home" style={{ textDecoration: "none" }}>
                                        <h3>College Website</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="navbar-header">
                                    <button
                                    type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1"
                                    aria-expanded="false">
                                        <span className="sr-only">Toggle Navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>                   
                                    </button>
                                </div>
                                <div className="col-md-9 col-sm-9 navbar-style">
                                    <div className="collapse navbar-collapse"
                                    id="bs-example-navbar-collapse-1"
                                    >
                                        <ul className="nav navbar-nav"></ul>
                                        <li>
                                            <a href="/#home" className="active">
                                            Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#about">About</a>
                                        </li>
                                        <li>
                                            <a href="/#skil">Skil</a>
                                        </li>
                                        <li>
                                            <a href="/#resum">Education</a>
                                        </li>
                                        <li>
                                            <a href="/#service">Service</a>
                                        </li>
                                        <li>
                                            <a href="/#blog">Blog</a>
                                        </li>
                                        <li>
                                            <a href="/#contact">Contact</a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>
            </div>
        </React.StrictMode>
    )

}

export default Header;