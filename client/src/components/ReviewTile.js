import React from "react"
import { Link } from "react-router-dom"

const ReviewTile = ({ id, user, rating, content, createdAt }) => {

    if (rating<2) {
        rating = "\uf119"
    } else if (rating>=3) {
        rating = "\uf118"
    } else {
        rating = "\uf11a"
    }
    
    const formatDate = new Date(createdAt).toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
    
    return( 
        <div className="grid-container align-center-middle review-tile">
            <div>
                <Link to={`/days/${id}`}></Link>
            </div>
            <p className="review-tile-rating"> {rating} </p>
            <p className="review-tile-content"> {content} </p>
        <div className="grid-x align-middle review-tile-bottom-container">
            <p className="cell small-6 review-tile-userId"> {user.email} </p>
            <p className="cell small-6 review-tile-createdAt"> {formatDate} </p>
        </div>
        </div>
    )
}

export default ReviewTile