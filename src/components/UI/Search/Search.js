import React from 'react'
import classes from './Search.module.css'

const Search = props => {
    return (
        <div className={classes.center}>
            <form action="" className={classes.searchBar}>
                <input
                    type="search"
                    name="search"
                    pattern=".*\S.*"
                    required
                    onChange={props.onChange}
                />
                    <button
                        className={classes.searchBtn}
                        onClick={props.onClick}
                    >
                        <span>Search</span>
                    </button>
            </form>
        </div>
    )
}

export default Search
