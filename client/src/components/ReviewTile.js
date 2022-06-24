import React from "react"
import { Link } from "react-router-dom"

const ReviewTile = ({ id, userId, rating, content, createdAt }) => {
    return(
        <div className="callout">
            <h5>
                <Link to={`/days/${id}`}></Link>
            </h5>
            {rating}
            {userId}
            {content}
            {createdAt}
        </div>
    )
}

export default ReviewTile