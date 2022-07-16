import express from "express"
import reviewFormRouter from "./reviewFormRouter.js"
import { Day } from "../../../models/index.js"
import DaySerializer from "../../../serializers/DaySerializer.js"

const daysRouter = new express.Router()

daysRouter.use("/:dayId/reviews",reviewFormRouter )

daysRouter.get("/", async (req, res) => {
    try {
        const days = await Day.query()
        return res.status(200).json({ days })
    }   catch (error) {
        return res.status(500).json({ errors: err })          
    }
})

daysRouter.get("/:id", async (req, res) => {
    
    try {
        const day = await Day.query().findById(req.params.id)
        const serializedDay = await DaySerializer.getDetail(day)
        return res.status(200).json({ day: serializedDay })
    }   catch (err) {
        return res.status(500).json({ errors: err})
    }
})

export default daysRouter   