import React, { useState, useEffect } from "react"

import NewReviewForm from "./NewReviewForm"
import ReviewTile from "./ReviewTile"
import ErrorListForm from "./ErrorListForm.js"
import translateServerErrors from "../services/translateServerErrors"

const DayShow = props => {
    const [day, setDay] = useState({
        date: "",
        reviews: []
    })
    const [errors, setErrors] = useState([])

    const dayId = props.match.params.id

    const getDay = async () => {
        try {
            const response = await fetch(`/api/v1/days/${dayId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const responseBody = await response.json()
            setDay(responseBody.day)
        }   catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getDay()
    }, [])

    const postReview = async (newReviewData) => {
        console.log(dayId)
        try {
            const response = await fetch(`/api/v1/days/${dayId}/reviews`, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(newReviewData)    
            })
            console.log("response:", response)
            if (!response.ok) {
                if(response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    return setErrors(newErrors)
                }   else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw(error)
                }   
            }   else {
                const body = await response.json()
                    const updatedReviews = day.reviews.concat(body.review)
                    setErrors([])
                    setNewReview({...day, reviews: updatedReviews})               
            }
        }   catch(error) {
            console.error(`Error in fetch: ${error.message}`)
    
        }
    }

    const ReviewTiles = day.reviews.map((reviewObject) => {
        return (
            <ReviewTile
            key={reviewObject.id}
            {...reviewObject}
            />
        )
    })
    
    return(
        <div className="mainDiv">
            <h1 className="header"> {day.date}</h1>
            <h4>Reviews</h4>
            {ReviewTiles}
            <div>
                <ErrorListForm errors={errors} />
                <NewReviewForm
                    postReview={postReview}
                />
            </div>
        </div>
    )
}


export default DayShow