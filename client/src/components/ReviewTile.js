import React from "react"
import { Link } from "react-router-dom"

const ReviewTile = ({ id, user, rating, content, createdAt }) => {

    if (rating<2) {
        rating = "BAD"
    } else if (rating>=3) {
        rating = "GOOD"
    } else {
        rating = "OK"
    }
    
    const formatDate = new Date(createdAt).toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
    
    return( 
        <div className="grid-container align-center-middle review-tile">
            <div>
                <Link to={`/days/${id}`}></Link>
            </div>
            <p className="review-tile-rating"> {rating} </p>
            <p className="review-tile-content"> {content} </p>
            <p className="review-tile-userId">— {user.email} </p>
            <p className="review-tile-createdAt"> {formatDate} </p>
        </div>
    )
}

export default ReviewTile