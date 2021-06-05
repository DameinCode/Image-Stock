import React, { Component } from 'react'
import classes from './SearchHistory.module.css'
import {connect} from "react-redux";
import {removeSearchTitle} from "../../store/actions/search";

class SearchHistory extends Component{

    state = {
        results: []
    }

    componentDidMount() {
        this.setState({
            results: JSON.parse(localStorage.getItem('searchTitle'))
        })
    }


    remove(item) {
        this.props.removeSearchTitle(item.its)
        this.setState({
            results: JSON.parse(localStorage.getItem('searchTitle'))
        })
    }

    render()
    {
        return (

            <div className={classes.Searched}>
                <div className={classes.SearchWrapper}>
                    <h1>История поиска</h1>
                    <div className={classes.SearchItem}>
                        {this.state.results.map((its, index) => {
                            return (
                                <div key={index} className={[classes.spaceBetween, classes.items].join(' ')}>
                                    <p>{its}</p>
                                    <button className={classes.right} onClick = {() => this.remove({its})}>X</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeSearchTitle: title => dispatch(removeSearchTitle(title))
    }
}


export default connect(null, mapDispatchToProps)(SearchHistory)
