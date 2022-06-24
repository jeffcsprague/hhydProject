import express from "express"
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "objection"

const reviewFormRouter = new express.Router({ mergeParams: true })
//const { dayId } = req.params  // object destructuring
reviewFormRouter.post("/", async (req, res) => {
    const userId = req.user.id
    const dayId  = req.params.dayId
    const { body } = req
    const formInput = cleanUserInput(body)
    console.log("formInput:", formInput)
    const { rating, content } = formInput
    console.log("dayId", dayId)
    console.log("userId", userId)

    try {
        //breaking on line 18!!!!!!!!
        const newReview = await Review.query().insertAndFetch({ rating, content, userId, dayId })
        console.log(newReview)                  
        res.status(201).json({review: newReview})
    }   catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(422).json({ errors: error })
    }
})

export default reviewFormRouter