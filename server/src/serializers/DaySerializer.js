class DaySerializer {
    static getSummary(day) {
        const allowedAttributes = ["id", "date"]
       
        let serializedDay = {}
        for (const attribute of allowedAttributes) {
            serializedDay[attribute] = day[attribute]
        }
        return serializedDay
    }
}

export default DaySerializer