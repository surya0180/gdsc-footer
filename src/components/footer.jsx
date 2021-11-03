import React from 'react';
import classes from './footer.module.css'

const Footer = () => {
    return <footer>
        <div className={`container ${classes.heading}`}>
            <h4>Follow Us:</h4>
            <div className={`d-flex flex-row bd-highlight mb-3 ${classes.icons}`}>
                <div className={`p-2 bd-highlight`}>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="#"><i className="bi bi-twitter"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="#"><i className="bi bi-github"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="https://in.linkedin.com/company/gdsc-iiit-sri-city"><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="#"><i className="bi bi-youtube"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="#"><i className="bi bi-medium"></i></a>
                </div>
            </div>
        </div>
        <div className={`container ${classes.content}`}>
        </div>
        <div className={`container ${classes.trailing}`}>
            <div className="row">
                <div className="col-sm-2 col-md-2">
                    <h2>GDCSIIITS</h2>
                </div>
                <div className={`col-md-2 col-sm-2 ${classes.options}`}>Code Of Conduct</div>
                <div className={`col-md-2 col-sm-2 ${classes.options}`}>Terms & Services</div>
                <div className={`col-md-4 col-sm-4 ${classes.options}`}>Community Guidelines</div>
                <div className={`col-md-2 col-sm-2 ${classes.options} ${classes.ref}`}>Based on Project <a href="https://github.com/GDSCIIITS/GDSC-Website">gdsciiits</a></div>
            </div>
        </div>
    </footer>
}

export default Footer;