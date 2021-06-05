import React, { Component } from 'react'
import classes from './Home.module.css'
import Search from "../../components/UI/Search/Search";
import Button from "../../components/UI/Button/Button";
import {NavLink} from "react-router-dom";
import ResultLoader from "../../components/ResultLoader/ResultLoader";
import Header from "../../components/Header/Header";
import { fetchImageBySearch} from "../../store/actions/image";
import {connect} from "react-redux";
import searchTitleInLocal from "./serchtitleInLocal";
import {addSearchTitle} from "../../store/actions/search";

class Home extends Component {

    state = {
        search: ''
    }

    onChangeHandler(value) {
        this.setState(
            {search: value}
            )
    }

    onClickHandler = event => {
        event.preventDefault()
        if (this.state.search.trim() !== '')
            this.props.fetchImageBySearch(this.state.search)
        if (! searchTitleInLocal(this.state.search)) {
            this.props.addSearchTitle(this.state.search)
        }

    }

    searchClicked = event => {
        this.props.fetchImageBySearch(event.target.innerHTML)
    }


    render() {
        return (
            <div className={classes.home}>
                <div className={classes.header}>
                    <Header />

                    <div className={classes.center}>
                        <Search
                            onChange = {event => this.onChangeHandler(event.target.value)}
                            onClick = {this.onClickHandler}
                        />
                        <hr/>

                    </div>

                    <div className={classes.offersDiv}>
                        <nav className={classes.center}>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Wallpapers </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Textures and patterns </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Nature </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Current events </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Architecture </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Business and Work </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Film </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Animals </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Travel </NavLink>
                            <NavLink to='/' className={[classes.offers, classes.buttons].join(' ')} onClick={this.searchClicked}> Fashion </NavLink>
                        </nav>
                    </div>

                </div>

                <div>
                    <div className={classes.typeView}>
                        <Button img="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-260nw-432264136.jpg" alt = "button"/>
                        <Button img="https://www.iconbolt.com/preview/facebook/remix-icon-fill/function.svg" alt = "button"/>
                    </div>
                </div>


                <ResultLoader />

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchImageBySearch: search => dispatch(fetchImageBySearch(search)),
        addSearchTitle: title => dispatch(addSearchTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(Home)
