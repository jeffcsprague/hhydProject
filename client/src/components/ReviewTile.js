import React, { useSyncExternalStore } from "react"
import { Link } from "react-router-dom"

const ReviewTile = ({ id, userId, rating, content, createdAt }) => {
    
    const formatDate = new Date(createdAt).toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
    console.log(formatDate)
   
    
    
    
    return( 
        <div className="grid-container align-center review-tile">
            <div>
                <Link to={`/days/${id}`}></Link>
            </div>
            <p className="review-tile-rating"> {rating}</p>
            <p className="review-tile-content"> {content}</p>
            <p className="review-tile-userId"> — user {userId}</p>
            <p className="review-tile-createdAt"> reviewed on {formatDate}</p>
        </div>
    )
}

export default ReviewTile

