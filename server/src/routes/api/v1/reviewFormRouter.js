import express from "express"
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "objection"

const reviewFormRouter = new express.Router({ mergeParams: true })

reviewFormRouter.post("/", async (req, res) => {
   
    const formInput = cleanUserInput(req.body)
    try {
        const newReview = await Review.query().insertAndFetch({ ...formInput, dayId: req.params.dayId, userId: req.user.id })                  
        res.status(201).json({review: newReview})
    }   catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(422).json({ errors: error })
    }
})

export default reviewFormRouter