import ReviewSerializer from "./ReviewSerializer.js"

class DaySerializer {
    static async getDetail(day) {
        try{
            const allowedAttributes = ["id", "date"]
       
            let serializedDays = {}
            for (const attribute of allowedAttributes) {
            serializedDays[attribute] = day[attribute]
            }

            const relatedReviews = await day.$relatedQuery("reviews")
            const serializedReviews = await Promise.all(
                relatedReviews.map(async (review) => await ReviewSerializer.getSummary(review))
            )

            serializedDays.reviews = serializedReviews
            return serializedDays
        }   catch (error) {
            throw error
        }
    }
}

export default DaySerializer