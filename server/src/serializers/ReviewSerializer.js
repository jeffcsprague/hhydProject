class ReviewSerializer {
    static getSummary(review) {
        const allowedAttributes = ["id", "userId", "dayId", "rating", "body", "createdAt"]
        const serializedApplicants = {}
        for (const attribute of allowedAttributes) {
            serializedApplicants[attribute] = applicant[attribute]
        }
        return serializedApplicants
    }
}

export default ReviewSerializer