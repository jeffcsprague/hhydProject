import express from "express"
import { Review } from "../../../models/index.js"
import ReviewSerializer from "../../../serializers/ReviewSerializer.js"

const reviewsRouter = new express.Router()

reviewsRouter.get("/", async (req, res) => {
    try {
        const reviews = await Review.query()
        return res.status(200).json({ reviews: reviews })   
    }   catch (error) {
        return res.status(500).json({ errors: error })
    }
})

reviewsRouter.get("/:id", async (req, res) => {
    try {
        const review = await Review.query().findById(req.params.id)
        const serializedReview = await ReviewSerializer.getDetails(review)
        return res.status(200).json({ review: serializedReview })
    }   catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default reviewsRouter
