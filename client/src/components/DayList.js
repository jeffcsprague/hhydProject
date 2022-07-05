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

    // let dates_arr = dayListItems
    // dates_arr = dates_arr.map((element) => {
    //     const d = new Date(element)
    //     return `${d.toDateString()}`
    //   })
    //   console.log("Dates in the format MM/DD/YYYY : \n", dates_arr);



    return (
        <div>
            <div className="grid-x align-center daylist-page">
                <h1 className="text-center daylist-header">Pick Your Day</h1>
            </div>
        
            <div className="grid-x align-center daylist">
            <div className='shadow_inner'>
                <div className="grid-x align-center list">
                 <ul>
                    {dayListItems}
                    </ul>
                </div>
            </div>
            </div>
            <div className="grid-x align-center align-middle footer">© 2022 Hey How’s Your Day</div>
        </div>
    )
}
export default DayList

