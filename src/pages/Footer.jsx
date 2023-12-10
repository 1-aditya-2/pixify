import React from 'react';
import './footer.css';
import FooterNavItems from '../components/FooterNavItems'

function Footer(){
    const usefulLinks=[
        'Home',
        'Movies',
        'My List',
        'Terms of service',
        'Privacy Policy',
    ];
    return (
        <footer id='footer' className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/" className="logo d-flex align-items-center">
                                <span>Pixify</span>
                            </a> 
                            <p>
                                njldafnj dfnljn vfhi hbfhd fhdnjn hndvuf hnvfun uniu
                                jvjnfdjln vjnfj jnfv jnjdf upiuer jneiu jnvfeui
                                jndljnv ejvnfi fjevnil wieohu njckdlu nufvi.
                            </p>
                            <div className="social-links mt-3">
                                <a href='#' className="twitter">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href='#' className="facebook">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                <a href='#' className="instagram">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href='#' className="youTube">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </div>                       
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                {usefulLinks.map(link=> (
                                    <FooterNavItems key={link} name={link}/>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact text-center-text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                IIIT Kottayam<br/>
                                Kerala, India.<br/>
                                <strong>Phone: </strong> 9026316945<br/>
                                <strong>Email:</strong> meadisingh12@gmail.com<br/>
                            </p>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright{' '}
                    <strong>
                        <span>Pixify</span>
                    </strong>
                     . All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="#"><b>Aditya</b></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;