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
                                        <p>
                                        At present time I'm working on a multi-role, as a Web
                        Developer I design and create various websites. And as
                        UI/UX Designer I create many designs for Web
                        Applications and Mobile applications. I create the
                        beauty of the site. I'm responsible for the site's
                        technical aspects, such as its performance and capacity,
                        which are measures of a website's speed and how much
                        traffic the site can handle. In addition, I also create
                        content for the site.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row love-row wow fadeIn'>
                                <div className='col-md-3col-sm-6'>
                                    <div className='love-details' data-wow-delay=".1s">
                                        <i
                                        className='fa fa-pencil-square-o love-icon'
                                        aria-hidden="true">
                                        </i>
                                        <h3>working Hard</h3>
                                        <div className='underline1'></div>
                                        <div className='underline2'></div>
                                        <p>Always believe in hard-work in my profession</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6'>
                                    <div className='love-detils' data-wow-delay=".3s">
                                        <i
                                        className='fa fa-file-image-o love-icon'
                                        aria-hidden="true"></i>
                                        <h3>UI/UX Design</h3>
                                        <div className='underline1'></div>
                                        <div className='underline2'></div>
                                        <p>Love to do UI/UX design for new product</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6'>
                                    <div className='love-details' data-wow-delay=".2s">
                                        <i className='fa fa-globe love-icon'
                                        aria-hidden="true"></i>
                                        <h3>Web Design</h3>
                                        <div className='underline1'></div>
                                        <div className='underline2'></div>
                                        <p>Passionate about Web Design from start</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6'>
                                    <div className='love-details' data-wow-delay=".4s"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React>
    )
}