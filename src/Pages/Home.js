import React from 'react';

const Home = () => {
    return (
        <React className = "main-page-content">
            <div id='home'>
                <div id="particles-js"></div>
                <div className="table-cell">
                    <div className='container'>
                        <div className='row home-row'>
                            <div className='col-md-12 col-sm-12'>
                                <div className='home-tet woow fadeIn text-center'>
                                    <div className='cd-headline clip is-full-width'>
                                        <h1 className='cd-headline clip is-full-width'>
                                        <span
                                        className='cd-words-wrapper'
                                        style={{width: "266px", overflow: "hidden"}}
                                        >
                                            < b className='is-hidden'>Amal Perera</b>
                                            < b className='is-hidden'>Designer</b>
                                            < b className='is-hidden'>Developer</b>
                                        </span>
                                        </h1>
                                        <div className='about-social-icon text-center'>
                                            <ul className='about-social'>
                                                <li className='wow fadeIn' data-wow-delay=".4s">
                                                    <a href='' 
                                                    target='newtab'>
                                                        <i 
                                                        className='fa fa-linkedin'
                                                        aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className='wow fadeIn' data-wow-delay=".2s">
                                                <a href='' 
                                                    target='newtab'>
                                                        <i 
                                                        className='fa fa-github'
                                                        aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className='wow fadeIn' data-wow-delay=".6s">
                                                    <a href='' 
                                                    target='newtab'>
                                                        <i 
                                                        className='fa fa-instagram'
                                                        aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React>
    )
}