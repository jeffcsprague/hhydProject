import express from "express"
import objection from "objection"
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
const { ValidationError } = objection

const reviewFormRouter = new express.Router({ mergeParams: true })

reviewFormRouter.post("/", async (req, res) => {
    const { body } = req 
    const formInput = cleanUserInput(body)
    const { rating, content } = formInput
    const { daysId } = req.params

    try {
        const newReview = await Review.query().insertAndFetch({ rating, content, daysId })
        return res.status(201).json({ review: newReview })
    }   catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(422).json({ errors: error })
    }
})

export default reviewFormRouter