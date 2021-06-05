import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

export default function Header() {
    const links = [classes.link, classes.side]

    return (
        <div className={classes.space}>
            <nav className={classes.left}>
                <NavLink to="/" className={classes.link}> ImageStock </NavLink>
            </nav>
            <nav className={classes.right}>
                <NavLink to="/liked-images" className={classes.link}> &#10084; Избранное</NavLink>
                <NavLink to="/search-history" className={links.join(' ')}> История поиска</NavLink>
            </nav>
        </div>
    )
}
