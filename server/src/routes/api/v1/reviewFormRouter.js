import express from "express"
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "objection"

const reviewFormRouter = new express.Router({ mergeParams: true })

reviewFormRouter.post("/", async (req, res) => {
  
   const { body } = req
    const formInput = cleanUserInput(body)
    console.log("formInput:", formInput)
    const { rating, content } = formInput
    
 
    try {
        //breaking on line 18!!!!!!!!
        const newReview = await Review.query().insertAndFetch({ rating, content })
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