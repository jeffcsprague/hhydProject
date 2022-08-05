import express from "express"
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "objection"
import ReviewSerializer from "./../../../serializers/ReviewSerializer.js"

const reviewFormRouter = new express.Router({ mergeParams: true })

reviewFormRouter.post("/", async (req, res) => {
    const userId = req.user.id
    const dayId  = req.params.dayId
    const { body } = req
    const formInput = cleanUserInput(body)
    const { rating, content } = formInput

    try {
        const newReview = await Review.query().insertAndFetch({ rating, content, userId, dayId })   
        const serializedReview = await ReviewSerializer.getSummary(newReview)   
        res.status(201).json({ review: serializedReview })
    }   catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(422).json({ errors: error })
    }
})

export default reviewFormRouter