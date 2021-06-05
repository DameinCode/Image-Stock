import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchImageById, fetchImageBySearch} from "../../store/actions/image";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import classes from './PhotoPage.module.css'
import ResultLoader from "../../components/ResultLoader/ResultLoader";

class PhotoPage extends Component {

    async componentDidMount() {
        this.props.fetchImageById(this.props.match.params.id)
    }

    async componentDidUpdate(prevProps) {
        if (this.props.currentImage !== prevProps.currentImage) {
            // this.props.fetchImageById(this.props.match.params.id)
            this.props.fetchImageBySearch(this.props.currentImage.alt_description.split(' ')[Math.floor(Math.random() * ((this.props.currentImage.alt_description.split(' ').length -1 ) + 1)) + 0])
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>

                <div>
                    {
                        !this.props.currentImage
                            ? <Loader />
                            : <div className={classes.imageDiv}
                                   style = {{
                                       background: 'url(' + this.props.currentImage.urls.regular + ')' + ' 70% / cover border-box padding-box'
                                   }}>
                                <div className={classes.userInfo}>
                                    <img src={this.props.currentImage.user.profile_image.medium} className={classes.userImg}/>
                                    <div className={classes.userName}>
                                        <div style={{fontSize: '1.5rem'}}> {this.props.currentImage.user.name} </div>
                                        <p style={{fontSize: '1rem'}}>@{this.props.currentImage.user.instagram_username}</p>
                                    </div>
                                </div>
                                <nav className={classes.right}>
                                    <button
                                        className = {["fas fa-heart fa-lg", classes.templateButtons].join(' ')}
                                        style = {{
                                            marginLeft: '2rem'
                                        }}
                                        onClick = {this.props.liked ? this.props.onClick : null}
                                    />
                                </nav>
                              </div>
                    }
                </div>
                <div>
                    <ResultLoader />
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentImage: state.image.currentImage,
        loading: state.image.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchImageById: id => dispatch(fetchImageById(id)),
        fetchImageBySearch: search => dispatch(fetchImageBySearch(search))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage)


