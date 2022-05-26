import React, { useState, useEffect } from "react"

const DayList = props => {
    const [days, setDays] = useState([])

    const fetchData = async () => {
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
        fetchData()
    },[])

    const dayListItems = days.map((day) => {
        return( 
        <li key={day.id} date={day.date}> 
        {day.date}
        
        </li>
        )
    })

    return (
        <div>
            <h1> Pick a Day</h1>
            <ul>
                {dayListItems}
            </ul>
        </div>
    )
    }


export default DayList