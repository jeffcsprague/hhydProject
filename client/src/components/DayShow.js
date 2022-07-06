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
    console.log(dayId)
    const thisDate = day.date
    console.log("This Date Experiment:", thisDate)

    // const readable_date = new Date(thisDate).toDateString()
    // console.log(readable_date)

    const formatDate = new Date(thisDate).toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) 
    console.log(formatDate)
    const newDate = formatDate.replace(/-|\//g, ".")
    console.log(newDate)

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

    const ReviewTiles = day.reviews.map((reviewObject) => {
        return (
            <ReviewTile
            key={reviewObject.id}
            {...reviewObject}
            />
        )
    })
    
    return(
        <div className="grid-container mainDiv">
             <div className="grid-container  align-center days-show-symbol">

            </div>
            <div className="grid-container align-center days-show-header">
                <h1 className="text-center days-show-header-text">{newDate}</h1>
            </div>
            <div className="box flex-container align-center align middle add-review-button">
                <input type="submit" className="button expanded" value="Add Review" />
            </div>
            <div className="grid-container align-center days-show-review-tiles">{ReviewTiles}
            </div>
              
            <div className="grid-x align-center align-middle footer">© 2022 Hey How’s Your Day</div>
        </div>
    )
}


export default DayShow