import React, {Component} from 'react'
import classes from './ResultLoader.module.css'
import ImageItem from "../ImageItem/Item";
import {fetchImageBySearch} from "../../store/actions/image";
import {connect} from "react-redux";

class ResultLoader extends Component {

    componentDidMount () {
        this.props.fetchImageBySearch('selfie')
    }

    render() {
        return (
            <div className={classes.Loader}>
              <div className={classes.container}>
                  {this.props.results.map((img, index) => {
                      return (
                          <div key={index}>
                          <ImageItem image={img}/>
                      </div>
                      )
                  })}
              </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.image.results,
        clientId: state.image.clientId,
        loading: state.image.loading
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchImageBySearch: search => dispatch(fetchImageBySearch(search))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultLoader)
