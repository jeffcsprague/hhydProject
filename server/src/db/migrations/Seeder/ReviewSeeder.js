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
                userId: 4,
                dayId: 1,
                rating: 1,
                content: "Wahhh"
            },
            {
                userId: 2,
                dayId: 1,
                rating: 1,
                content: "But I know why I don’t share the bad days: it is because they are just bad days. They happen. I learn from them, try to improve from them, and I get through them."
            },
            {
                userId: 3,
                dayId: 1,
                rating: 1,
                content: "Never give up. Everyone has bad days. Pick yourself up and keep going."
            },
            {
                userId: 5,
                dayId: 1,
                rating: 3,
                content: "I feel Good."
            },
            {
                userId: 2,
                dayId: 2,
                rating: 3,
                content: "Every day is the start of something beautiful."
            },
            {
                userId: 3,
                dayId: 3,
                rating: 3,
                content: "Every morning brings new potential, but if you dwell on the misfortunes of the day before, you tend to overlook tremendous opportunities."
            },
            {
                userId: 1,
                dayId: 2,
                rating: 3,
                content: "day without laughter is a day wasted."
            },
            {
                userId: 3,
                dayId: 1,
                rating: 2,
                content: "I’m always thinking about creating. My future starts when I wake up every morning… Every day I find something creative to do with my life."
            },
            {
                userId: 2,
                dayId: 2,
                rating: 2,
                content: "Old friends pass away, new friends appear. It is just like the days. An old day passes, a new day arrives. The important thing is to make it meaningful: a meaningful friend – or a meaningful day."
            },
            {
                userId: 2,
                dayId: 1,
                rating: 1,
                content: "Today sucks!"
            },
            {
                userId: 3,
                dayId: 1,
                rating: 1,
                content: "Learn From Yesterday, Live for Today, hope for tomorrow."
            },
            {
                userId: 3,
                dayId: 2,
                rating: 3,
                content: "I hope everyone that is reading this is having a really good day. And if you are not, just know that in every new minute that passes you have an opportunity to change that."
            },
            {
                userId: 1,
                dayId: 2,
                rating: 3,
                content: "Today Rocks!"
            },
            {
                userId: 3,
                dayId: 2,
                rating: 1,
                content: "You have good days, you have bad days. But the main thing is to grow mentally."
            },
            {
                userId: 3,
                dayId: 2,
                rating: 1,
                content: "I think that when you get dressed in the morning, sometimes you’re really making a decision about your behavior for the day. Like if you put on flip-flops, you’re saying: ‘Hope I don’t get chased today.’ ‘Be nice to people in sneakers."
            },
            {
                userId: 6,
                dayId: 2,
                rating: 2,
                content: "Try to have a good day today, wherever you are, whatever you do, whoever is near, if no one is near. Try to be happy, because you may not see tomorrow. There is someone this morning, who didn’t wake up, who will never see this day. Try to feel lucky that this is not you."
            },
            {
                userId: 4,
                dayId: 2,
                rating: 3,
                content: "The best feeling in the world is to know that you belong to me and you are mine. Every morning that is all I need to know and that itself is enough for me to have a good day."
            },
            {
                userId: 3,
                dayId: 1,
                rating: 2,
                content: "Meh"
            },
            {
                userId: 6,
                dayId: 2,
                rating: 1,
                content: "In the periods of my life when I’ve had least contact with the Church, I’ve always assumed a belief in God is a solid thing, but clearly it’s a relationship; it has good days and bad days."
            },
            {
                userId: 5,
                dayId: 2,
                rating: 1,
                content: "Everyone is wounded. No one is healthy enough to never screw up when you’re in combat. But, I like to show that, and I like to show how people get back from that. You have to forgive each other."
            },
            {
                userId: 3,
                dayId: 3,
                rating: 3,
                content: "I love the phrase, ‘Somebody’s going to have a good day today, so it might as well be me.’ I feel like you bring everything to the character, I hope."
            },
            {
                userId: 4,
                dayId: 1,
                rating: 1,
                content: "When you’re having a bad day at work, a lot of times it’s your head. When you’re having good days, a lot of times it’s the absence of the mind."
            },
            {
                userId: 6,
                dayId: 3,
                rating: 2,
                content: "I think one thing we went through was common to a lot of people: You work your whole life to achieve something, then you achieve it and find out that you still have good days and bad days. So you start thinking, ‘Is that all there is?"
            },
            {
                userId: 6,
                dayId: 3,
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