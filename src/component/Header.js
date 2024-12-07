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
                                    aria-expanded="false"></button>
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