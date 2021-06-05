import React, {Component} from 'react';
import classes from "./ImageItem.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setСhosenImage, removeChosenImage} from "../../store/actions/image";

class ImageItem extends Component {

    state = {
        onHover: false,
        inImg: false,
        isMouseInside: false,
        liked: false,
        likedStyle: ['fas fa-heart fa-lg', classes.templateButtons, classes.white],
        toChange: false
    }

    componentDidMount() {
        let temp = JSON.parse(localStorage.getItem('info-image'))
        for(let i = 0; i < temp.length; i++) {
            if (temp[i].id === this.props.image.id) {
                this.setState({
                    liked: true,
                    likedStyle: ['fas fa-heart fa-lg', classes.templateButtons,  classes.red]
                })
            }
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.image.id !== prevProps.image.id) {
            this.setState({
                liked: false,
                likedStyle:  ['fas fa-heart fa-lg', classes.templateButtons, classes.white]
            })
            let temp = JSON.parse(localStorage.getItem('info-image'))
            for(let i = 0; i < temp.length; i++) {
                if (temp[i].id === this.props.image.id) {
                    this.setState({
                        liked: true,
                        likedStyle: ['fas fa-heart fa-lg', classes.templateButtons,  classes.red]
                    })
                }
            }
        }
    }

    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }

    addImageToLocal = () => {
        this.props.setСhosenImage(this.props.image)
        this.setState({
            liked: true,
            likedStyle: ['fas fa-heart fa-lg', classes.templateButtons, classes.red]
        })
    }

    removeLike = () => {
        this.props.removeChosenImage(this.props.image)
        this.setState({
            liked: false,
            likedStyle: ['fas fa-heart fa-lg', classes.templateButtons, classes.white]
        })
    }


    render() {

        let imageStyles = [classes.image]

        if (this.state.isMouseInside) {
            imageStyles.push(classes.imageOnHover)
        }
        return (
            <div>
                <div className={classes.item}
                     onMouseEnter={this.mouseEnter}
                     onMouseLeave={this.mouseLeave}
                >
                    <NavLink to = {'/photo-page/'+ this.props.image.id}>
                        <img
                            src={this.props.image.urls.small}
                            className={imageStyles.join(' ')}
                            alt = 'prop'
                        />
                    </NavLink>

                    {this.state.isMouseInside
                        ? <div style = {{textAlign: 'center', justifyContent: 'center'}}>
                            <button
                                className = {this.state.likedStyle.join(' ')}
                                style = {{
                                    marginLeft: '2rem'
                                }}
                                onClick = {this.state.liked ? this.removeLike : this.addImageToLocal}
                            />
                            <NavLink to = {'/photo-page/'+ this.props.image.id}>
                                <button
                                    className= {["fa fa-expand", classes.templateButtons].join(' ')}
                                    style = {{
                                        marginLeft: '6rem',
                                        marginTop: '-7.2rem'
                                    }}>
                                </button>
                            </NavLink>
                            <a
                                href = {this.props.image.links.download} className={["fa fa-download", classes.templateButtons].join(' ')}
                                style = {{
                                    color: '#000000',
                                    marginLeft: '10rem',
                                }}
                            > </a>
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        setСhosenImage: infoImage => dispatch(setСhosenImage(infoImage)),
        removeChosenImage: infoImage => dispatch(removeChosenImage(infoImage))
    }
}


export default connect(null, mapDispatchToProps)(ImageItem)
