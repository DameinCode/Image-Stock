import React, {useEffect, useState} from 'react'
import classes from './LikedImages.module.css'
import ImageItem from "../ImageItem/Item";
import Header from "../Header/Header";
import Button from "../UI/Button/Button";

function LikedImages() {



    const [results, setResult] = useState(null)

    useEffect(() => {
        let temp = JSON.parse(localStorage.getItem('info-image'))
        setResult(temp)
    }, [])

    return (
        <div>
            <Header />
            <div>
                <div className={classes.typeView}>
                    <Button img="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-260nw-432264136.jpg" alt = "button"/>
                    <Button img="https://www.iconbolt.com/preview/facebook/remix-icon-fill/function.svg" alt = "button"/>
                </div>
            </div>
            <div className={classes.Liked}>
                <div className={classes.container}>

                    {results ? results.map((img, index) => {
                        return <div key={index}>
                            <ImageItem image={img} />
                        </div>
                    }): null}
                </div>
            </div>
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         chosen: state.image.chosen
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         getLikedImages: dispatch(getLikedImages())
//     }
// }

export default LikedImages

