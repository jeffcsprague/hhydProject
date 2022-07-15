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

   
    // const dateArray = days.map((element) => {
    //     return element.date
    // })

    // // let modDate = dateArray.toDateString()

    // let dates_arr = dateArray
    // dates_arr = dates_arr.map((element) => {
    //     const d = new Date(element)
    //     return `${d.toDateString()}`
    //   })
    //   console.log("Dates in the format MM/DD/YYYY : \n", dates_arr);
  

    const dayListItems = days.map((day) => {
        return(
         <div>    
       
            <div key={day.id}>
                <Link to={`/days/${day.id}`}>

                {dayjs(day.date).format("MMMM DD YYYY")}

                </Link>
            </div>
       
        </div>

        )
    })


    

console.log(dayListItems)


   


    return (
        <div>
            <div className="grid-container align-center daylist-tagline">EVERY DAY STARTS THE SAME WAY
            <div className="grid-container align-center daylist-page">
                <h1 className="text-center daylist-header">Pick a Day</h1>
            </div>
            </div>
        
            <div className="grid-container daylist">
           
                <div className="grid-container align-center text-center list">
                 <div>
                    {dayListItems}
                </div>
                </div>
        
            </div>
            <div className="grid-x align-center align-middle footer">© 2022 Hey How’s Your Day</div>
        </div>
    )
}
export default DayList

