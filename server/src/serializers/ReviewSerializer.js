import UserSerializer from "./UserSerializer.js"

class ReviewSerializer {
    static async getSummary(review) {
        try {
            const allowedAttributes = ["id", "userId", "dayId", "rating", "content", "createdAt"]
        
            const serializedReview = {}
            for (const attribute of allowedAttributes) {
                serializedReview[attribute] = review[attribute]
            }

            const relatedUser = await review.$relatedQuery("user")
            const serializedUser = UserSerializer.getSummary(relatedUser)

            serializedReview.user = serializedUser
            return serializedReview
        }   catch (error) {
            throw error
        }
    }
}

export default ReviewSerializer