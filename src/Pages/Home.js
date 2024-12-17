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
                                                <li className='wow fadeIn' data-wow-delay=".8s">
                                                    <a href='' 
                                                    target='newtab'>
                                                        <i 
                                                        className='fa fa-twitter'
                                                        aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className='wow fadeIn' data-wow-delay="1s">
                                                    <a href='' 
                                                    target='newtab'>
                                                        <i 
                                                        className='fa fa-book'
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
                <div className='parallax' data-velocity="-.1"></div>
                <div className='parallax' data-velocity="-.5" data-fit="525"></div>
            </div>

            /*===================================== About =====================================*/

            <div id='about'>
                <div className='about-content'>
                    <div className='love-grid text-center'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='main-title text-center wow fadeIn'>
                                        <h3>What I do</h3>
                                        <div className='underline1'></div>
                                        <div className='underline2'></div>
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