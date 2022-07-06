import { Review } from "../../../models/index.js"

class ReviewSeeder {
    static async seed() {
        const reviewsData = [
            {
                userId: 1,
                dayId: 1,
                rating: 1,
                content: "Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is!"
            },
            {
                userId: 1,
                dayId: 2,
                rating: 3,
                content: "If your mind is empty, it is always ready for anything, it is open to everything. In the beginner's mind there are many possibilities, but in the expert's mind there are few."
                
            },
            {
                userId: 2,
                dayId: 2,
                rating: 1,
                content: "But I know why I don’t share the bad days: it is because they are just bad days. They happen. I learn from them, try to improve from them, and I get through them."
                
            },
            {
                userId: 3,
                dayId: 2,
                rating: 1,
                content: "“Never give up. Everyone has bad days. Pick yourself up and keep going.”"
            }
        ]

        for (const singleReviewData of reviewsData) {
            const currentReview = await Review.query().findOne(singleReviewData)
            if (!currentReview) {
                await Review.query().insert(singleReviewData)
            }
        }
    }
}

export default ReviewSeeder