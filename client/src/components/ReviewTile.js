import React from "react"
import { Link } from "react-router-dom"

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const ReviewTile = ({ id, user, rating, content, createdAt }) => {

    if (rating<2) {
        rating = <span className="material-symbols-outlined size-28">
        sentiment_dissatisfied
        </span>
    } else if (rating>=3) {
        rating = <span className="material-symbols-outlined size-28">
        sentiment_satisfied
        </span>
    } else {
        rating = <span className="material-symbols-outlined size-28">
        sentiment_neutral
        </span>
    }
       
    return( 
        <div className="grid-container align-center-middle review-tile">
            <div>
                <Link to={`/days/${id}`}></Link>
            </div>
        <div className="grid-x align-middle review-tile-top-container">
            <p className="cell small-1 review-tile-rating"> {rating} </p>
            <p className="cell small-11 review-tile-userId"> {user.email} </p>
        </div>
            <p className="review-tile-content"> {content} </p>
        <div className="grid-x align-middle review-tile-bottom-container">
            <p className="cell small-12 review-tile-createdAt"> Review submitted at {dayjs(createdAt).format("hh:mm A")} on {dayjs(createdAt).format("MM/DD/YY")} </p>
        </div>
        </div>
    )
}

export default ReviewTile