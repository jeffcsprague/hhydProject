import React, { useState } from "react"

const NewReviewForm = ({ postReview }) => {
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
        console.log(newReview)
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
        <div className="callout">
            <form onSubmit={handleSubmit}>
                <label>
                    Rating
                    <input
                        type="text"
                        name="rating"
                        onChange={handleInputChange}
                        value={newReview.rating}
                    />
                </label>

                <div>
                    <h1>Day Placeholder</h1>
                </div>

                <label>
                    Review
                    <input
                        type="text"
                        name="content"
                        onChange={handleInputChange}
                        value={newReview.content}
                    />
                </label>
                <div className="button-group">
                <input  className="button" type="submit" value="Submit" />
                </div>           
            </form>
        </div>
    )
}

export default NewReviewForm