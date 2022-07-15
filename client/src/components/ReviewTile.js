import React, { useSyncExternalStore } from "react"
import { Link } from "react-router-dom"

const ReviewTile = ({ id, userId, rating, content, createdAt }) => {

    if (rating<2) {
       rating = "BAD"
    } else if (rating>=3) {
        rating = "GOOD"
    } else {
        rating = "OK"
    }
    
    const formatDate = new Date(createdAt).toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
    //console.log(formatDate)
   
console.log(ReviewTile)


    
    
    return( 
        <div className="grid-container align-center review-tile">
            <div>
                <Link to={`/days/${id}`}></Link>
            </div>
            <p className="review-tile-rating"> {rating}</p>
            <p className="review-tile-content"> {content}</p>
            <p className="review-tile-userId"> — user {userId}</p>
            <p className="review-tile-createdAt"> Reviewed on {formatDate}</p>
        </div>
    )
}

export default ReviewTile

