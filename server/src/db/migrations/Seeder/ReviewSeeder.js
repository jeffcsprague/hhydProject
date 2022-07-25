import { Review } from "../../../models/index.js"

class ReviewSeeder {
    static async seed() {
        const reviewsData = [
            {
                userId: 12,
                dayId: 1,
                rating: 3,
                content: "F ya!"
            },
            {
                userId: 1,
                dayId: 2,
                rating: 1,
                content: "Some days are just bad days, that's all."
            },
            {
                userId: 2,
                dayId: 2,
                rating: 3,
                content: "If your mind is empty, it is always ready for anything, it is open to everything. In the beginner's mind there are many possibilities, but in the expert's mind there are few."
            },
            {
                userId: 3,
                dayId: 2,
                rating: 2,
                content: "Wahhhhhh"
            },
            {
                userId: 4,
                dayId: 2,
                rating: 3,
                content: "You’re off to great places, today is your day. Your mountain is waiting, so get on your way."
            },
            {
                userId: 5,
                dayId: 2,
                rating: 3,
                content: "It always seems impossible until it is done."
            },
            {
                userId: 6,
                dayId: 3,
                rating: 3,
                content: "I feel Good."
            },
            {
                userId: 7,
                dayId: 3,
                rating: 2,
                content: "Every day is the start of something beautiful."
            },
            {
                userId: 8,
                dayId: 3,
                rating: 2,
                content: "Positive anything is better than negative nothing."
            },
            {
                userId: 9,
                dayId: 3,
                rating: 2,
                content: "day without laughter is a day wasted."
            },
            {
                userId: 10,
                dayId: 3,
                rating: 2,
                content: "A-OK"
            },
            {
                userId: 11,
                dayId: 3,
                rating: 2,
                content: "Wax on, wax off"
            },
            {
                userId: 12,
                dayId: 3,
                rating: 1,
                content: "Today sucks!"
            },
            {
                userId: 1,
                dayId: 3,
                rating: 1,
                content: "Learn From Yesterday, Live for Today, hope for tomorrow."
            },
            {
                userId: 2,
                dayId: 3,
                rating: 3,
                content: "mmmm mmmmm mmmmm"
            },
            {
                userId: 3,
                dayId: 4,
                rating: 2,
                content: "eh"
            },
            {
                userId: 4,
                dayId: 4,
                rating: 1,
                content: "You have good days, you have bad days."
            },
            {
                userId: 5,
                dayId: 4,
                rating: 1,
                content: "My head hurts"
            },
            {
                userId: 6,
                dayId: 4,
                rating: 1,
                content: "Lady sings the Blues."
            },
            {
                userId: 7,
                dayId: 5,
                rating: 3,
                content: "The best feeling in the world is to know that you belong to me and you are mine. Every morning that is all I need to know and that itself is enough for me to have a good day."
            },
            {
                userId: 8,
                dayId: 5,
                rating: 2,
                content: "Whateva"
            },
            {
                userId: 9,
                dayId: 5,
                rating: 3,
                content: "Let your unique awesomeness and positive energy inspire confidence in others."
            },
            {
                userId: 10,
                dayId: 6,
                rating: 1,
                content: "A bad day doesn’t cancel out a good life. Keep going."
            },
            {
                userId:11,
                dayId: 6,
                rating: 3,
                content: "It's good to be the King"
            },
            {
                userId: 12,
                dayId: 6,
                rating: 1,
                content: "When you’re having a bad day at work, a lot of times it’s your head. When you’re having good days, a lot of times it’s the absence of the mind."
            },
            {
                userId: 1,
                dayId: 6,
                rating: 2,
                content: "Donuts"
            },
            {
                userId: 6,
                dayId: 6,
                rating: 3,
                content: "Getting Hitched."
            }
        ];

        for (const singleReviewData of reviewsData) {
            const currentReview = await Review.query().findOne(singleReviewData)
            if (!currentReview) {
                await Review.query().insert(singleReviewData)
            }
        }
    }
}

export default ReviewSeeder