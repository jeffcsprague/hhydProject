import React, { useState } from "react"

const NewReviewForm = (props) => {
    const {postReview} = props
    const [newReview, setNewReview] = useState({
        rating: "",
        content: "",
    })

    const handleInputChange = event => {
        setNewReview({
            ...newReview,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postReview(newReview)
        clearForm()
    }

    const clearForm = () => {
        setNewReview({
            rating: "",
            content: ""
        })
    }

    return (
        <div className="new-review-form" id="new-review-form">
            <h1 className="new-review-form-header text-left">Add Your Review</h1>
            <form onSubmit={handleSubmit}>
                <label className="text-left new-review-form-rating">Rate this Day

                    <select className="choice"
                        name="rating"
                        onChange={handleInputChange}
                        value={newReview.rating}
                    >
                        <option defaultValue="disabled selected">Select your rating</option>
                        <option value="2" >OK</option>
                        <option value="3" >Good</option>
                        <option value="1">Bad</option>
                    </select>
                </label>
                <label className="text-left new-review-form-review">
                    Review this Day
                    <textarea
                        type="text"
                        name="content"
                        onChange={handleInputChange}
                        value={newReview.content}
                        placeholder="300 characters or less"
                        cols="5"
                        rows="5"
                    ></textarea>
                </label>
                <div className="button-group expanded align-center new-review-form-button">
                <input  className="button" type="submit" value="Submit"/> 
                <a name="end"></a>
                </div>           
            </form>
        </div>
    )
}

export default NewReviewForm