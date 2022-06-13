import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
        <li key={day.id}>
            <Link to={`/days/${day.id}`}>
            {day.date}
            </Link>
        </li>
        )
    })

    return (
        <div className="mainDiv">
            <h1 className="header">Pick a Day</h1>
            <ul>
                {dayListItems}
            </ul>
        </div>
    )
}
export default DayList