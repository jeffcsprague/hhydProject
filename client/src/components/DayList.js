import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const DayList = props => {
    const [days, setDays] = useState([])

    const fetchDays = async () => {
        try {
            const response = await fetch('/api/v1/days')
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const dayData = await response.json()
            setDays(dayData.days)
        }   catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {

        fetchDays()
    },[])

    const dayListItems = days.map((day) => {
        return(
            <div key={day.id}>
                <Link to={`/days/${day.id}`}>
                    {dayjs(day.date).format("MMMM DD YYYY")}
                </Link>
            </div>
        )
    })

    return (
        <div className="Grid-container text-center align-center-middle daylist-page">
            <h3 className="cell daylist-tagline">SELECT A DAY TO REVIEW</h3>
            <h1 className="cell daylist-header">The Days</h1>
            <div className="grid-x align-center-middle daylist">
                <div className="cell list">
                {dayListItems}
                </div>
            </div>
            <div className="grid-x align-center-middle footer">© 2022 Hey How’s Your Day</div>
        </div>
    )
}
export default DayList