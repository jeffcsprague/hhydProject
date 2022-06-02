import express from "express"
import { Day }from "../../../models/index.js"
import DaySerializer from "../../../serializers/DaySerializer.js"

const daysRouter = new express.Router()

daysRouter.get("/", async (req, res) => {
    try {
        const days = await Day.query()
        const serializedDays = days.map(day => DaySerializer.getSummary(day))
        return res.status(200).json({days: serializedDays})
    }   catch (error) {
        return res.status(500).json({ errors: error })          
    }
})

export default daysRouter   