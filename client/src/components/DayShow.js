import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NewReviewForm from "./NewReviewForm"
import ReviewTile from "./ReviewTile"
import ErrorListForm from "./ErrorListForm.js"
import translateServerErrors from "../services/translateServerErrors"
import { element } from "prop-types"

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
    console.log(dayId)
    const thisDate = day.date
    console.log("This Date Experiment:", thisDate)
    // const formatDate = new Date(thisDate).toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
    // console.log(formatDate)
    // const newDate = formatDate.replace(/-|\//g, ".")
    
    // console.log(newDate)


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
        console.log(dayId)
        try {
            console.log(newReviewData)
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
console.log(day.reviews)

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

console.log(dayRatingAverage)

    const ReviewTiles = day.reviews.map((reviewObject) => {
        return (
            <ReviewTile
            key={reviewObject.id}
            {...reviewObject}
            />
        )
    })

    console.log(ReviewTiles.rating)
    
    return(
        <div className="grid-container mainDiv">
            <div className="grid-container align-center days-show-tagline">READ & WRITE REVIEWS
            </div>
             <div className="grid-container text-center align-center days-show-average">{modifiedAverage}
            
            </div>
            <p className= "text-center align-center average-rating-text">(AVERAGE RATING)</p>
            <div className="grid-container align-center days-show-header">
                <h1 className="text-center days-show-header-text">{dayjs(thisDate).format("M.DD.YY")}</h1>
            </div>
            <div className="grid-container align-center days-show-review-tiles">{ReviewTiles} 
                <div className="text-center new-review-container">
                    
                   <ErrorListForm errors={errors} />
                    <NewReviewForm postReview={postReview} />
                </div>
            </div>
              
            <div className="grid-x align-center align-middle footer">© 2022 Hey How’s Your Day</div>
        </div>
    )
}


export default DayShow