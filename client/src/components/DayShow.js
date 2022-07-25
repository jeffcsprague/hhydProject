import React, { useState, useEffect } from "react"
import NewReviewForm from "./NewReviewForm"
import ReviewTile from "./ReviewTile"
import ErrorListForm from "./ErrorListForm.js"
import translateServerErrors from "../services/translateServerErrors"

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const DayShow = props => {
    const [day, setDay] = useState({
        date: "",
        reviews: []
    })
    const [errors, setErrors] = useState([])
    
    const dayId = props.match.params.id

    const thisDate = day.date

    const getReviews = async () => {
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
        getReviews()
    }, [])

    const postReview = async (newReviewData) => {
        try {
            const response = await fetch(`/api/v1/days/${dayId}/reviews`, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(newReviewData)    
            })

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
                    setDay({...day, reviews: updatedReviews})               
            }
        }   catch(error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const dayRatingArray = day.reviews.map((element) => {
        return element.rating
    })

    const dayRatingSum = dayRatingArray.reduce((a, b) => a + b, 0)
    const dayRatingAverage = dayRatingSum/dayRatingArray.length
    
    let modifiedAverage = dayRatingAverage
    if (modifiedAverage<=1.6625) {
        modifiedAverage = "BAD"
    } else if (modifiedAverage>=2.33125) {
        modifiedAverage = "GOOD"
    } else {
        modifiedAverage = "OK"
    }

    const ReviewTiles = day.reviews.map((reviewObject) => {
        return (
            <ReviewTile
            key={reviewObject.id}
            {...reviewObject}
            />
        )
    })   
   
    const reversed = ReviewTiles.reverse()
   
    return(
        <div className="grid-container day-show-page">
            <h3 className="cell days-show-tagline">READ & WRITE REVIEWS</h3>
            <h1 className="cell days-show-average">{modifiedAverage}</h1>
            <h4 className= "text-center align-center average-rating-text">(AVERAGE RATING)</h4>
            <h2 className="text-center days-show-header-text">{dayjs(thisDate).format("M.DD.YY")}</h2>
            <div className="grid-container days-show-review-tiles">{ReviewTiles} 
                <div className="cell text-center new-review-container">
                    <ErrorListForm errors={errors}/>
                    <NewReviewForm postReview={postReview}/>
                </div>
            </div>              
            <div className="grid-x align-center-middle footer">988 Suicide & Crisis Lifeline at 988</div>
        </div>
    )
}

export default DayShow