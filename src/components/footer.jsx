import React from 'react';
import Content from './content';
import classes from './footer.module.css'

const Footer = () => {
    return <footer>
        <div className={"container" + " " + classes.heading}>
        </div>
        <div className={"container" + " " + classes.content}>
            < Content />
        </div>
        <div className={"container" + " " + classes.trailing}>
        </div>
    </footer>
}

export default Footer;